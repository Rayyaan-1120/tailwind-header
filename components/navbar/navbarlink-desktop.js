import Link from "next/link";
import React from "react";
import Navbardropdown from "./navbar-dropdown";

export default function Navbarlink({ link, Icon, text }) {
  console.log(text, "text");

  return (
    <>
      {text == "more" ? (
        <Navbardropdown />
      ) : (
        <li>
          <Link href={link}>
            <a className="text-black bg-black opacity-80 hover:bg-opacity-10 bg-opacity-[.03] relative h-7 items-center font-mono tracking-wider pt-0.5 first::pt-0  uppercase text-xs font-500 padding-huge duration-200 px-4 rounded flex justify-center flex-row">
              {Icon ? (
                <Icon size={22} color={"#000000"} className={"padding-huge"} />
              ) : (
                text
              )}
            </a>
          </Link>
        </li>
      )}
    </>
  );
}
