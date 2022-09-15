import React, { useState } from "react";
import Navbarlogo from "./navbarlogo";
import Navbarlink from "./navbarlink-desktop";
import Navbarresponsive from "./navbar-responsive";
import { links } from "./navbarlinks";

export default function Navbar() {
  const [classname, setclassname] = useState("");
  const [open, setopen] = useState(false);

  const opennavbar = () => {
    setopen(!open);
  };

  return (
    <>
      <div className="fixed w-full top-0 lg:px-8 px-5 lg:pt-8 pt-5 z-50 ">
        <div className="flex h-full border-b border-white items-center justify-between max-w-11xl mx-auto border-opacity-0">
          <Navbarlogo />
          <div className="items-center  hidden lg:flex min-w-0">
            <ul className="flex space-x-2 min-w-0">
              {links.map((link) => {
                return (
                  <Navbarlink
                    link={link.link}
                    text={link.text}
                    Icon={link.Icon}
                  />
                );
              })}
            </ul>
          </div>

          {/* Hamburger Menu  */}

          <div className="lg:hidden z-50">
            <div className={`menu-btn ${open && "open"}`} onClick={opennavbar}>
              <div className="menu-btn__burger"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Navbar */}

      <Navbarresponsive open={open} />
    </>
  );
}
