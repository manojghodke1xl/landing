import React from "react";

const Discover = ({ cards = [] }) => {
  return (
    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 bg-transparent p-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl shadow-md mb-6 last:mb-0 hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="text-xl font-bold text-purple-800 mb-3 bg-transparent">
            {card.title}
          </h3>
          <p className="text-gray-700 bg-transparent">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Discover;
