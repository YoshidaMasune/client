import React, { useEffect, useState } from "react";
import { Kanit } from "next/font/google";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

const kanit = Kanit({
  weight: "300",
  subsets: ["thai", "latin"],
});

type Props = {
  children: any;
};

function Layout({ children }: Props) {
  const [toggleState, setToggle] = useState(false);

  useEffect(() => {
    if (toggleState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [toggleState]);

  return (
    <div className={kanit.className}>
      <div>
        <div className="flex flex-col min-h-[100vh] bg-gray-200">
          <section className="flex-[0_1_auto]">
            <Navbar toggleState={toggleState} setToggle={setToggle} />
          </section>

          <section
            className={`flex-[1_1_auto] transition-transform duration-300 ease-in-out ${
              toggleState ? "translate-x-[90vw]" : ""
            }`}
          >
            {children}
          </section>

          <section className="flex-[0_1_auto]">
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Layout;
