import React from "react";
import Group from "/Images/group.png";

const WhyAttend = () => {
  return (
    <div className="w-full flex flex-col items-start mb-3 sm:mb-10 sm:mb-10 mx-[25px] mt-4 bg-custom-primary">
      <div className="w-full flex flex-col justify-center items-center gap-y-2 bg-custom-primary">
        <h2 className="font-helvetica w-[95%] text-left text-white text-xl sm:text-2xl md:text-3xl font-bold bg-custom-primary">
          Two Young Visionaries:A 50-Day Mission to Success
        </h2>
      </div>
      <div className="w-full mt-2 -sm:mt-8 py-[15px] sm:py-[25px] px-[20px] sm:px-[30px] bg-custom-primary">
        <div className="font-opensauce w-full text-left text-md xl:text-xl text-white bg-custom-primary">
          <p className="-mb-12 bg-custom-primary text-white">
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
