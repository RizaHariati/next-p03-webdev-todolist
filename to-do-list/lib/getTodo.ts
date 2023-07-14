import { prisma } from "@/app/db";
import { TodoType } from "@/type";

export async function getTodo(): Promise<TodoType[]> {
  const todos = await prisma.todo.findMany();
  if (!todos) {
    return [];
  }

  return todos;
}
