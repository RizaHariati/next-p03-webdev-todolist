import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className=" w-full flex items-center justify-between h-12 mb-10">
      <Link href="/">
        <h1>Todos</h1>
      </Link>
      <Link href="/new" className="header-btn">
        <h2>New</h2>
      </Link>
    </header>
  );
}
