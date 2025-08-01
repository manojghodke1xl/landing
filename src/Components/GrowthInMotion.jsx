const events = [
  {
    year: "2019",
    title: "YouTube Launch",
    description:
      "Launched JJFuntime, a YouTube channel at ages 7 and 4, igniting curiosity through fun, science-led experiments for children around the world.",
  },
  {
    year: "2020",
    title: "Religious Learning",
    description:
      "Learned a full religious book in just 50 days, in Prakrit, to challenge our minds and connect with our roots, showing that age doesn't define discipline.",
  },
  {
    year: "2021",
    title: "Networking",
    description:
      "Attended 50 networking events in 50 days. We listened, learned, and asked questions, gaining clarity and confidence from some of India’s most inspiring voices.",
  },
  {
    year: "2022",
    title: "Book Reading",
    description:
      "Completed 50 books in 50 days. From leadership to mindset, every page taught us that knowledge becomes power when paired with action.",
  },
  {
    year: "2023",
    title: "Skill Development",
    description:
      "Learned 50 new skills in 50 days, from communication and growth to discipline and time management. It was a year of application, not just accumulation.",
  },
  {
    year: "2024",
    title: "Mission50",
    description:
      "Our boldest leap - Mission50. We hosted 120+ events in 50 days across India, reaching over 50,000 people through free, high-energy sessions in schools, NGOs, and colleges.",
  },
  {
    year: "2025",
    title: "Next Chapter",
    description:
      "Our boldest leap - Mission50. We hosted 120+ events in 50 days across India, reaching over 50,000 people through free, high-energy sessions in schools, NGOs, and colleges.",
  },
];

export default function GrowthInMotion() {
  return (
    <div className="py-16 px-4 md:px-20 bg-[#faf5f7]">
      <h2 className="text-4xl font-bold text-center text-[#120C66] mb-20 bg-[#faf5f7] ">
        Every Year, A New Leap – Our Growth in Motion
      </h2>

      {events.map((event, index) => {
        const isEven = index % 2 === 0;
        return isEven ? (
          <div
            key={index}
            className="flex h-auto md:h-[150px] w-full text-left mb-10 md:mb-0 bg-[#faf5f7] "
          >
            {/* Left side */}
            <div className="flex w-full md:flex-row flex-col bg-[#faf5f7]">
              <div className="w-full md:w-[51%] h-full flex items-start justify-end pr-4 bg-[#faf5f7]">
                <div className="text-right  pt-4 bg-[#faf5f7]">
                  <h3 className="text-purple-800 font-bold text-xl bg-[#faf5f7]">
                    {event.year}
                  </h3>
                  <h4 className="font-semibold text-purple-600 text-lg bg-[#faf5f7]">
                    {event.title}
                  </h4>
                </div>
              </div>

              {/* Timeline marker */}
              <div className="flex flex-col items-center justify-center bg-[#faf5f7]">
                <div className="w-8 h-8 rounded-full bg-purple-600  text-white font-bold flex items-center justify-center border-4 border-purple-100 shadow-md z-10 mx-4 my-8 md:my-0">
                  ✓
                </div>
                <div className="w-1 h-full bg-purple-300"></div>
              </div>

              {/* Right side */}
              <div className="w-full md:w-[50%] h-full flex pt-4 pl-4 mt-4 md:mt-0 bg-[#faf5f7]">
                <p className="text-gray-700 text-sm bg-[#faf5f7]">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div
            key={index}
            className="flex h-auto md:h-[150px] w-full text-left mb-10 md:mb-0 bg-[#faf5f7]"
          >
            {/* Left side */}
            <div className="w-full h-full flex pt-4 pl-4 mt-4 md:mt-0 bg-[#faf5f7]">
              <p className="text-gray-700 text-sm bg-[#faf5f7]">
                {event.description}
              </p>
            </div>

            {/* Timeline marker */}
            <div className="flex flex-col   items-center justify-center bg-[#faf5f7]">
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center border-4 border-purple-100 shadow-md z-10 mx-4 my-8 md:my-0">
                ✓
              </div>
              <div className="w-1 h-full bg-purple-300"></div>
            </div>

            {/* Right side */}
            <div className="flex w-full md:flex-row flex-col bg-[#faf5f7]">
              <div className="w-full h-full flex items-start bg-[#faf5f7] justify-end pr-4">
                <div className="text-right  pt-4 bg-[#faf5f7]">
                  <h3 className="text-purple-800 font-bold bg-[#faf5f7] text-xl">
                    {event.year}
                  </h3>
                  <h4 className="font-semibold text-purple-600 bg-[#faf5f7] text-lg">
                    {event.title}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
