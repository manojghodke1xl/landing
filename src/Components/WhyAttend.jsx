import React from "react";
import Group from "/Images/group.png";

const WhyAttend = () => {
  return (
    <div className="w-[90%] flex flex-col items-start mb-3 sm:mb-10 mx-[25px] mt-0">
      <div className="w-full flex flex-col justify-center items-center gap-y-2">
        <h2 className="w-full text-justify text-[18px] sm:text-[23px] md:text-[30px] font-bold">
          Two Young Visionaries:{" "}
          <span className="text-custom-amber">A 50-Day Mission to Success</span>
        </h2>
      </div>
      <div className="w-full bg-secondary mt-4 sm:mt-8 py-[15px] sm:py-[25px] px-[20px] sm:px-[30px] rounded-xl shadow-xl">
        <div className="w-full text-justify text-[15px] sm:text-[18px] text-white">
          <p className="mb-2">
            Discover how two kids, just 13 and 10 years old, completed a
            life-changing 50-day mission, proving that age is no barrier to
            achieving big dreams. Get inspired by their journey of
            determination, courage, and purpose!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyAttend;
