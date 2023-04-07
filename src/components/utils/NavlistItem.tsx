import React from "react";
import Link from "next/link";

type Props = {
  children: any;
  href: string;
};

export default function NavlistItem({ children, href }: Props) {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
}