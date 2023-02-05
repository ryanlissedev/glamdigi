import React from "react";

const AboutSection = () => {
  return (
    <div className="flex">
      {" "}
      <section
        id="aboutus"
        className="relative mr-6 flex w-max flex-col  overflow-hidden rounded-3xl bg-gray-1000 p-4 text-[#F9D8DD] dark:bg-[#073763] dark:text-zinc-100"
      >
        <div className="mx-auto flex items-center justify-center">
          <div className="relative mx-auto px-4 sm:static sm:px-6 lg:px-8">
            <div className="">
              <h1 className="font-inter my-10 items-center justify-center text-7xl font-black uppercase leading-[0.8] tracking-tight text-[#F9D8DD] dark:text-zinc-200">
                Over ons
              </h1>
              <p className="mt-6 w-9/12 text-xl text-zinc-200">
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
              className="my-16 mb-2 w-2/5 rounded-full border-4 border-gray-300 px-5 py-2.5  text-xl font-extrabold dark:text-zinc-100 "
            >
              Meer info
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="md:w-420px md:h-700px relative w-max overflow-hidden rounded-2xl">
          <img className="w-full" src="/IMAGE4.png" alt="office content 3" />
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
