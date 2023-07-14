import { TodoType } from "@/type";
import React from "react";
import TodoItem from "./TodoItem";

type Props = {
  todos: TodoType[];
  toggleTodo: (id: string, checked: boolean) => void;
};

const Todos = ({ todos, toggleTodo }: Props) => {
  return (
    <ul className=" flex flex-col gap-2 w-full">
      {todos.length >= 1 &&
        todos.map((todo: TodoType) => {
          return <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />;
        })}
    </ul>
  );
};

export default Todos;
