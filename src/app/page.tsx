import AboutSection from "./components/AboutSection";
import DarkModeButton from "./components/DarkModeButton";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HeroSection2 from "./components/HeroSection2";
import Image from "next/image";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="z-0 h-screen max-w-3xl px-4 mx-auto overflow-scroll snap-y snap-mandatory sm:px-6 md:max-w-7xl">
      <section
        id="hero"
        className="flex items-center justify-between snap-center"
      >
        <HeroSection2 />
      </section>
      <section id="about" className="flex snap-center">
        <AboutSection />
      </section>
      <section id="projects" className="flex snap-center">
        <ProjectSection />
      </section>
      <section id="footer" className="flex snap-center">
        <Footer />
      </section>
    </main>
  );
}
