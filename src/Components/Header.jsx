// components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="h-[100px] bg-black px-[56px] py-4">
      <div className="flex items-center sm:justify-between justify-center h-full bg-black">
        <div className="flex items-center justify-center h-full bg-black">
          <Link to="/">
            <img
              src="/Images/logo-white.webp"
              className="bg-black"
              alt="Dreams To Reality Logo"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
