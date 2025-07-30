import React from "react";

const Discover = ({ cards = [] }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:px-10 lg:px-14 xl:px-20 mb-8 mt-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col w-full bg-black/60 rounded-xl p-8 min-h-[200px]"
        >
          <h2 className="text-center text-2xl font-semibold text-custom-amber leading-snug min-h-[64px] flex items-center justify-center">
            {card.title}
          </h2>
          <p className="mt-4 text-justify text-md tracking-wide leading-relaxed text-gray-300">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Discover;
