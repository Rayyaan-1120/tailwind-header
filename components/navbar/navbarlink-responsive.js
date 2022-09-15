import Link from "next/link";
import React, { useState } from "react";

const moreitems = [
  {
    link: "/manifesto",
    text: "Manifesto",
  },
  {
    link: "/careers",
    text: "Careers",
  },
  {
    link: "/license",
    text: "License",
  },
];

export default function NavbarlinkResponsive({ link, text, Icon }) {
  const [open, setopen] = useState(false);

  return (
    <>
      <li className=" border-b border-black border-opacity-10">
        {text == "more" ? (
          <a
            className="py-3 w-full items-center relative flex text-black justify-between"
            onClick={() => setopen(!open)}
          >
            <span> {text} </span>
          </a>
        ) : (
          <Link href={link}>
            <a className="py-3 w-full items-center relative flex text-black justify-between">
              <span> {text} </span>
              <span>
                {" "}
                {Icon && (
                  <Icon
                    size={25}
                    color="#000"
                    className="justify-end items-center"
                  />
                )}
              </span>
            </a>
          </Link>
        )}
      </li>
      {text == "more" && (
        <div
          className={` ${
            open
              ? "h-[160px] opacity-100 scale-100"
              : "h-[0px] scale-95 opacity-0 overflow-hidden"
          }  transition-all 0.5s ease-in-out`}
        >
          {moreitems.map(({ text, link }, i) => {
            return (
              <li className=" border-b border-black border-opacity-10 ">
                <Link href={link}>
                  <a className="py-3 w-full items-center relative flex text-black ">
                    <span> {text} </span>
                  </a>
                </Link>
              </li>
            );
          })}
        </div>
      )}
    </>
  );
}
