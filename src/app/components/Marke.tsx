"use client"
import Marquee from "react-fast-marquee";


const Marke = () => {
  return (
    <div>
      <Marquee pauseOnHover={true} gradient={false} className="font-inter ">
       <h1 className="text-9xl"> I can be a React component, multiple React components, or just</h1>
      </Marquee>
    </div>
  );
};

export default Marke;
