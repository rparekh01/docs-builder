"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import { Id } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function getDocuments(ids: Id<"documents">[]) {
  return await convex.query(api.documents.getByIds, { ids });
}

interface SessionClaimsWithOrg {
  o: {
    id: string;
  };
}

export async function getUsers() {
  const { sessionClaims } = await auth();
  const { o } = sessionClaims as SessionClaimsWithOrg;
  const sessionOrgId = o.id as string;
  const clerk = await clerkClient();

  const response = await clerk.users.getUserList({
    organizationId: [sessionOrgId],
  });

  const users = response.data.map((user) => ({
    id: user.id,
    name:
      user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous",
    avatar: user.imageUrl,
    color: "",
  }));

  return users;
}
