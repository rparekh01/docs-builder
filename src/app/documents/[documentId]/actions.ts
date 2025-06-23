"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";

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
  console.log("response: ", response);
  const users = response.data.map((user) => ({
    id: user.id,
    name:
      user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous",
    avatar: user.imageUrl,
  }));

  return users;
}
