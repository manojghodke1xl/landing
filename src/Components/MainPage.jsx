import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import indianFlag from "../assets/images/imageInd.webp";
import UAEFlag from "../assets/images/imageUAE.webp";
import { getSeoMeta } from "../utils/getSeoMeta";
import Seo from "../Seo";

const LazyFooter = React.lazy(() => import("./Footer"));

const MainPage = () => {
  // ✅ Variable declarations should be outside JSX
  const seo = getSeoMeta("https://books.1xl.com/");

  return (
    <>
      {/* ✅ Safely render Seo if seo is found */}
      {seo && <Seo {...seo} />}

      <nav className="bg-[] h-[100px] py-4 px-[56px]">
        <div className="flex items-center sm:justify-between justify-center">
          <div className="w-[233px] h-[70px] bg-gray-500 text-white flex items-center justify-center text-sm font-bold">
            <Link to="/">
              <img
                src="/Images/logo-white.webp"
                className="w-42 h-auto mt-5 mb-5"
                alt="Dreams To Reality Logo_Horizontal"
                loading="lazy"
              />
            </Link>
          </div>
        </div>
      </nav>

      <section
        className="bg-[#272727] text-white h-[80vh] flex flex-col items-center bg-transparent"
        id="main-page"
      >
        <div className="container w-full flex flex-col items-center bg-transparent">
          <h2 className="px-10 sm:px-14 md:px-18 pt-[50px] text-[20px] sm:text-[25px] md:text-[27px] xl:text-[46px] font-bold text-center text-white bg-transparent ">
            Hello! Select a country to purchase your book.
          </h2>
        </div>

        <div className="container bg-transparent w-full flex flex-col sm:flex-row pt-[50px] md:pt-[150px] justify-center gap-[30px] sm:gap-[50px] md:gap-[100px] flags">
          <div className="flex flex-col items-center">
            <Link to="/dreams-to-reality/in">
              <img
                src={indianFlag}
                alt="Indian Flag"
                className="w-[150px] sm:w-[200px] md:w-[250px] xl:w-[300px]"
                loading="lazy"
              />
              <h5 className="font-bold text-center pt-[20px]">India</h5>
            </Link>
          </div>

          <div className="flex bg-transparent flex-col items-center">
            <Link to="/dreams-to-reality/ae">
              <img
                src={UAEFlag}
                alt="UAE Flag"
                className="w-[150px] sm:w-[200px] md:w-[250px] xl:w-[300px]"
                loading="lazy"
              />
              <h5 className="pt-[20px] font-bold text-center">UAE</h5>
            </Link>
          </div>
        </div>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyFooter />
      </Suspense>
    </>
  );
};

export default MainPage;
