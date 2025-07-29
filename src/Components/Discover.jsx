import React from "react";

const Discover = ({ cards = [] }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:px-10 lg:px-14 xl:px-20 mb-8 mt-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col justify-between w-full bg-black/60 rounded-xl p-8 min-h-[280px]"
        >
          <h2 className="text-center text-2xl font-semibold text-custom-amber">
            {card.title}
          </h2>
          <p className="mt-4 tracking-wide text-center text-xl text-gray-300">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Discover;
