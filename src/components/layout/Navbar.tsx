import NavlistItem from "@/utils/NavlistItem";
import React from "react";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="flex">
      <section className="">
        <div className="p-3">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-xl">Nimone</h2>
        </div>
      </section>
      <section>
        <nav>
          <ul className="flex">
            <NavlistItem href="/login">test</NavlistItem>
            <NavlistItem href="/login">ดูรายชื่อ</NavlistItem>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
