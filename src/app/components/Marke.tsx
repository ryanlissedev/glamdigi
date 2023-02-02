"use client";
import Marquee from "react-fast-marquee";

const Marke = () => {
  return (
    <div>
      <Marquee pauseOnHover={true} gradient={false} className="font-inter ">
        <p className="font-bsmnt"> Ryan Lisse</p>
      </Marquee>
    </div>
  );
};

export default Marke;
