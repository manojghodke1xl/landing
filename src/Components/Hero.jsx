import React, { useState, useEffect, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getSeoMeta } from "../utils/getSeoMeta";
import Seo from "../Seo";
import { cardData, missionSectionsData } from "../data/BooksData";
import StoriesThatStay from "./StoriesThatStay";
import Whythisbook from "./Whythisbook";

const LazyFooter = React.lazy(() => import("./Footer"));
const FooterUAE = React.lazy(() => import("./FooterUAE"));
const LazyGrowthInMotion = lazy(() => import("./GrowthInMotion"));
const MissionSection = lazy(() => import("./MissionComponent"));
const LazyBulletListSection = lazy(() => import("./BulletListSection"));
const LazyDiscover = lazy(() => import("./Discover"));
const LazyChange = lazy(() => import("./Change"));
const LazyWhyAttend = lazy(() => import("./WhyAttend"));

const Hero = ({ country }) => {
  const [isVisible, setIsVisible] = useState(false);
  const seo = getSeoMeta(`https://books.1xl.com/dreams-to-reality/${country}`);
  const successUrl = window.location.origin + "/success";
  const failureUrl = window.location.origin + "/failure";
  useEffect(() => {
    console.log("Hero component mounted with country:", country);
    console.log("window.location.pathname", window.location.pathname);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const baseUrl = "https://books.1xl.com/pay/";
  const queryParams = {
    type: "PRODUCT",
    curr: country === "in" ? "INR" : "AED",
    successUrl: successUrl,
    failureUrl: failureUrl,
    from: window.location.pathname,
  };

  const buildPayUrl = (productId) => {
    const searchParams = new URLSearchParams({
      ...queryParams,
      productIds: productId,
    });
    return `${baseUrl}?${searchParams.toString()}`;
  };

  return (
    <>
      {seo && <Seo {...seo} />}
      <div className="w-full h-full px-[10px] md:px-10">
        <nav className="bg-gray-800 p-4 bg-custom-primary">
          <div className="flex items-center sm:justify-between justify-center bg-custom-primary">
            <div className="w-[233px] h-[70px] bg-gray-500 text-white flex items-center justify-center text-sm font-bold bg-custom-primary">
              <Link to="/" className="bg-custom-primary">
                <img
                  src="/Images/logo-white.webp"
                  className="w-42 h-auto mt-5 bg-custom-primary"
                  alt="Dreams To Reality Logo_Horizontal"
                  fetchpriority="high"
                  decoding="async"
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
        </nav>

        <div className="flex justify-center bg-custom-primary">
          <section className="w-full bg-custom-primary text-white flex flex-col xl:flex-row gap-5 mt-15 mb-10">
            <div className="w-full flex flex-col items-start lg:flex-col-reverse xl:w-[65%] bg-custom-primary">
              <div className="w-[90%] flex flex-col items-start justify-center mx-[10px] gap-4 lg:mx-[25px] mb-10 lg:mb-0 bg-custom-primary">
                {/* Title Section inside left */}
                <div className="flex flex-col items-start text-left bg-custom-primary">
                  <h2 className="font-playfair w-full pt-[30px] px-2 sm:px-10 md:px-18 text-23xl sm:text-4xl xl:text-5xl font-bold text-left text-white bg-custom-primary">
                    Check Out the Ultimate Success Blueprint of Two Young
                    Siblings Who Took on Bold Challenges and Inspired Thousands!
                  </h2>
                </div>
                <Suspense
                  fallback={<div className="text-center">Loading...</div>}
                >
                  <LazyWhyAttend />
                </Suspense>
                <div className="flex flex-col lg:flex-row gap-4 justify-center px-10 md:px-16 bg-custom-primary">
                  <a
                    // href={`/pay/?type=PRODUCT&curr=INR&productIds=67de9c03770d7aa5b35b4712&successUrl=${successUrl}&failureUrl=${failureUrl}&from=dreams-to-reality/in`}
                    href={buildPayUrl("67de9c03770d7aa5b35b4712")}
                    className="w-full lg:w-auto px-6 py-4 rounded-full bg-white text-custom-primary font-bold "
                  >
                    Grab Your Hardcover
                  </a>
                  <a
                    href={buildPayUrl("67dea774770d7aa5b35b4db2")}
                    // href={`/pay/?type=PRODUCT&curr=INR&productIds=67dea774770d7aa5b35b4db2&&successUrl=${successUrl}&failureUrl=${failureUrl}&from=dreams-to-reality/in`}
                    //onClick={() => ToCheckout("67dea774770d7aa5b35b4db2")}
                    className="w-full lg:w-auto px-6 py-4 border border-white rounded-full bg-custom-primary text-white font-bold"
                  >
                    Grab Your E-Book
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center -mt-6 sm:mt-7 xl:mt-0 xl:w-[35%] bg-custom-primary">
              <div className="w-full flex justify-center relative px-5 bg-custom-primary">
                <div className="w-90 h-90 rounded-full opacity-90">
                  <div className="z-40">
                    <img
                      src="/Images/TheNextChapter.webp"
                      loading="lazy"
                      className="transition-transform duration-500 hover:rotate-12"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="w-full  ">
          <Suspense fallback={<div className="text-center">Loading...</div>}>
            <LazyChange />
          </Suspense>
        </section>
        <section className="w-full  ">
          <Suspense fallback={<div className="text-center">Loading...</div>}>
            <LazyGrowthInMotion />
          </Suspense>
        </section>

        <div className="bg-purple-50 text-white pt-10 w-full lg:px-10 xl:px-20 md:mt-5 md:flex md:flex-wrap md:gap-4 ">
          {missionSectionsData.map((section, index) => (
            <Suspense
              fallback={
                <div className="text-white text-center">Loading...</div>
              }
              key={index}
            >
              <MissionSection {...section} />
            </Suspense>
          ))}
        </div>
        <div className="text-centre my-8">
          <StoriesThatStay />
        </div>

        <section className="bg-transparent mt-10 md:mx-10 py-[10px]">
          <h2 className="w-full text-center text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold bg-transparent">
            <b className="font-playfair text-3xl md:text-5xl font-bold text-gray-900 mb-6 bg-transparent ">
              What Will You Discover in This Book?
            </b>
          </h2>
          <Suspense
            fallback={<div className="text-white text-center">Loading...</div>}
          >
            <LazyDiscover cards={cardData} />
          </Suspense>
        </section>
        <section className="text-center max-w-3xl md:my-10 mx-auto">
          <div className="w-full flex flex-col justify-center  items-center mb-4 relative">
            <h2 className="w-full text-center text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] -mt-4 -mb-2 font-bold">
              <b className="text-2xl md:text-3xl font-semibold text-purple-800 my-6 md:my-4">
                Dreams to Reality isn’t just a story; it’s an inspiration!
              </b>
            </h2>
            <p className="text-lg md:text-2xl text-gray-600 my-8">
              And these platforms are how we keep that inspiration alive;
              through action, creativity, and connection.
            </p>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
              Be part of the next chapter.
            </h3>
            <p className="text-lg  md:text-xl text-gray-700">
              Because the real magic begins when you take the first step.
            </p>
            {/* Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              {/* Hardcover Button */}
              <a
                href={buildPayUrl("67de9c03770d7aa5b35b4712")}
                className="text-white bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 font-semibold px-6 py-3 rounded-full text-sm shadow-md transition-all text-center"
              >
                Grab Your Hardcover
              </a>

              {/* E-Book Button */}
              <a
                href={buildPayUrl("67dea774770d7aa5b35b4db2")}
                className="text-purple-700 border border-purple-600 hover:bg-purple-100 font-semibold px-6 py-3 rounded-full text-sm transition-all text-center"
              >
                Grab Your E-Book
              </a>
            </div>
          </div>
        </section>

        <div className="w-full flex flex-col md:my-15 justify-center items-center px-10 bg-[#F9FAFB]">
          <Whythisbook />
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {country === "in" ? (
          <LazyFooter buildPayUrl={buildPayUrl} />
        ) : (
          <LazyFooter buildPayUrl={buildPayUrl} country="UAE" code="/ae" />
        )}
      </Suspense>
    </>
  );
};

export default Hero;
