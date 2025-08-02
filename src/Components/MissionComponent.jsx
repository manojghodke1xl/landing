import { useState } from "react";

function MissionSection({
  heading,
  highlightedText,
  paragraphs = [],
  imageSrc,
  imageAlt,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Combine all paragraphs into one string
  const fullText = paragraphs.join(" ");
  const words = fullText.split(" ");
  const isLong = words.length > 20;
  const previewText = words.slice(0, 20).join(" ");

  const displayedText = isExpanded || !isLong ? fullText : previewText;

  return (
    <section className="w-[100%] md:w-[30%] bg-white flex flex-col shadow-md md:rounded-2xl p-6 md:p-10 items-center gap-6 md:gap-12 max-w-6xl mx-auto md:my-10 my-2 hover:scale-105 transition duration-200">
      <div className="w-full">
        {heading && (
          <h2 className="text-[26px]  md:text-3xl font-playfair text-gray-800 md:mb-4 bg-none">
            <b>{heading}</b>
          </h2>
        )}

        <p className=" text-md md:text-lg text-gray-600 mb-3 leading-relaxed  bg-none">
          {displayedText}
          {!isExpanded && isLong && "..."}
        </p>

        {isLong && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 font-medium hover:underline transition duration-200"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>

      <div className="w-full">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto rounded-lg object-cover shadow-md"
        />
      </div>
    </section>
  );
}

export default MissionSection;
