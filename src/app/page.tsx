import DarkModeButton from "./components/DarkModeButton";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Marke from "./components/Marke";

export default function Home() {
  return (
    <section className="min-h-screen p-8 ">
      <h1 className="animate-[slide-down-fade_1.5s_ease-in-out] justify-items-center text-center  font-bsmnt text-5xl uppercase">
        Home{" "}
      </h1>
  
<Marke />
      <DarkModeButton />
    </section>
  );
}
