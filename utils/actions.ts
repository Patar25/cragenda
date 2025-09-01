// utils/actions.ts
'use server';

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import type { Task } from "@prisma/client";

export type FormState = {
  message: string | null;
  status: number;
};

export async function createTask(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const content = formData.get("content");
  if (typeof content !== "string") {
    return { message: "Invalid content", status: 400 };
  }

  const schema = z.object({ content: z.string().min(5) });
  const parsed = schema.safeParse({ content });
  if (!parsed.success) {
    return {
      message: parsed.error.issues[0]?.message ?? "Validation error",
      status: 400,
    };
  }

  await prisma.task.create({ data: { content: parsed.data.content } });
  revalidatePath("/todo-list");
  return { message: "Success!", status: 200 };
}

export const getAllTasks = async (): Promise<Task[]> => {
  return prisma.task.findMany({
    orderBy: { createdAt: "desc" },
  });
};

export const deleteTask = async (formData: FormData): Promise<void> => {
  const id = formData.get("id");
  if (typeof id !== "string") return;

  await prisma.task.delete({ where: { id } });
  revalidatePath("/todo-list");
};

export const getTask = async (id: string): Promise<Task | null> => {
  return prisma.task.findUnique({ where: { id } });
};

export const editTask = async (formData: FormData): Promise<never> => {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed");

  if (typeof id !== "string" || typeof content !== "string") {
    redirect("/todo-list");
  }

  await prisma.task.update({
    where: { id },
    data: {
      content,
      completed: completed === "on",
    },
  });

  redirect("/todo-list");
};
