"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "Figma" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "GraphQL" },
  { skill: "Prisma" },
  { skill: "Solidity" },
  { skill: "Web3" },
  { skill: "Polygon" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="pb-12 my-12 md:pt-16 md:pb-48">
        <h1 className="text-4xl font-bold text-center">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col items-stretch justify-center space-y-10 align-top md:flex-row md:space-x-10 md:space-y-0 md:p-4 md:text-left">
          <div className="md:w-1/2">
            <h1 className="mb-6 text-2xl font-bold text-center md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Ryan and I am a{" "}
              <span className="font-bold">{"highly skilled"}</span>,{" "}
              <span className="font-bold">{"passionate"}</span>, and{" "}
              <span className="font-bold">{"driven"}</span> Technology Advisor
              and Product Developer based in Almere, the Netherlands.
            </p>
            <br />
            <p>
              My passion for music, creativity, and technology has been a
              driving force in my career for the past 25 years, during which I
              have been in the music and entertainment industry.💻
            </p>
            <br />
            <p>
              I believe that technology should{" "}
              <span className="font-bold">{"empower"}</span>, not hinder. That's
              why I offer my clients a unique blend of technical expertise and
              strategic thinking, to help them harness the full potential of
              technology and deliver game-changing products and experiences.🎯
            </p>
            <br />
            <p>
              I am also a proud father of two kids and a dog 🐶, and am
              passionate about the web3 space. I believe that the web3 ecosystem
              has the potential to create a future where creators have all the
              tools they need to build, grow and monetize their communities.
            </p>
            <br />
            <p>
              If you're looking for a creative, highly skilled, and motivated
              professional with a strong work ethic and a passion for
              technology, look no further! 🔥
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <Image
              src="/portrait-1.png"
              alt=""
              width={325}
              height={325}
              className="hidden object-cover aspect-square rotate-3 rounded-2xl md:relative md:bottom-4 md:left-32 md:z-0 md:block "
            />
            <h1 className="mb-6 text-2xl font-bold">My Skills</h1>
            <Marquee
              pauseOnHover={true}
              gradient={false}
              className="font-inter "
            >
              <div className="z-10 flex flex-row flex-wrap justify-center md:justify-start">
                {skills.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="px-4 py-2 mt-2 mr-2 font-semibold text-gray-500 bg-gray-200 rounded"
                    >
                      {item.skill}
                    </p>
                  );
                })}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
