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
    <div className="max-w-6xl mx-auto bg-custom-primary text-white p-8 md:p-12 rounded-xl mb-10 text-center">
      <h3 className="text-3xl font-bold mb-6 text-white bg-custom-primary">
        {highlightedText}
      </h3>

      <div className="max-w-3xl mx-auto space-y-4 text-lg mb-8 bg-custom-primary">
        <section className="2xl:w-[110%] flex flex-col lg:flex-row gap-5 mt-10 mb-10 bg-custom-primary">
          {/* IMAGE FIRST (left side) */}
          {imageFirst && (
            <div className="w-full flex justify-center flex-wrap bg-custom-primary">
              <img
                src={imageSrc}
                className="w-full max-w-[700px] lg:max-w-[800px] h-auto object-contain bg-custom-primary"
                alt={imageAlt}
                loading="lazy"
              />
            </div>
          )}

          {/* TEXT CONTENT */}
          <div className="max-w-3xl mx-auto -ml-5 space-y-4 text-lg -mb-4 bg-custom-primary pr-8">
            {paragraphs.map((para, index) => (
              <p key={index} className="text-white bg-custom-primary">
                {para}
              </p>
            ))}
          </div>

          {/* IMAGE LAST (right side) */}
          {!imageFirst && (
            <div className="w-full flex justify-center flex-wrap bg-custom-primary">
              <img
                src={imageSrc}
                className="w-full max-w-[600px] h-auto object-contain bg-custom-primary"
                alt={imageAlt}
                loading="lazy"
              />
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default MissionSection;
