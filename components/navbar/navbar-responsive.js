import React from "react";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import NavbarlinkResponsive from "./navbarlink-responsive";

const links = [
  {
    link: "#",
    text: "gallery",
  },
  {
    link: "#",
    text: "lore",
  },
  {
    link: "#",
    text: "roadmap",
  },
  {
    link: "#",
    text: "shop",
  },
  {
    link: "#",
    text: "more",
  },
  {
    link: "#",
    text: "Twitter",
    Icon: AiOutlineTwitter,
  },
  {
    link: "#",
    text: "Instagram",
    Icon: AiFillInstagram,
  },
  {
    link: "#",
    text: "Discord",
    Icon: FaDiscord,
  },
];

export default function Navbarresponsive({ open }) {
  return (
    <div className="lg:hidden">
      <div
        className={`w-screen items-start h-screen flex flex-col fixed px-6 pt-20 bg-white bg-opacity-70 backdrop-blur-lg z-40 pointer ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-all duration-200 overflow-scroll`}
      >
        <ul className="text-xl w-full uppercase font-900">
          {links.map((link, ind) => {
            return (
              <NavbarlinkResponsive
                key={ind}
                link={link.link}
                text={link.text}
                Icon={link.Icon}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
