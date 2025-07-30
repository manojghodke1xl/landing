import React from "react";

function GrowthCard({ year, description }) {
  return (
    <div className="bg-dark-gray rounded-xl border border-white w-[97%] lg:w-[48%] 2xl:w-[23%] py-6 flex p-3 flex-col">
      <div className="w-full">
        <h2 className="font-semibold text-[16px] text-center"></h2>
      </div>
      <div className="w-full p-2 bg-custom-amber text-black my-3 rounded-xl">
        <p className="font-semibold text-lg text-black text-center">
          <b className="text-black">{year}</b>
        </p>
      </div>
      <div className="font-medium text-justify">
        <p className="mb-2 mt-3 text-white">{description}</p>
      </div>
    </div>
  );
}

function GrowthInMotion() {
  const milestones = [
    {
      year: "2019",
      description:
        "Launched JJFuntime, a YouTube channel at ages 7 and 4, igniting curiosity through fun, science-led experiments for children around the world.",
    },
    {
      year: "2020",
      description:
        "Learned a full religious book in just 50 days, in Prakrit, to challenge our minds and connect with our roots, showing that age doesn’t define discipline.",
    },
    {
      year: "2021",
      description:
        "Attended 50 networking events in 50 days. We listened, learned, and asked questions, gaining clarity and confidence from some of India’s most inspiring voices.",
    },
    {
      year: "2022",
      description:
        "Completed 50 books in 50 days. From leadership to mindset, every page taught us that knowledge becomes power when paired with action.",
    },
    {
      year: "2023",
      description:
        "Learned 50 new skills in 50 days, from communication and growth to discipline and time management. It was a year of application, not just accumulation.",
    },
    {
      year: "2024",
      description:
        "Our boldest leap - Mission50. We hosted 120+ events in 50 days across India, reaching over 50,000 people through free, high-energy sessions in schools, NGOs, and colleges.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center w-full gap-4">
      {milestones.map((item) => (
        <GrowthCard key={item.year} year={item.year} description={item.description} />
      ))}
    </div>
  );
}

export default GrowthInMotion;
