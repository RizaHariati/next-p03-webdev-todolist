"use server";
import { prisma } from "@/app/db";

export async function deleteTodo(id: string) {
  await prisma.todo.delete({
    where: {
      id,
    },
  });

  return;
}
