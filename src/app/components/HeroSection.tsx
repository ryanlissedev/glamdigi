"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col items-center justify-center text-center ">
        <div>
          <Image
            className="rounded-full"
            src="/hero-1.png"
            alt="headshot"
            width={50}
            height={50}
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Ryan Lisse</h1>
          <h2 className="text-2xl font-bold">Full Stack Developer</h2>

          <p className="text-lg">
            I am a Full Stack Developer with a passion for creating beautiful
            and functional websites. I have a background in graphic design and
            marketing, which has given me a unique perspective on how to create
            websites that are both visually appealing and easy to use. I am
            currently looking for a position as a Front End Developer.
          </p>
          <Link
            href="https://github.com/"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            className="px-6 py-3 text-lg font-bold rounded-lg shadow bg-gray-1000 hover:bg-gray-800"
          >
            Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
