import React from "react";
import { motion } from "framer-motion";

export default function BackgroundCircles() {
  return (
    <motion.div
      className="relative flex items-center justify-center -z-10 opacity-70"
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.3, 0.4, 0.8, 1],
        borderRadius: ["20%", "40%", "60%", "80%", "100%"],
      }}
      transition={{
        duration: 10,
        ease: "easeInOut",
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
        loop: Infinity,
        repeatDelay: 1,
      }}
    >
      <div className="absolute mt-52 h-[200px] w-[200px] animate-pulse rounded-full border border-gray-700 opacity-40 delay-300" />

      <div className="delay-900 absolute mt-52 h-[300px] w-[300px] animate-slide-down-fade rounded-full border border-gray-700 opacity-20" />
      <div className="absolute mt-52 h-[500px] w-[500px] animate-pulse rounded-full border border-gray-700 opacity-20 delay-500" />
      <div className="absolute mt-52 h-[650px] w-[650px] animate-pulse rounded-full border border-tia-maria-500 opacity-20 delay-1000" />
      <div className="absolute mt-52 h-[800px] w-[800px] animate-pulse rounded-full border border-gray-800 opacity-20 delay-1000" />
    </motion.div>
  );
}
