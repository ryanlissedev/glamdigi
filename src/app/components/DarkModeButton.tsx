"use client";

import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

const DarkModeButton = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex animate-[slide-down-fade_1.8s_ease-in-out] items-center justify-end p-6 ">
      <select
        className="focus:shadow-outline appearance-none rounded-lg border border-gray-300 bg-transparent px-4 leading-normal text-[#F9D8DD] focus:outline-none"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option className="text-[#F9D8DD] " value="system">
          System
        </option>
        <option className="text-[#F9D8DD] " value="dark">
          Dark
        </option>
        <option className="text-[#F9D8DD] " value="light">
          Light
        </option>
      </select>
      <button
        className="ml-5 h-8 w-8 cursor-pointer text-[#F9D8DD] "
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      >
        {currentTheme === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
    </div>
  );
};

export default DarkModeButton;
