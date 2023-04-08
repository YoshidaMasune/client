import NavlistItem from "@/components/utils/NavlistItem";
import React from "react";

type Props = {
  toggleState: boolean;
  setToggle: (prevent: boolean) => void;
};

function Navbar({ toggleState, setToggle }: Props) {
  const toggleSwitch = () => {
    setToggle(!toggleState);
  };
  return (
    <div className="flex items-center min-h-[7vh] bg-white px-2 relative">
      <section className="flex-auto flex items-center">
        <div className=" absolute z-40">
          <button
            onClick={toggleSwitch}
            className="rounded-3xl px-2 justify-self-end bg-red-300">
            toggle
          </button>
        </div>

        {/* main nav */}
        <nav className="hidden md:block">
          <ul className="flex justify-end gap-3">
            <NavlistItem href="/">home</NavlistItem>
            <NavlistItem href="/monk">ค้นหา</NavlistItem>
            <NavlistItem href="/login">Login</NavlistItem>
          </ul>
        </nav>

        {/* toggle nav */}

        <nav
          className={`absolute bg-white w-[90vw] inset-0 h-screen p-5 transition-transform duration-300 ease-in-out ${
            !toggleState ? "-translate-x-full" : "-translate-x-0"
          }`}>
          <ul className="flex flex-col justify-end gap-3 mt-10">
            <NavlistItem href="/">home</NavlistItem>
            <NavlistItem href="/monk">ค้นหา</NavlistItem>
            <NavlistItem href="/login">Login</NavlistItem>
          </ul>
        </nav>
      </section>
      <section className="flex-auto grid grid-flow-row">
        <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-xl">
          Nimone
        </h2>
      </section>
    </div>
  );
}

export default Navbar;
