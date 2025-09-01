import prisma from "@/lib/prisma";

export const GET = async (request: Request) => {
    const tasks = await prisma.task.findMany();

    return Response.json({ data: tasks });
}

export const POST = async (request: Request) => {

    const data = await request.json();
    const task = await prisma.task.create({
        data: {
            content: data.content
        }
    });

    return Response.json({ data: task });
}
