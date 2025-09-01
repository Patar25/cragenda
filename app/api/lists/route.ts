// app/api/lists/route.ts
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

// GET /api/lists – return all lists for the signed‑in user
export async function GET() {
  const session = await auth();         // session will be null if not signed in
  if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });

  const lists = await prisma.list.findMany({
    where: { userId: session.user.id },
  });
  return Response.json(lists);
}

// POST /api/lists – create a new list for the signed‑in user
export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) return new Response("Unauthorized", { status: 401 });

  const { name } = await request.json(); // expects { name: 'New List' }
  const newList = await prisma.list.create({
    data: { name, userId: session.user.id },
  });
  return Response.json(newList);
}