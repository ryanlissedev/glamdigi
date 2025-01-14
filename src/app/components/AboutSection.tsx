import React from "react";

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <section
        id="aboutus"
        className="mb-6 flex overflow-hidden rounded-3xl bg-gray-1000 p-4 font-semibold text-[#F9D8DD] dark:bg-[#d8b699] dark:text-zinc-100 md:mr-6 md:flex-col"
      >
        <div className="mx-auto flex items-center justify-center">
          <div className="relative mx-auto px-4 sm:static sm:px-6 lg:px-8">
            <div className="">
              <h1 className="font-inter my-10 items-center justify-center text-7xl font-black uppercase leading-[0.8] tracking-tight text-[#F9D8DD] dark:text-zinc-200">
                Over ons
              </h1>
              <p className="mt-6 w-9/12 text-xl text-zinc-200">
                GLAMDIGI is de Creative marketing agency die de nieuwe generatie
                begrijpt en bereikt. <br /> Herkenbaar? Het runnen van een is
                zwaar werk, klanten behandelen, telefoontjes tussendoor,
                administratie bijhouden en ook nog producten inkopen. Hoe graag
                je het ook zou willen, zelf de marketing doen gaat gewoon niet.
                Hier wil je vanaf
              </p>
            </div>
            <button
              type="button"
              className="my-16 mb-2 w-[170px] rounded-full border-4 border-gray-300 px-5 py-2.5  text-xl font-extrabold dark:text-zinc-100 "
            >
              Meer info
            </button>
          </div>
        </div>
      </section>
      <section className="mb-6  w-full">
        <div className="md:w-420px md:h-500px relative  overflow-hidden rounded-2xl">
          <img
            className="h-[500px] w-full object-cover "
            src="/IMAGE4.png"
            alt="office content 3"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
