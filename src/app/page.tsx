import AboutSection from "./components/AboutSection";
import DarkModeButton from "./components/DarkModeButton";
import Footer from "./components/Footer";
import Hero2 from "./components/Hero2";
import HeroSection from "./components/HeroSection";
import HeroSection2 from "./components/HeroSection2";
import Image from "next/image";
import LogoMarquee from "./components/LogoMarquee";
import ProjectSection from "./components/ProjectSection";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <main className="container z-0 mx-auto  h-screen items-center justify-center">
      <HeroSection2 />

      <LogoMarquee />

      <ServicesSection />

      <AboutSection />
      <Footer />
    </main>
  );
}
