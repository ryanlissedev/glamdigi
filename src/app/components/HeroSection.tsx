"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import Marke from "./Marke";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col items-center justify-center py-16 my-10 text-center animate-fadeIn animation-delay-2 md:py-22 sm:py-16 md:flex-row md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/hero-3.png"
            alt=""
            width={250}
            height={250}
            className="items-center justify-center rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-2/3">
          <h1 className="mt-6 text-4xl font-bold md:mt-0 md:text-7xl">
            Design with purpose
          </h1>
          <p className="mt-4 mb-16 text-lg md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold leading-relaxed text-tia-maria-600">
              Full Stack Creative{" "}
            </span>
            transforming Ideas into Stunning & User-Friendly Web3 Experiences.
          </p>
          <Link
            className="font-semi-bold group relative  mr-2 mb-24 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gray-1000 bg-gradient-to-br from-pink-500 to-orange-400 p-0.5 text-xl text-gray-900 hover:text-zinc-800 focus:outline-none focus:ring-4 focus:ring-pink-200 group-hover:from-pink-500 group-hover:to-orange-400 dark:text-zinc-200 dark:focus:ring-pink-800"
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <span className="relative  rounded-md bg-gray-900  px-5 py-2.5 text-zinc-200 transition-all duration-75 ease-in group-hover:bg-opacity-0">
              Projects
            </span>
          </Link>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center text-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
