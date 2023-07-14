import { getTodo } from "@/lib/getTodo";
import Header from "./components/Header";
import { TodoType } from "@/type";
import { prisma } from "./db";
import Todos from "./components/Todos";

export default async function Home() {
  const todos = await getTodo();
  const toggleTodo = (id: string, checked: boolean) => {
    return;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-10 px-24">
      <Header />
      <Todos todos={todos} toggleTodo={toggleTodo} />
    </main>
  );
}
