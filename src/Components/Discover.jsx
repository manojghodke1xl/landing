import React from "react";

const Discover = ({ cards = [] }) => {
  return (
    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 bg-transparent p-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="group relative overflow-hidden bg-white p-6 pl-8 rounded-xl shadow-md mb-6 last:mb-0 hover:scale-105  bg-transparent hover:shadow-lg transition-shadow duration-300"
        >
          <div
            className="
        absolute left-0 top-0 h-full w-1 bg-blue-500
        transition-transform duration-300
        origin-top scale-y-50 group-hover:scale-y-100
      "
          />

          <h3 className="md:text-2xl text-xl font-bold text-purple-800 mb-3">
            {card.title}
          </h3>
          <p className="md:text-lg text-gray-700">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Discover;
