/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="font-inter text-6xl font-black uppercase text-zinc-100">
          Diensten
          <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-tia-maria-500"></hr>
        </h1>
        <p className="font-inter w-2/3 text-2xl">
          Als full service TikTok agency helpen wij merken van A tot Z. Of je nu
          op zoek bent naar een creatieve strategie of advertising, wij hebben
          het in house.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
