import AboutSection from "./components/AboutSection";
import { Calendly } from "./components/Calendly";
import Footer from "./components/Footer";
import HeroSection2 from "./components/HeroSection2";
import LogoMarquee from "./components/LogoMarquee";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <main className="container z-0 mx-auto  h-screen items-center justify-center">
      <HeroSection2 />
      <LogoMarquee />
      <ServicesSection />
      <AboutSection />
      <Calendly />
      <Footer />
    </main>
  );
}
