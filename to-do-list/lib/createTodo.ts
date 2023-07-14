"use server";
import { prisma } from "@/app/db";
import { redirect } from "next/navigation";

export async function createTodo(data: FormData) {
  const title = data.get("title");

  if (!title || typeof title !== "string" || title.toString() === "") return;
  await prisma.todo.create({
    data: { title: title.toString(), complete: false },
  });
  redirect("/");
}
