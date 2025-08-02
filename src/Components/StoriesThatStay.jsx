function StoriesThatStay() {
  return (

    <div className="flex flex-col md:flex-row w-full h-full p-4 gap-6">
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src="/Images/stories.webp"
          className="w-full max-w-[700px] h-auto object-contain"
          alt="Stories That Stay With Us"
          loading="lazy"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2>
          <b className="font-playfair text-4xl md:text-5xl text-gray-900 mb-6 block">
            Stories That Stay With Us
          </b>
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Behind every mission, campaign, and breakthrough, there’s a spark, and
          we’ve captured those sparks across two platforms designed to keep the
          momentum alive, to keep inspiring, and to turn ideas into impact for
          thousands more.
        </p>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-[#FAF5FF] p-6 sm:p-8 rounded-xl shadow-md hover:scale-105 transition duration-200 bg-transparent">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">
              JJFuntime
            </h3>
            <p className="text-justify font-medium text-gray-700 text-[18px] bg-transparent">
              While the book captures our mindset, JJFuntime captures the magic
              of curiosity. This is where science becomes a playground where
              imagination leads the way, and learning feels like fun. With 150k+
              subscribers and counting, this platform proves that big dreams can
              start with small experiments.
            </p>
            <div className="text-start mt-4 bg-transparent">
              <a
                href="https://www.youtube.com/@JJFuntime"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-[18px]  inline-block bg-purple-700 hover:bg-purple-800 text-white   px-5 py-2 rounded-lg transition duration-200"
              >
                JJFuntime
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FAF5FF] p-6 sm:p-8 rounded-xl shadow-md hover:scale-105 transition duration-200 bg-transparent">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">
              JJMission Diary
            </h3>
            <p className="text-justify font-medium text-gray-700 text-[18px] bg-transparent">
              This is the raw, real extension of our growth journey. From
              late-night study hacks and day-to-day reflections to lessons from
              our 50-day missions, JJMission Diary documents the
              behind-the-scenes of turning dreams into action. It’s not about
              being fearless; it’s about showing up with purpose, even when it’s
              tough.
            </p>
            <div className="text-start mt-4 bg-transparent">
              <a
                href="https://www.youtube.com/@JJMissionDiary"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[18px]  inline-block bg-purple-700 hover:bg-purple-800 text-white   px-5 py-2 rounded-lg transition duration-200 "
              >
                JJMission Diary
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoriesThatStay;
