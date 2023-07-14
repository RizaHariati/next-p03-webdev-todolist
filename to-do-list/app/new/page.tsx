"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createTodo } from "@/lib/createTodo";

type Props = {};

const page = (props: Props) => {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  return (
    <div className=" h-full min-h-screen w-full p-10 flex flex-col items-centers justify-start gap-5 ">
      <form
        action={createTodo}
        className="todo-form"
        // onSubmit={(e) => handleSubmit(e)}
      >
        <input
          className="todo-input"
          name="title"
          value={keyword}
          onChange={(e) => handleChange(e)}
        />

        <div className="flex items-center gap-5">
          <button
            type="button"
            className="header-btn"
            onClick={() => {
              setKeyword("");
              router.push("/");
            }}
          >
            cancel
          </button>
          <button type="submit" className="header-btn">
            add
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
