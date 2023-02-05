import AboutSection from "./components/AboutSection";
import DarkModeButton from "./components/DarkModeButton";
import Footer from "./components/Footer";
import Hero2 from "./components/Hero2";
import HeroSection from "./components/HeroSection";
import HeroSection2 from "./components/HeroSection2";
import Image from "next/image";
import LogoMarquee from "./components/LogoMarquee";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="z-0 mx-auto h-screen  snap-y  snap-mandatory px-4 sm:px-6 md:max-w-7xl">
      <section id="hero" className=" ">
        <HeroSection2 />
      </section>
      <LogoMarquee />

      <section id="about" className="flex snap-normal">
        <AboutSection />
      </section>
    </main>
  );
}
