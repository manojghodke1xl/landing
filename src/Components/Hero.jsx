import React, { useState, useEffect, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getSeoMeta } from "../utils/getSeoMeta";
import Seo from "../Seo";
import { cardData, missionSectionsData } from "../data/BooksData";
import { Check } from "lucide-react";
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
                    <img src="/Images/TheNextChapter.webp" loading="lazy"></img>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <section>
          <div className="w-full flex flex-col items-center bg-custom-light justify-center py-30">
            <div className="w-[90%] h-fit mx-[25px] px-[20px]  py-[26px] rounded-2xl text-center mt-14 z-50 bg-custom-light">
              <h4 className="text-4xl md:text-5xl font-playfair font-bold bg-custom-light text-gray-900 mb-6">
                Meet Two Young Visionaries
              </h4>
              <h5 className="mt-4 text-md text-gray-600 bg-custom-light">
                Discover the incredible story of two young prodigies.
              </h5>
              <div className=" h-32 md:h-28 mx-[25px] mt-2 px-[20px] py-[10px] rounded-2xl text-center bg-custom-light">
                <div className="w-full flex justify-center bg-custom-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="114"
                    height="25"
                    viewBox="0 0 114 25"
                    fill="none"
                  >
                    <path
                      d="M6.41603 22.5628L8.0826 15.358L2.49316 10.5122L9.87738 9.87116L12.749 3.07666L15.6207 9.87116L23.0049 10.5122L17.4154 15.358L19.082 22.5628L12.749 18.7425L6.41603 22.5628Z"
                      fill="#FFC621"
                    ></path>
                    <path
                      d="M28.5686 22.5625L30.2352 15.3578L24.6458 10.5119L32.03 9.87092L34.9016 3.07642L37.7732 9.87092L45.1575 10.5119L39.568 15.3578L41.2346 22.5625L34.9016 18.7422L28.5686 22.5625Z"
                      fill="#FFC621"
                    ></path>
                    <path
                      d="M50.7212 22.5625L52.3878 15.3578L46.7983 10.5119L54.1826 9.87092L57.0542 3.07642L59.9258 9.87092L67.31 10.5119L61.7206 15.3578L63.3872 22.5625L57.0542 18.7422L50.7212 22.5625Z"
                      fill="#FFC621"
                    ></path>
                    <path
                      d="M72.8738 22.5625L74.5404 15.3578L68.9509 10.5119L76.3351 9.87092L79.2068 3.07642L82.0784 9.87092L89.4626 10.5119L83.8732 15.3578L85.5398 22.5625L79.2068 18.7422L72.8738 22.5625Z"
                      fill="#FFC621"
                    ></path>
                    <path
                      d="M95.3601 22.5628L97.0267 15.358L91.4373 10.5122L98.8215 9.87116L101.693 3.07666L104.565 9.87116L111.949 10.5122L106.36 15.358L108.026 22.5628L101.693 18.7425L95.3601 22.5628Z"
                      fill="#FFC621"
                    ></path>
                  </svg>
                </div>
                <h5 className="font-semibold mt-2 bg-custom-light text-lg text-gray-600 max-w-3xl mx-auto">
                  Proving that success is not limited by age.
                </h5>
              </div>
            </div>
            <div className="w-full flex justify-center relative px-5 bg-custom-light -mt-6">
              <div className="w-80 h-70 rounded-full opacity-90 bg-custom-light">
                <div className="z-40 bg-custom-light">
                  {" "}
                  <img
                    src="/Images/Hero-image.webp"
                    loading="lazy"
                    className="bg-custom-light"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <LazyChange />
        </Suspense>

        <section className="py-8 sm:py-14 px-[20px] mb-10 bg-[#faf5f7] rounded-xl container mx-auto max-w-[90%]">
          <div className="w-full flex flex-col gap-y-4 justify-center pb-8 items-center bg-[#faf5f7]">
            <h2 className="w-full text-center text-2xl font-semibold bg-[#faf5f7]">
              <b className="text-custom-primary mb-6 bg-[#faf5f7]">
                Dreams to Reality is a testament to how purpose, not age,
                creates impact.
              </b>
            </h2>
          </div>

          <div className="flex px-10 flex-col justify-center items-center mb-5 -mt-6 sm:mt-0 bg-[#faf5f7]">
            <p className="font-helvetica bg-[#faf5f7] md:text-lg text-md text-gray-600 mb-8">
              This is the true story of two young siblings and child prodigies
              who transformed their learnings into a mission of giving back,
              reaching over 50,000 people across India through 120+ events in
              just 50 days. Their journey wasn’t just about personal growth; it
              was rooted in service, contribution, and the desire to spark
              possibility in every life they touched.
            </p>
          </div>

          <div className=" px-10 myths-list flex flex-col gap-4 justify-start items-start bg-[#faf5f7]">
            <h4 className="text-lg font-bold -mt-4 bg-[#faf5f7] mb-4">
              Through their 50-day mission, they:
            </h4>
            <ul className="list-none p-0 bg-[#faf5f7]">
              <li className="flex items-center gap-3 mb-4 bg-[#faf5f7]">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 22 22"
                    fill="none"
                    className="bg-[#faf5f7]"
                  >
                    <circle cx="11" cy="11" r="11"></circle>
                    <path
                      d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                      fill="#582b81"
                    ></path>
                  </svg>
                </span>
                <span className="md:text-lg text-md text-semibolds bg-[#faf5f7] font-helvetica text-gray-600">
                  {" "}
                  Turned vision into impact - one day, one event at a time.
                </span>
              </li>
              <li className="flex items-center gap-3 mb-4 bg-[#faf5f7]">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 22 22"
                    fill="none"
                    className="bg-[#faf5f7]"
                  >
                    <circle cx="11" cy="11" r="11"></circle>
                    <path
                      d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                      fill="#582b81"
                    ></path>
                  </svg>
                </span>
                <span className="md:text-lg text-md text-semibold bg-[#faf5f7] font-helvetica text-gray-600">
                  {" "}
                  Faced doubts, setbacks, and uncertainty with resilience.
                </span>
              </li>
              <li className="flex items-center gap-3 mb-4 bg-[#faf5f7]">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 22 22"
                    fill="none"
                    className="bg-[#faf5f7]"
                  >
                    <circle cx="11" cy="11" r="11"></circle>
                    <path
                      d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                      fill="#582b81"
                    ></path>
                  </svg>
                </span>
                <span className="md:text-lg text-md text-semibold bg-[#faf5f7] font-helvetica text-gray-600">
                  Inspired 50,000+ people by showing what’s possible with
                  clarity and courage.
                </span>
              </li>
              <li className="flex items-center gap-3 mb-4 bg-[#faf5f7]">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 22 22"
                    fill="none"
                    className="bg-[#faf5f7]"
                  >
                    <circle cx="11" cy="11" r="11"></circle>
                    <path
                      d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                      fill="#582b81"
                    ></path>
                  </svg>
                </span>
                <span className="md:text-lg text-md text-semibolds bg-[#faf5f7] font-helvetica text-gray-600">
                  Focused on growth, learning, and service, rather than just
                  goals.
                </span>
              </li>
            </ul>
          </div>

          <div className=" px-10 flex flex-col justify-center bg-[#faf5f7]">
            <p className="text-start text-md sm:text-lg text-gray-600 mb-2 mt-4 bg-[#faf5f7]">
              This book reminds us that you don’t have to be extraordinary to
              create change; you just have to be intentional.
            </p>
            <h4 className="text-start text-md sm:text-lg text-gray-600 bg-[#faf5f7] font-semibold">
              It’s not a story of luck; it’s a journey of choice, discipline,
              and heart.
            </h4>
          </div>
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

        <section className="bg-transparent mt-10 mx-10 py-[10px]">
          <h2 className="w-full text-center text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold bg-transparent">
            <b className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-transparent ">
              What Will You Discover in This Book?
            </b>
          </h2>
          <Suspense
            fallback={<div className="text-white text-center">Loading...</div>}
          >
            <LazyDiscover cards={cardData} />
          </Suspense>
        </section>

        {/* <div className="bg-secondary text-center mb-16">
          <h2 className="w-full py-[25px] md:py-[40px]  px-10 md:px-18  text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px]  font-bold text-center">
            <b className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stories That Stay With Us
            </b>
          </h2>

          <div className="flex flex-col justify-center items-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Behind every mission, campaign, and breakthrough, there’s a spark,
              and we’ve captured those sparks across two platforms designed to
              keep the momentum alive, to keep inspiring, and to turn ideas into
              impact for thousands more.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <section className="w-[90%] bg-secondar justify-center px-[15px] flex flex-col mt-12 gap-5">
              <div className="flex justify-center flex-wrap">
                <img
                  src="/Images/stories.webp"
                  className="w-full max-w-[700px] h-auto object-contain"
                  alt="Stories That Stay With Us"
                  loading="lazy"
                />
              </div>
              <div className="w-full flex flex-col justify-center items-center mt-3">
                <div className="w-[90%] flex flex-col items-cetner justify-center  mx-[25px] mt-0">
                  <div className="w-full flex flex-col justify-between">
                    <div className="grid md:grid-cols-2 gap-12 mb-3">
                      <div className="mb-3 w-full bg-[#FAF5FF] p-8 rounded-xl hover:scale-105 transition shadow-md  rounded-xl p-4 sm:px-6">
                        <div className="flex  pb-2 bg-[#FAF5FF]">
                          <h3 className="text-2xl font-bold text-purple-800 mb-4 bg-[#FAF5FF]">
                            JJFuntime
                          </h3>
                        </div>
                        <p className="text-justify font-medium text-gray-700 text-[18px] bg-[#FAF5FF]">
                          While the book captures our mindset, JJFuntime
                          captures the magic of curiosity. This is where science
                          becomes a playground where imagination leads the way,
                          and learning feels like fun. With 150k+ subscribers
                          and counting, this platform proves that big dreams can
                          start with small experiments.
                        </p>
                        <div className="text-start mt-4 bg-[#FAF5FF]">
                          <a
                            href="https://www.youtube.com/@JJFuntime"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-semibold text-sm px-5 py-2 rounded-lg transition duration-200"
                          >
                            JJFuntime
                          </a>
                        </div>
                      </div>
                      <div className="mb-3 w-full hover:scale-105 transition bg-[#FAF5FF] p-8 rounded-xl shadow-md  rounded-xl p-4 sm:px-6">
                        <div className="flex  pb-2 bg-[#FAF5FF]">
                          <h3 className="text-2xl font-bold text-purple-800 mb-4 bg-[#FAF5FF]">
                            JJMission Diary
                          </h3>
                        </div>
                        <p className="text-justify font-medium text-gray-700 text-[18px] bg-[#FAF5FF]">
                          This is the raw, real extension of our growth journey.
                          From late-night study hacks and day-to-day reflections
                          to lessons from our 50-day missions, JJMission Diary
                          documents the behind-the-scenes of turning dreams into
                          action. It’s not about being fearless; it’s about
                          showing up with purpose, even when it’s tough.
                        </p>
                        <div className="text-start mt-4 bg-[#FAF5FF]">
                          <a
                            href="https://www.youtube.com/@JJMissionDiary"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-semibold text-sm px-5 py-2 rounded-lg transition duration-200"
                          >
                            JJMission Diary
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div> */}

        <section className="text-center max-w-3xl mx-auto">
          <div className="w-full flex flex-col justify-center  items-center mb-4 relative">
            <h2 className="w-full text-center text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] -mt-4 -mb-2 font-bold">
              <b className="text-2xl font-semibold text-purple-800 mb-4">
                Dreams to Reality isn’t just a story; it’s an inspiration!
              </b>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              And these platforms are how we keep that inspiration alive;
              through action, creativity, and connection.
            </p>
            <h3 className="text-xl font-semibold text-gray-700">
              Be part of the next chapter.
            </h3>
            <p className="text-lg text-gray-700">
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

        <div className="w-full flex flex-col justify-center items-center px-10 bg-[#F9FAFB]">
          <Whythisbook />
          {/* <div className="mt-16 bg-white rounded-xl overflow-hidden shadow-xl">
            <div className=" bg-gradient-to-r from-purple-800 to-purple-900 text-white p-8 text-center">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 bg-transparent text-white">
                We Turned Dreams into Reality by Breaking All the Rules!
              </h2>
              <p className="text-xl max-w-3xl mx-auto  bg-transparent text-white">
                We never had a big network or formal training when we started.
                Even better, we didn't rely on what most people consider
                essential for success. Our journey had:
              </p>
            </div>
            <div className="p-8 ">
              <div className="flex">
                <div className="space-y-4 text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                  <p>We didn't have shortcuts, fame, or a head start.</p>
                  <p className="font-semibold">
                    What we did have was stubborn determination,
                  </p>
                  <p>A strong willingness to learn,</p>
                  <p>Consistency through every challenge,</p>
                  <p>And a habit of taking on one bold mission every year.</p>
                </div>
                <div className="w-full 2xl:w-1/3">
                  <img
                    className="w-full"
                    src="/Images/breaking-all-rules.webp"
                    alt="We Turned Dreams into Reality by Breaking All the Rules!"
                    loading="lazy"
                  />{" "}
                </div>
              </div>
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-xl mb-2">
                  Sounds impossible, right? But here's the truth:
                </p>
                <p className="text-2xl font-bold text-purple-800">
                  Success comes from actions, not circumstances.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16 bg-white rounded-xl overflow-hidden shadow-xl">
            <div className=" bg-gradient-to-r from-purple-800 to-purple-900 text-white p-8 text-center">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 bg-transparent text-white">
                Our Approach to Growth Has Given Us More Freedom Than We Ever
                Imagined!
              </h2>
              <p className="text-xl max-w-3xl mx-auto  bg-transparent text-white">
                By following a structured system of 50-day challenges, we were
                able to focus on what truly matters:
              </p>
            </div>
            <div className="p-8 ">
              <div className="flex">
                <div className="space-y-4 text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                  <p>Taking on new challenges without hesitation.</p>
                  <p>Building confidence through real experiences.</p>
                  <p>Learning, growing, and inspiring others along the way.</p>
                  <p>
                    Creating a life of impact by helping others achieve their
                    dreams.
                  </p>
                </div>
                <div className="w-full 2xl:w-1/3">
                  <img
                    className="w-full"
                    src="/Images/freedom.webp"
                    alt=" Our Approach to Growth Has Given Us More Freedom Than We Ever
                Imagined!"
                    loading="lazy"
                  />{" "}
                </div>
              </div>
              <div className="text-center max-w-3xl mt-4 mx-auto">
                <p className="text-2xl font-bold text-purple-800">
                  Through this approach, we've realised that success isn't just
                  about achievements - it's about freedom, growth, and making a
                  difference.
                </p>
              </div>
            </div>
          </div> */}

          {/* <section className="bg-transparent mt-10 mx-10 py-[10px]">
            <h2 className="w-full text-center text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold bg-transparent">
              <b className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-transparent ">
                What Will You Discover in This Book?
              </b>
            </h2>
            <Suspense
              fallback={
                <div className="text-white text-center">Loading...</div>
              }
            >
              <LazyDiscover cards={cardData} />
            </Suspense>
          </section> */}
        </div>
        {/* <section className="pt-[20px] bg-black grid justify-center rounded-xl px-[20px] relative">
          <div className="w-full flex flex-col items-center gap-y-2 justify-center">
            <h2 className="max-w-[1200px] px-5 md:px-18 text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold text-center ">
              <b className="text-custom-amber"></b> */}
        {/* <section className="-py-3 px-4 bg-white" id="book-unique">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Dreams to Reality is NOT Just Another Ordinary Book!
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Unlike typical motivational books, Dreams to Reality isn’t
                filled with complex theories or impractical advice.
              </p>
            </div>
            <div className="bg-purple-50 p-8 rounded-xl shadow-lg mb-16">
              <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center bg-purple-50">
                Instead, this book offers:
              </h3>
              <div className="flex flex-col lg:flex-row items-start gap-8 bg-purple-50">
                <ul className="space-y-6 text-lg lg:w-2/3 bg-purple-50">
                  <li className="flex items-start gap-3 bg-purple-50">
                    <Check
                      className="text-purple-600 mt-1 flex-shrink-0 w-6 h-6 bg-purple-50"
                      stroke="#9333ea"
                    />
                    <span className="bg-purple-50">
                      Actionable guidance to help you move forward.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 bg-purple-50 bg-purple-50">
                    <Check
                      className="text-purple-600 mt-1 flex-shrink-0 w-6 h-6 bg-purple-50"
                      stroke="#9333ea"
                    />
                    <span className="bg-purple-50 bg-purple-50">
                      Real-life experiences from two young achievers who made a
                      tangible impact.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 bg-purple-50">
                    <Check
                      className="text-purple-600 mt-1 flex-shrink-0 w-6 h-6 bg-purple-50"
                      stroke="#9333ea"
                    />
                    <span className="bg-purple-50 bg-purple-50">
                      Lessons learned through personal challenges and growth.
                    </span>
                  </li>
                </ul>
                <div className="w-full lg:w-1/3">
                  <img
                    className="w-full h-auto rounded-xl"
                    src="/Images/not-a-ordinary.webp"
                    alt="Dreams to Reality is NOT Just Another Ordinary Book!"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="mt-8 text-center bg-purple-50">
                <p className="text-lg font-semibold mb-2 bg-purple-50">
                  The best part? You don’t have to figure it all out on your
                  own.
                </p>
                <p className="text-lg text-purple-800 bg-purple-50">
                  {" "}
                  Dreams to Reality will show you exactly how to break past
                  doubts, take bold action, and start achieving what once felt
                  impossible.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <MissionSection
            heading="Get Your Copy Now – Limited Stock Available!"
            highlightedText="Get Your Copy Now – Limited Stock Available!"
            paragraphs={[
              "We’ve printed only a few copies of Dreams to Reality for this special giveaway – and they’re going fast.",
              "Once these copies are gone, it could be months before more are available.",
              "The good news? Your copy is still available – right now.",
              "But time is running out…",
              "If you’re serious about turning your goals into reality, don’t wait – grab your copy today before it’s gone!",
            ]}
            imageSrc="/Images/LimitedBook.webp"
            imageAlt="Limited Book Cover"
            imageFirst={false}
          />
        </section> */}
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {country === "in" ? (
          <LazyFooter buildPayUrl={buildPayUrl} />
        ) : (
          <LazyFooter buildPayUrl={buildPayUrl} country={"UAE"} />
        )}
      </Suspense>
    </>
  );
};

export default Hero;
