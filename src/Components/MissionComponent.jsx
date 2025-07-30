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
    <section>
      <h2 className="w-full text-center text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] -mt-4 font-bold">
        <b className="text-custom-amber">{highlightedText}</b>
      </h2>

      <div className="flex justify-center">
        <section className="2xl:w-[80%] flex flex-col lg:flex-row gap-5 mt-10 mb-10">
          {/* IMAGE FIRST (left side) */}
          {imageFirst && (
            <div className="w-full flex justify-center flex-wrap">
              <img
                src={imageSrc}
                className="w-full max-w-[600px] h-auto object-contain"
                alt={imageAlt}
                loading="lazy"
              />
            </div>
          )}

          {/* TEXT CONTENT */}
          <div className="w-full ">
            <div className="w-[90%] flex flex-col items-start mb-5 lg:mb-10 mx-[15px] -mt-5">
              <div className="w-full flex flex-col justify-center items-center gap-y-2">
                {paragraphs.map((para, index) => (
                  <p
                    key={index}
                    className="w-[90%] text-justify text-[18px] sm:text-[20px] md:text-[20px] font-medium"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* IMAGE LAST (right side) */}
          {!imageFirst && (
            <div className="w-full flex justify-center flex-wrap">
              <img
                src={imageSrc}
                className="w-full max-w-[600px] h-auto object-contain"
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
