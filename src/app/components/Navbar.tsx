"use client"; // this is a client component

import { IoMdClose, IoMdMenu } from "react-icons/io";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

import { Link } from "react-scroll/modules";
import React from "react";
import { motion } from "framer-motion";
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
    <header className=" sticky top-0 z-50 mx-auto w-full  bg-gray-1100  px-4 shadow backdrop-blur-lg backdrop-filter dark:border-b dark:border-zinc-600 dark:bg-opacity-25 dark:backdrop-blur-lg dark:backdrop-filter sm:px-10">
      <div className="flex items-center justify-center">
        <div>
          {/* This is the Logo block */}
          <div className="flex items-center py-2 ">
            <div className="md:block md:py-3">
              <h2 className="text-center font-bsmnt text-3xl uppercase text-[#F9D8DD]">
                Glamdigi
              </h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
