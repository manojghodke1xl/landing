import React from 'react'

const Countdown = ({minutes, seconds}) => {
  return (
    <section>
      <div className="w-full flex justify-center items-center pb-3">
        <h2 className="text-[20px] font-semibold">
          Enrollment closes on 24th April 2024
        </h2>
      </div>
      <div className="w-full flex justify-center items-center pb-3">
        <h2 className="text-[24px] font-semibold">
          STARTS ON 28th April 2024 (9:00AM)
        </h2>
      </div>
      <div className="w-full flex justify-center items-center pb-3">
        <h2 className="text-[21px] font-medium">Language - Basic English</h2>
      </div>
      <div className="w-full flex justify-center items-center pb-3 mt-4">
        <h2 className="text-[28px] font-bold">Register In Next 15:00 Mins</h2>
      </div>
      <div className="w-full flex justify-center items-center pb-3 my-2 gap-7">
        <div className="bg-gray rounded-lg p-[21px]">
          <h2 className="text-center font-extrabold text-2xl">
            {minutes.toString().padStart(2, "0")}
          </h2>
          <div className="tracking-wide">MINUTES</div>
        </div>
        <div className="bg-gray rounded-lg p-[21px]">
          <h2 className="text-center font-extrabold text-2xl">
            {seconds.toString().padStart(2, "0")}
          </h2>
          <div className="tracking-wide">SECONDS</div>
        </div>
      </div>
      <h2 className="flex justify-center items-center ">
        {" "}
        To Unlock Bonuses Worth <b className="text-custom-amber">₹6,487</b>
      </h2>
    </section>
  );
}

export default Countdown
