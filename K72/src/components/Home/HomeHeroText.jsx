import React from "react";
import CircularVideo from "./CircularVideo";

const HomeHeroText = () => {
  return (
    <div className="font-[font1]  mt-72 lg:mt-0 pt-5 text-center text-white">
      <div className="lg:text-[8vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]">
        The spark
      </div>
      <div className="lg:text-[8vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]">
        Who
        <div className="h-[7vw] w-[16vw] rounded-full -mt-3 overflow-hidden ">
          <CircularVideo />
        </div>
      </div>
      <div className="lg:text-[8vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]">
        Generates
      </div>
      <div className="lg:text-[8vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]">
        their
      </div>
      <div className="lg:text-[8vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]">
        creativity
      </div>
    </div>
  );
};

export default HomeHeroText;
