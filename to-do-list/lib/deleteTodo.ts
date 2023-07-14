"use server";
import { prisma } from "@/app/db";
import { redirect } from "next/navigation";

export async function deleteTodo(id: string) {
  "use server";
  const data = await prisma.todo.delete({
    where: {
      id,
    },
  });
}
