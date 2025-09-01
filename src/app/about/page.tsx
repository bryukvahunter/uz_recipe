import { prisma } from "@/utils/prisma";
import React from "react";

export default async function AboutPage() {
  const users = await prisma.user.findMany();
  console.log(users);

  return (
    <div>
      <h1>About Page</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
