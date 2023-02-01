import DarkModeButton from "./components/DarkModeButton";
import Image from "next/image";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="max-w-3xl px-4 mx-auto sm:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
