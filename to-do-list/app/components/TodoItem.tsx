"use client";

import { deleteTodo } from "@/lib/deleteTodo";
import { TodoType } from "@/type";
import React, { useState } from "react";

type Props = {
  todo: TodoType;
  toggleTodo: (id: string, checked: boolean) => void;
};

const TodoItem = ({ todo, toggleTodo }: Props) => {
  const { id, title, complete } = todo;

  return (
    <li
      key={id + title}
      className=" flex items-center justify-between w-full bg-purple-600 max-w-2xl"
    >
      <div>
        <input
          id={id}
          type="checkbox"
          defaultChecked={complete}
          className="w-8 h-8 rounded-md  cursor-pointer peer checked:accent-zinc-700 "
          onChange={(e) => {
            toggleTodo(id, e.target.checked);
            return;
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
