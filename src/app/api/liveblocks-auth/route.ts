import { auth, currentUser } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../../convex/_generated/api";
import { Liveblocks } from "@liveblocks/node";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY!,
});

// TODO: remove this when type error with sessionClaims organization is fixed
interface SessionClaimsWithOrg {
  o: {
    id: string;
  };
}

export async function POST(req: Request) {
  const { sessionClaims } = await auth();
  if (!sessionClaims) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { o } = sessionClaims as SessionClaimsWithOrg;
  const sessionOrgId = o.id as string;

  const user = await currentUser();
  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { room } = await req.json();

  const document = await convex.query(api.documents.getById, { id: room });

  const isOwner = document.ownerId === user.id;
  const isOrganizationMember =
    document.organizationId && document.organizationId === sessionOrgId;

  if (!isOwner && !isOrganizationMember) {
    return new Response("Unauthorized", { status: 401 });
  }

  const name =
    user.firstName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous";
  const nameToNumber = name
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const hue = Math.abs(nameToNumber) % 360;

  // Convert HSL to Hex
  function hslToHex(h: number, s: number, l: number) {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }
  const color = hslToHex(hue, 80, 60);
  const session = liveblocks.prepareSession(user.id, {
    userInfo: {
      name: name,
      avatar: user.imageUrl,
      color,
    },
  });

  session.allow(room, session.FULL_ACCESS);
  const { body, status } = await session.authorize();

  return new Response(body, { status });
}
