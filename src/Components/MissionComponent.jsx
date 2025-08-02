// import React from "react";

// function MissionSection({
//   heading,
//   highlightedText,
//   paragraphs = [],
//   imageSrc,
//   imageAlt,
//   imageFirst = false,
// }) {
//   return (
//     <div className="max-w-6xl mx-auto bg-custom-primary text-white p-8 md:p-12 rounded-xl mb-10 text-center">
//       <h3 className="text-3xl font-bold mb-6 text-white bg-custom-primary">
//         {highlightedText}
//       </h3>

//       <div className="max-w-3xl mx-auto space-y-4 text-lg mb-8 bg-custom-primary">
//         <section className="2xl:w-[110%] flex flex-col lg:flex-row gap-5 mt-10 mb-10 bg-custom-primary">
//           {/* IMAGE FIRST (left side) */}
//           {imageFirst && (
//             <div className="w-full flex justify-center flex-wrap bg-custom-primary">
//               <img
//                 src={imageSrc}
//                 className="w-full max-w-[700px] lg:max-w-[800px] h-auto object-contain bg-custom-primary"
//                 alt={imageAlt}
//                 loading="lazy"
//               />
//             </div>
//           )}

//           {/* TEXT CONTENT */}
//               <div className="max-w-3xl mx-auto -ml-5 space-y-4 text-lg -mb-4 bg-custom-primary pr-8">
//                 {paragraphs.map((para, index) => (
//                   <p
//                     key={index}
//                     className="text-white bg-custom-primary"
//                   >
//                     {para}
//                   </p>
//                 ))}
//               </div>

//           {/* IMAGE LAST (right side) */}
//           {!imageFirst && (
//             <div className="w-full flex justify-center flex-wrap bg-custom-primary">
//               <img
//                 src={imageSrc}
//                 className="w-full max-w-[600px] h-auto object-contain bg-custom-primary"
//                 alt={imageAlt}
//                 loading="lazy"
//               />
//             </div>
//           )}
//         </section>
//       </div>
//     </div>
//   );
// }

// export default MissionSection;

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
    <section className="w-[100%] md:w-[30%] bg-white flex flex-col shadow-md md:rounded-2xl p-6 md:p-10 items-center gap-6 md:gap-12 max-w-6xl mx-auto md:my-10 my-2">
      <div className="w-full">
        {heading && (
          <h2 className="text-xl  md:text-3xl font-playfair text-gray-800 md:mb-4 bg-none">
            {heading}
          </h2>
        )}

        <p className=" text-lg md:text-lg text-gray-600 mb-3 leading-relaxed  bg-none">
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
