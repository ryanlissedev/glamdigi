"use client"; // this is a client component

import { IoMdClose, IoMdMenu } from "react-icons/io";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

import { Link } from "react-scroll/modules";
import React from "react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "next-themes";

interface NavItem {
  label: string;
  page: string;
}
const NAV_ITEMS: Array<NavItem> = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Projects", page: "projects" },
  { label: "Contact", page: "contact" },
];
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const pathname = usePathname();
  return (
    <header className="fixed top-0 z-50 w-full px-4 mx-auto shadow bg-zinc-100 dark:border-b dark:border-zinc-600 dark:bg-gray-1100 sm:px-10">
      <div className="justify-between md:flex md:items-center">
        <div>
          {/* This is the Logo block */}
          <div className="flex items-center justify-between py-3 ">
            <div className="md:block md:py-5">
              <h2 className="text-lg uppercase font-bsmnt">Ryan Lisse</h2>
            </div>
            <div className="md:hidden">
              <button onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <IoMdClose className="text-2xl" />
                ) : (
                  <IoMdMenu className="text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            {/* This is the Nav block */}
            <div className="items-center justify-center md:flex md:space-x-6">
              {/* Nav Items map thru the nav items*/}
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="block space-y-0 cursor-pointer text-zinc-800 hover:bg-zinc-200 dark:text-slate-50 dark:hover:bg-zinc-700 md:space-y-6 lg:inline-block"
                  >
                    {item.label}
                  </Link>
                );
              })}
              {/* Dark Mode Button */}
              {currentTheme === "dark" ? (
                <button onClick={() => setTheme("light")}>
                  <RiSunLine className=" rounded-xl bg-zinc-800" />
                </button>
              ) : (
                <button onClick={() => setTheme("dark")}>
                  <RiMoonFill className=" rounded-xl hover:bg-zinc-200" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
