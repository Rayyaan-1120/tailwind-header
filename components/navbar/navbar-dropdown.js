/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import Link from "next/link";

export default function Navbardropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="text-black bg-black opacity-80 hover:bg-opacity-10 bg-opacity-[.03] relative h-7 items-center font-mono tracking-wider pt-0.5 first::pt-0  uppercase text-xs font-500 padding-huge duration-200 px-4 rounded flex justify-center flex-row">
          MORE
          <BiChevronDown className="-mr-1 ml-2" size={12} />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-32 origin-top-left rounded-md bg-[#F3F0F0] shadow-md focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <Link href={"/manifesto"}>
                <a
                  className={
                    "text-black bg-black opacity-80 hover:bg-opacity-10 bg-opacity-[.03] relative h-7  font-mono tracking-wider pt-0.5 first::pt-0  uppercase text-xs font-500 padding-huge duration-200 px-4 rounded flex  flex-row"
                  }
                >
                  Manifesto
                </a>
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link href="/careers">
                <a
                  className={
                    "text-black bg-black opacity-80 hover:bg-opacity-10 bg-opacity-[.03] relative h-7  font-mono tracking-wider pt-0.5 first::pt-0  uppercase text-xs font-500 padding-huge duration-200 px-4 rounded flex  flex-row"
                  }
                >
                  Careers
                </a>
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link href="/license">
                <a
                  className={
                    "text-black bg-black opacity-80 hover:bg-opacity-10 bg-opacity-[.03] relative h-7  font-mono tracking-wider pt-0.5 first::pt-0  uppercase text-xs font-500 padding-huge duration-200 px-4 rounded flex  flex-row"
                  }
                >
                  License
                </a>
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
