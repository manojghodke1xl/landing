import React from "react";

function FloatingButton({
  floatingText = "Contact Us",
  //   top = "",
  //   bottom = "6",
  //   left = "",
  //   right = "6",
  onClick = () => {},
  type = "button",
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`fixed z-50 bottom-6 right-6 bg-gradient-to-r bg-btn-primary hover:bg-btn-primary/90 text-white p-4 rounded-full  hover:scale-105 transform transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 shadow-2xl`}
    >
      {floatingText}
    </button>
  );
}

export default FloatingButton;
