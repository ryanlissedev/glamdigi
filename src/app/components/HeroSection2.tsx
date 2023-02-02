"use client";
import { cursor, useTypewriter } from "react-simple-typewriter";

import Image from "next/image";
import BackgroundCircles from "./BackgrandCircles";
import { Link } from "react-scroll";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";

type Props = {};

function HeroSection2({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Technology Consultant",
      " Full Stack Creative",
      " Product Designer",
      " UI/UX Designer",
      " Frontend Developer",
      " Backend Developer",
      " Blockchain Developer",
      " Web3 Developer",
      " Solidity Developer",
      " Smart Contract Developer",
      " NFT Developer",
      " Crypto Developer",
    ],
    loop: true,
    delaySpeed: 2500,
  });
  return (
    <section id="home">
      <div className="flex flex-col items-center justify-center h-screen align-top md:flex-row md:space-x-10 md:space-y-0 md:p-4 md:text-left">
        <div className="items-center justify-center px-8">
          <BackgroundCircles />
          <Image
            src="/hero-3.png"
            alt=""
            width={250}
            height={250}
            className="items-center justify-center rounded-full shadow-2xl"
          />
          <div className="flex flex-row items-center justify-center mt-4 space-x-2 ">
            <a
              href="https://github.com/ryanlisse"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineGithub
                className="transition-transform cursor-pointer text-neutral-500 hover:-translate-y-1 dark:text-neutral-100"
                size={30}
              />
            </a>
            <a
              href="https://twitter.com/ryanlisse"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineTwitter
                className="transition-transform cursor-pointer text-neutral-500 hover:-translate-y-1 dark:text-neutral-100"
                size={30}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/ryanlisse/"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineLinkedin
                className="transition-transform cursor-pointer text-neutral-500 hover:-translate-y-1 dark:text-neutral-100"
                size={30}
              />
            </a>
            <a
              href="https://www.youtube.com/channel/ryanlisse"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineYoutube
                className="transition-transform cursor-pointer text-neutral-500 hover:-translate-y-1 dark:text-neutral-100"
                size={30}
              />
            </a>
          </div>
        </div>
        <div className="items-center justify-center text-center md:mt-20 md:w-1/2 md:text-left">
          <h1 className="mt-6 text-4xl uppercase font-bsmnt md:mt-0 md:text-6xl">
            Design with purpose
          </h1>
          <p className="mt-4 mb-8 text-lg md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold leading-relaxed text-tia-maria-600">
              {text}{" "}
            </span>
            <p>
              {" "}
              transforming Ideas into Stunning & User-Friendly Web3 Experiences.
            </p>
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
    </section>
  );
}

export default HeroSection2;
