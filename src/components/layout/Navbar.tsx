import NavlistItem from "@/components/utils/NavlistItem";
import React from "react";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="flex items-center bg-white">
      <section className="flex-auto">
        <div className="p-3">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-xl">Nimone</h2>
        </div>
      </section>
      <section className="flex-auto">
        <nav>
          <ul className="flex justify-end">
            <NavlistItem href="/">home</NavlistItem>
            <NavlistItem href="/login">ดูรายชื่อ</NavlistItem>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
