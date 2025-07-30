import React from "react";

const Change = () => {
  return (
    <section className="-mt-2 sm:mt-14 py-[40px] bg-secondary rounded-xl relative">
      <div className="w-full flex flex-col justify-center items-center gap-y-2 mb-4 relative">
        <h2 className="w-full text-center text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] -mt-4 sm:mt-0 font-bold">
          <b className="text-custom-amber">
            What is Dreams to Reality All About?
          </b>
        </h2>
        <div>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="137"
            height="14"
            viewBox="0 0 137 14"
            fill="none"
          >
            <path
              d="M0.76312 11.4852C24.298 5.0368 84.1832 -3.98656 135.445 11.5072"
              stroke="#FFC621"
              strokeWidth="4"
            ></path>
          </svg> */}
        </div>
      </div>
      <div className="w-full flex flex-col mt-2 sm:mt-10 gap-3 justify-between items-center">
        <div className="w-full justify-center  flex flex-col xl:w-[75%] 2xl:w-[55%]">
          <div className="w-[90%] flex-col justify-center mx-[10px] lg:mx-[25px] -mb-8 sm:mb-10 lg:mb-0">
            <p className="mb-2.5 text-start text-md xl:text-xl font-medium tracking-wider">
              Dreams to Reality is the true story of two young siblings and
              child prodigies who turned bold dreams into nationwide impact -
              completing 120+ events in 50 days, inspiring over 50,000 lives
              across India. Through five powerful 50-day missions, they mastered
              discipline, embraced challenges, and proved that with the right
              mindset, age is never a limitation.
            </p>
            <p className="mb-2.5 text-start text-md xl:text-xl font-medium tracking-wider">
              This book isn’t just their story; it’s a blueprint for anyone
              ready to take action, break barriers, and lead with purpose.
            </p>

            <div className="flex justify-center flex-wrap my-8">
              <img
                src="/Images/BookCopy.webp"
                className="w-full h-auto object-contain"
                alt="Dreams to Reality"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Change;
