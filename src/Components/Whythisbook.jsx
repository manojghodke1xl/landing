import { Check } from "lucide-react";
import React from "react";

const bookSectionData = [
  {
    heading: "Dreams to Reality is NOT Just Another Ordinary Book!",
    description:
      "Unlike typical motivational books, Dreams to Reality isn’t filled with complex theories or impractical advice.",
    imageSrc: "/Images/not-a-ordinary.webp",
    imageAlt: "Dreams to Reality is NOT Just Another Ordinary Book!",
    subheading: "Instead, this book offers:",
    bulletPoints: [
      "Actionable guidance to help you move forward.",
      "Real-life experiences from two young achievers who made a tangible impact.",
      "Lessons learned through personal challenges and growth.",
    ],
    closing: {
      title: "The best part? You don’t have to figure it all out on your own.",
      subtitle:
        "Dreams to Reality will show you exactly how to break past doubts, take bold action, and start achieving what once felt impossible.",
    },
  },
  {
    heading: "We Turned Dreams into Reality by Breaking All the Rules!",
    description:
      "We never had a big network or formal training when we started. Even better, we didn’t rely on what most people consider essential for success. Our journey had:",
    imageSrc: "/Images/breaking-all-rules.webp",
    imageAlt: "We Turned Dreams into Reality by Breaking All the Rules!",
    subheading: "We didn’t have shortcuts, fame, or a head start.",
    bulletPoints: [
      "What we did have was stubborn determination,",
      "A strong willingness to learn,",
      "Consistency through every challenge,",
      "And a habit of taking on one bold mission every year.",
    ],
    closing: {
      title: "Sounds impossible, right? But here’s the truth:",
      subtitle: " Success comes from actions, not circumstances.",
    },
  },
  {
    heading:
      "Our Approach to Growth Has Given Us More Freedom Than We Ever Imagined!",
    description:
      " By following a structured system of 50-day challenges, we were able to focus on what truly matters:",
    imageSrc: "/Images/freedom.webp",
    imageAlt:
      "Our Approach to Growth Has Given Us More Freedom Than We Ever Imagined!",
    subheading: "We didn’t have shortcuts, fame, or a head start.",
    bulletPoints: [
      "Taking on new challenges without hesitation.",
      "Building confidence through real experiences.",
      "Learning, growing, and inspiring others along the way.",
      "Creating a life of impact by helping others achieve their dreams.",
    ],
    closing: {
      title: "",
      subtitle:
        "Through this approach, we've realised that success isn't just about achievements - it's about freedom, growth, and making a difference.",
    },
  },
  {
    heading: "Get Your Copy Now – Limited Stock Available!",
    description:
      "We’ve printed only a few copies of Dreams to Reality for this special giveaway – and they’re going fast. Once these copies are gone, it could be months before more are available.",
    imageSrc: "/Images/LimitedBook.webp",
    imageAlt: "Get Your Copy Now – Limited Stock Available!",
    subheading: "Your copy is still available – right now.",
    bulletPoints: [
      "Only a limited number of books printed for this giveaway.",
      "Once they’re gone, restock could take months.",
      "Perfect opportunity if you're serious about your goals.",
    ],
    closing: {
      title: "Time is running out...",
      subtitle:
        "If you’re serious about turning your goals into reality, don’t wait – grab your copy today before it’s gone!",
    },
  },
];

function Whythisbook() {
  return (
    <div>
      {bookSectionData.map((section, index) => {
        const {
          heading,
          description,
          imageSrc,
          imageAlt,
          subheading,
          bulletPoints,
          closing,
        } = section;
        const isOdd = index % 2 !== 0;
        return (
          <section
            key={index}
            className="w-[382px] md:w-full py-3 px-4 bg-white"
            id={`book-unique-${index}`}
          >
            <div
              className={`max-w-6xl flex gap-x-8 items-center flex-col md:flex-row ${
                isOdd ? "md:flex-row-reverse" : ""
              } mx-auto`}
            >
              <div className="text-center flex flex-col md:gap-[28] gap-4 mb-16">
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {heading}
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {description}
                </p>
                <div className="w-full">
                  <img
                    className="w-full h-auto rounded-xl"
                    src={imageSrc}
                    alt={imageAlt}
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="bg-purple-50 p-8 rounded-xl shadow-lg mb-16">
                <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center">
                  {subheading}
                </h3>
                <ul className="space-y-6 text-lg">
                  {bulletPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        className="text-purple-600 mt-1 flex-shrink-0 w-6 h-6"
                        stroke="#9333ea"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 text-center">
                  <p className="text-lg font-semibold mb-2">{closing.title}</p>
                  <p className="text-lg text-purple-800">{closing.subtitle}</p>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Whythisbook;
