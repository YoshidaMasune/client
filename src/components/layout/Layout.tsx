import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children: any;
};

function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-[100vh] bg-gray-200">
      <section className="flex-[0_1_auto]">
        <Navbar />
      </section>

      <section className="flex-[1_1_auto]">{children}</section>

      <section className="flex-[0_1_auto]"><Footer /></section>
    </div>
  );
}

export default Layout;
