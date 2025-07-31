import React from "react";

function MissionSection({
  heading,
  highlightedText,
  paragraphs = [],
  imageSrc,
  imageAlt,
  imageFirst = false,
}) {
  return (
    <section className="bg-purple-800 text-white">
      <h2 className="w-full text-center text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] -mt-4 bg-purple-800 text-white font-playfair">
        <b className="text-custom-amber bg-purple-800 text-white">
          {highlightedText}
        </b>
      </h2>

      <div className="flex justify-center bg-purple-800 text-white">
        <section className="2xl:w-[80%] flex flex-col lg:flex-row gap-5 mt-10 mb-10  bg-purple-800">
          {/* IMAGE FIRST (left side) */}
          {imageFirst && (
            <div className="w-full flex justify-center flex-wrap bg-purple-800 text-white">
              <img
                src={imageSrc}
                className="w-full max-w-[600px] h-auto object-contain"
                alt={imageAlt}
                loading="lazy"
              />
            </div>
          )}

          {/* TEXT CONTENT */}
          <div className="w-full bg-purple-800 text-white">
            <div className="w-[90%] flex flex-col items-start mb-5 lg:mb-10 mx-[15px] -mt-5">
              <div className="w-full flex flex-col bg-purple-800 justify-center items-center gap-y-2">
                {paragraphs.map((para, index) => (
                  <p
                    key={index}
                    className="w-[90%] text-justify text-[18px] sm:text-[20px] md:text-[20px] font-medium bg-purple-800 text-white"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* IMAGE LAST (right side) */}
          {!imageFirst && (
            <div className="w-full flex justify-center flex-wrap bg-purple-800 text-white">
              <img
                src={imageSrc}
                className="w-full max-w-[600px] h-auto object-contain bg-purple-800 text-white"
                alt={imageAlt}
                loading="lazy"
              />
            </div>
          )}
        </section>
      </div>
    </section>
  );
}

export default MissionSection;
