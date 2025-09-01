// app/api/lists/[id]/route.ts
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

// export async function PUT(
//   request: NextRequest,
//   { params }: { params: { id: string } },
// ) {
//   const session = await auth();
//   if (!session) return new Response("Unauthorized", { status: 401 });

//   const { name } = await request.json();
//   const updated = await prisma.list.update({
//     where: { id: params.id, userId: session.user.id },
//     data: { name },
//   });
//   return Response.json(updated);
// }

// export async function DELETE(
//   request: NextRequest,
//   { params }: { params: { id: string } },
// ) {
//   const session = await auth();
//   if (!session) return new Response("Unauthorized", { status: 401 });

//   await prisma.list.delete({
//     where: { id: params.id, userId: session.user.id },
//   });
//   return new Response("Deleted", { status: 204 });
// }