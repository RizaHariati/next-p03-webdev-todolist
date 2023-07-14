"use client";
import { deleteTodo } from "@/lib/deleteTodo";
import { TodoType } from "@/type";
import { Router, useRouter } from "next/router";
import React, { useState } from "react";

type Props = {
  todo: TodoType;
  toggleTodo: (id: string, checked: boolean) => void;
};

const TodoItem = ({ todo, toggleTodo }: Props) => {
  const { id, title, complete } = todo;
  const [completing, setcompleting] = useState<boolean>(complete);

  return (
    <li key={id + title} className=" flex items-center jsustify-between">
      <div>
        <input
          id={id}
          type="checkbox"
          className="w-8 h-8 rounded-md  cursor-pointer peer checked:accent-zinc-700 "
          onChange={(e) => {
            toggleTodo(id, e.target.checked);
          }}
        />
        <label htmlFor={id} className="label-class">
          {title}
        </label>
      </div>
      <button
        className="header-btn "
        onClick={async () => {
          await deleteTodo(id);
        }}
      >
        delete
      </button>
    </li>
  );
};

export default TodoItem;
