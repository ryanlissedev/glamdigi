"use client";

import Marquee from "react-fast-marquee";

const LogoMarquee = () => {
  return (
    <div>
      <Marquee
        pauseOnHover={true}
        gradient={false}
        className="mt-4 rounded-3xl bg-zinc-100 "
      >
        <p className="gap-4 font-bsmnt">Logo 1</p>
        <p className="p-8 font-bsmnt">Logo 2</p>
        <p className="p-8 font-bsmnt">Logo 3</p>
        <p className="p-8 font-bsmnt">Logo 4</p>
        <p className="p-8 font-bsmnt">Logo 5</p>
        <p className="p-8 font-bsmnt">Logo 6</p>
        <p className="p-8 font-bsmnt">Logo 7</p>
        <p className="p-8 font-bsmnt">Logo 8</p>
        <p className="p-8 font-bsmnt">Logo 9</p>
        <p className="p-8 font-bsmnt">Logo 10</p>
        <p className="p-8 font-bsmnt">Logo 11</p>
        <p className="p-8 font-bsmnt">Logo 12</p>
      </Marquee>
    </div>
  );
};

export default LogoMarquee;
