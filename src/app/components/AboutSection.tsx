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

      <section className="relative mr-12 flex max-w-4xl overflow-hidden rounded-3xl bg-gray-1000 text-[#F9D8DD] dark:bg-[#e476b2] dark:text-gray-900">
        <div className="lg:pt-30 pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pb-48">
          <div className="relative mx-auto px-4 sm:static sm:px-6 lg:px-8">
            <div className="">
              <h1 className="font-inter my-8 text-7xl font-black uppercase leading-[0.8] tracking-tight text-[#F9D8DD] dark:text-gray-900">
                Over ons
              </h1>
              <p className="mt-4 text-xl text-zinc-200">
                GLAMDIGI is de Creative marketing agency die de nieuwe generatie
                begrijpt en bereikt. Op ons kantoor aan het Vondelpark in
                Amsterdam werken 45 creatieven en (online) marketing
                specialisten voor toffe merken als Mysteryland, GOGO en
                Instabox. We creëren (én adverteren) TikTok-first content die
                jou helpt Gen Z te bereiken.
              </p>
            </div>
            <button
              type="button"
              className="my-16 mb-2 w-2/5 rounded-full border-4 border-gray-300 px-5 py-2.5  text-lg font-extrabold dark:text-zinc-100 "
            >
              Contact
            </button>
          </div>
        </div>
      </section>
      <div className="md:w-420px md:h-700px relative w-2/5 overflow-hidden rounded-2xl">
        <img className="w-full" src="/IMAGE3.png" alt="office content 3" />
        <div className="absolute bottom-0 left-0 p-4 text-5xl font-medium text-zinc-100">
          Advertising
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
