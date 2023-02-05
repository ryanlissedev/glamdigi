import Image from "next/image";
import Marquee from "react-fast-marquee";

const AboutSection = () => {
  return (
    <section id="about">
      <div className=" pb-12 md:pt-16 ">
        <h1 className="font-inter text-6xl font-black uppercase text-gray-900 dark:text-zinc-200">
          Diensten
          <hr className="bg-pink mx-auto my-4 h-1 w-6 rounded border-0"></hr>
        </h1>
        <p className="font-inter w-2/3 text-2xl">
          Als full service TikTok agency helpen wij merken van A tot Z. Of je nu
          op zoek bent naar een creatieve strategie of advertising, wij hebben
          het in house.
        </p>
      </div>
      <section className="mx-auto flex flex-col items-center gap-16 py-8 px-4 md:flex-row lg:grid lg:grid-cols-3 lg:py-16 lg:px-6">
        <div className="md:w-420px md:h-700px relative w-full overflow-hidden rounded-2xl">
          <img className="w-full" src="/IMAGE.png" alt="office content 1" />
          <div className="absolute bottom-0 left-0 p-4 text-5xl font-medium text-zinc-100">
            Strategie
          </div>
        </div>
        <div className="md:w-420px md:h-700px relative w-full overflow-hidden rounded-2xl">
          <img className="w-full" src="/IMAGE2.png" alt="office content 2" />
          <div className="absolute bottom-0 left-0 p-4 text-5xl font-medium text-zinc-100">
            Creatie
          </div>
        </div>
        <div className="md:w-420px md:h-700px relative w-full overflow-hidden rounded-2xl">
          <img className="w-full" src="/IMAGE3.png" alt="office content 3" />
          <div className="absolute bottom-0 left-0 p-4 text-5xl font-medium text-zinc-100">
            Advertising
          </div>
        </div>
      </section>
    </section>
  );
};
export default AboutSection;
