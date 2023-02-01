import DarkModeButton from "./components/DarkModeButton";
import Image from "next/image";
import Marke from "./components/Marke";
import Marquee from "react-fast-marquee";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="max-w-3xl px-4 mx-auto sm:px-6 md:max-w-5xl">
      <HeroSection />
    </main>
  );
}
