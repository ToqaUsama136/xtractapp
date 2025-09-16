import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  link: string;
};
export default function NavLi({ href, link }: Props) {
  return (
    <>
      <li>
        <Link href={href}>{link}</Link>
      </li>
    </>
  );
}
