import React from "react";

function HeroSection2() {
  return (
    <div className="mt-4 flex min-h-[70vh] flex-row rounded-3xl bg-gray-1000">
      <div className="w-2/3">
        <div className=" p-8  text-[#F9D8DD]">
          <h1 className="text-center font-futur text-[13rem] font-extrabold uppercase leading-[0.8]">
            creative <br /> Agency
          </h1>
          <div className="w-auto- mt-20 text-left text-2xl">
            <p className="">
              Ons team van creators en strategen helpt merken met bereiken van
              Gen Z.
            </p>
            <p className="mb-10">
              GLAMDIGI maakt TikTok-content waar je doelgroep van achterover
              slaat.
            </p>
          </div>
          {/* create a contact button with a white outline rounded */}
          <button
            type="button"
            className="mb-2 mt-4 w-2/5 rounded-full border-4 border-gray-300 px-5 py-2.5  text-lg font-extrabold "
          >
            Contact
          </button>
        </div>
      </div>
      <div className="w-1/3  overflow-hidden">
        <div className="mx-16 mb-4 h-[380px] w-[200px] rounded-3xl bg-gray-400 "></div>
        <div className="mx-4 h-[380px] w-[200px] rounded-3xl bg-gray-600 p-4"></div>
      </div>
    </div>
  );
}

export default HeroSection2;
