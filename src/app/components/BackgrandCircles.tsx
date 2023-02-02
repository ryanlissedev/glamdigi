import React from "react";
import { motion as m } from "framer-motion";

export default function BackgroundCircles() {
  return (
    <div className="relative flex items-center justify-center -z-10 opacity-40">
      <div className="absolute mt-52 h-[200px] w-[200px] animate-pulse rounded-full border border-gray-700 delay-300" />

      <div className="delay-900 absolute mt-52 h-[300px] w-[300px] animate-slide-down-fade rounded-full border border-gray-700" />
      <div className="absolute mt-52 h-[500px] w-[500px] animate-pulse rounded-full border border-gray-700 delay-500" />
      <div className="absolute mt-52 h-[650px] w-[650px] animate-pulse rounded-full border border-tia-maria-500 opacity-20 delay-1000" />
      <div className="absolute mt-52 h-[800px] w-[800px] animate-pulse rounded-full border border-gray-800 opacity-20 delay-1000" />
    </div>
  );
}
