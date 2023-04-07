import React from "react";
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
  return (
    <div className={kanit.className}>
      <div className="flex flex-col min-h-[100vh] bg-gray-200">
        <section className="flex-[0_1_auto]">
          <Navbar />
        </section>

        <section className="flex-[1_1_auto]">{children}</section>

        <section className="flex-[0_1_auto]">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default Layout;
