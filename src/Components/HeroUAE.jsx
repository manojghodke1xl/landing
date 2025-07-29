import React, { useState, useEffect, Suspense } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import WhyAttend from "./WhyAttend";
import Change from "./Change";
import { getSeoMeta } from "../utils/getSeoMeta";
import Seo from "../Seo";

const FooterUAE = React.lazy(() => import("./FooterUAE"));

const HeroUAE = () => {
  const [isVisible, setIsVisible] = useState(false);
  const seo = getSeoMeta("https://books.1xl.com/dreams-to-reality/ae");

  const successUrl = window.location.origin + "/success";
  const failureUrl = window.location.origin + "/failure";

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

  const initialTime = 15 * 60;
  const [remainingTime, setRemainingTime] = useState(initialTime);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          // Stop the timer when it reaches zero
          clearInterval(timer);
          return prevTime;
        }
      });
    }, 1000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Get minutes and seconds for display
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  const navigate = useNavigate();
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const ToCheckout = (productId) => {
    const successUrl = window.location.origin + "/success";

    const failureUrl = window.location.origin + "/failure";
    const curr = "AED";
    const anchor = document.createElement("a");
    anchor.href = `/pay/?type=PRODUCT&curr=${curr}&productIds=${productId}&successUrl=${successUrl}&failureUrl=${failureUrl}`;
    //anchor.target = "_blank";
    anchor.click();
  };
  return ( 
    <>
      {seo && <Seo {...seo} />}
      <div className="w-full h-full px-[10px] md:px-10 ">
        <nav className="bg-gray-800 p-4">
          <div className="flex items-center sm:justify-between justify-center">
            <div className="w-[233px] h-[70px] bg-gray-500 text-white flex items-center justify-center text-sm font-bold">
              <Link to="/">
                <img
                  src="/Images/logo-white.webp"
                  className="w-42 h-auto mt-5"
                  alt="Dreams To Reality Logo_Horizontal"
                  fetchpriority="high"
                  decoding="async"
                />
              </Link>
            </div>
          </div>
        </nav>

        <div className="flex justify-center">
          <section className="xl:w-[80%] flex flex-col xl:flex-row gap-5 mt-15 mb-10">
            <div className="w-full flex flex-col items-center lg:flex-col-reverse xl:w-[65%]">
              <div className="w-[90%] flex flex-col items-center justify-center mx-[10px] gap-4 lg:mx-[25px] mb-10 lg:mb-0">
                {/* Title Section inside left */}
                <div className="flex flex-col items-center text-center">
                  <h2 className="w-full pt-[0px] px-2 sm:px-10 md:px-18 text-[27px] xl:text-[40px] font-bold text-left">
                    Check Out the{" "}
                    <b className="text-custom-amber">
                      Ultimate Success Blueprint
                    </b>{" "}
                    of Two Young Siblings Who Took on Bold Challenges and
                    Inspired Thousands!
                  </h2>

                  {/* <div className="flex justify-center py-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="137"
                      height="14"
                      viewBox="0 0 137 14"
                      fill="none"
                    >
                      <path
                        d="M0.76312 11.4852C24.298 5.0368 84.1832 -3.98656 135.445 11.5072"
                        stroke="#FFC621"
                        strokeWidth="4"
                      ></path>
                    </svg>
                  </div> */}
                </div>
                <WhyAttend />
                <div className="flex flex-col lg:flex-row gap-4 justify-center">
                  <a
                    href={`/pay/?type=PRODUCT&curr=INR&productIds=67de9c03770d7aa5b35b4712&successUrl=${successUrl}&failureUrl=${failureUrl}&from=dreams-to-reality/ae`}
                    //onClick={() => ToCheckout("67de9c03770d7aa5b35b4712")}
                    className="w-full lg:w-auto px-6 py-4 rounded-full bg-btn-primary text-white font-bold"
                  >
                    Grab Your Hardcover
                  </a>
                  <a
                    href={`/pay/?type=PRODUCT&curr=INR&productIds=67dea774770d7aa5b35b4db2&successUrl=${successUrl}&failureUrl=${failureUrl}&from=dreams-to-reality/ae`}
                    // onClick={() => ToCheckout("67dea774770d7aa5b35b4db2")}
                    className="w-full lg:w-auto px-6 py-4 rounded-full bg-btn-primary text-white font-bold"
                  >
                    Grab Your E-Book
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center mt-4 sm:mt-7 xl:mt-0 xl:w-[35%]">
              <div className="w-full flex justify-center relative px-5">
                <div>
                  <div className="w-80 h-80 rounded-full bg-secondary opacity-90">
                    <div className="z-40">
                      {" "}
                      <img src="/Images/Hero-image.webp" loading="lazy"></img>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[90%] h-fit mx-[25px] px-[20px]  py-[26px] rounded-2xl bg-secondary text-center mt-14 z-50">
                <h4 className="text-2xl xl:text-3xl font-bold bg-secondary">
                  Meet Two Young Visionaries
                </h4>
                <h5 className="mt-1 text-[20px] font-semibold">
                  Discover the incredible story of two young prodigies.
                </h5>
                <div className=" h-32 md:h-28 mx-[25px] mt-5 px-[20px] py-[10px] rounded-2xl bg-gray text-center ">
                  <div className="w-full flex justify-center">
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
                  <h5 className="text-[15px] sm:text-xl mt-2">
                    Proving that success is not limited by age.
                  </h5>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Change />

        <section className="py-14 px-[20px]">
          <div className="w-full flex flex-col gap-y-4 justify-center pb-8 items-center">
            <h2 className="w-full text-center text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold">
              <b className="text-custom-amber">
                Dreams to Reality is a testament to how purpose, not age,
                creates impact.
              </b>
            </h2>
            {/* <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="137"
                height="14"
                viewBox="0 0 137 14"
                fill="none"
              >
                <path
                  d="M0.76312 11.4852C24.298 5.0368 84.1832 -3.98656 135.445 11.5072"
                  stroke="#FFC621"
                  strokeWidth="4"
                ></path>
              </svg>
            </div> */}
          </div>

          <div className="flex flex-col justify-center items-center mb-5">
            <p className="max-w-[1200px] text-center text-[20px] sm:text-xl font-medium tracking-wide">
              This is the true story of two young siblings and child prodigies
              who transformed their learnings into a mission of giving back,
              reaching over 50,000 people across India through 120+ events in
              just 50 days. Their journey wasn’t just about personal growth; it
              was rooted in service, contribution, and the desire to spark
              possibility in every life they touched.
            </p>
          </div>

          <div className="myths-list flex flex-col gap-4 justify-center items-center">
            <h4 className="text-2xl font-semibold mt-2">
              Through their 50-day mission, they:
            </h4>
            <ul className="list-none p-0">
              <li className="flex items-center gap-3 mb-4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <circle cx="11" cy="11" r="11" fill="#25AB75"></circle>
                    <path
                      d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                      fill="white"
                    ></path>
                  </svg>
                </span>
                <span className="text-[18px] md:text-[20px] text-semibolds">
                  {" "}
                  Turned vision into impact - one day, one event at a time.
                </span>
              </li>
              <li className="flex items-center gap-3 mb-4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <circle cx="11" cy="11" r="11" fill="#25AB75"></circle>
                    <path
                      d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                      fill="white"
                    ></path>
                  </svg>
                </span>
                <span className="text-[18px] md:text-[20px] text-semibolds">
                  {" "}
                  Faced doubts, setbacks, and uncertainty with resilience.
                </span>
              </li>
              <li className="flex items-center gap-3 mb-4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <circle cx="11" cy="11" r="11" fill="#25AB75"></circle>
                    <path
                      d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                      fill="white"
                    ></path>
                  </svg>
                </span>
                <span className="text-[18px] md:text-[20px] text-semibolds">
                  Inspired 50,000+ people by showing what’s possible with
                  clarity and courage.
                </span>
              </li>
              <li className="flex items-center gap-3 mb-4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <circle cx="11" cy="11" r="11" fill="#25AB75"></circle>
                    <path
                      d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                      fill="white"
                    ></path>
                  </svg>
                </span>
                <span className="text-[18px] md:text-[20px] text-semibolds">
                  Focused on growth, learning, and service, rather than just
                  goals.
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-center text-[20px] sm:text-xl font-medium tracking-wide mt-4">
              This book reminds us that you don’t have to be extraordinary to
              create change; you just have to be intentional.
            </p>
            <h4 className="text-center pt-4 text-[20px] sm:text-[20px] md:text-[20px] lg:text-[30px] font-bold tracking-wide ">
              It’s not a story of luck; it’s a journey of choice, discipline,
              and heart.
            </h4>
          </div>
        </section>

        {/* <section className="bg-secondary rounded-lg pt-[40px] pb-[20px] px-[10px] relative">

          <div className="w-full flex flex-col justify-center mb-10 gap-y-2 items-center">
            <h2 className="w-full text-center text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold">
              <b className="text-custom-amber">
                {" "}
                We May Not Have Superpowers, But Our Journey Was Pure Magic
              </b>
            </h2>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="137"
                height="14"
                viewBox="0 0 137 14"
                fill="none"
              >
                <path
                  d="M0.76312 11.4852C24.298 5.0368 84.1832 -3.98656 135.445 11.5072"
                  stroke="#FFC621"
                  strokeWidth="4"
                ></path>
              </svg>
            </div>
          </div>
          <div className="w-full flex  flex-col justify-center items-center gap-3 px-2">
            <div className="max-w-[1200px] pb-[20px] flex flex-col items-center justify-center">
              <ul className="list-none p-0">
                <li className="flex items-center gap-3 mb-4">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <circle cx="11" cy="11" r="11" fill="#25AB75"></circle>
                      <path d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z" fill="white"></path>
                    </svg>
                  </span>
                  <span className="text-[18px] md:text-[20px] text-semibold text-justify">
                    {" "}
                    We’re Jainam and Jivika, siblings who believe that bold dreams shouldn’t wait for permission. We began not with experience, but with intent, courage, and a deep desire to make a difference.
                  </span>
                </li>
                <li className="flex items-center gap-3 mb-4">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <circle cx="11" cy="11" r="11" fill="#25AB75"></circle>
                      <path d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z" fill="white"></path>
                    </svg>
                  </span>
                  <span className="text-[18px] md:text-[20px] text-semibold text-justify">
                    {" "}
                    We didn’t wait for perfect plans or the "right age." We started with what we had - ideas, values, and beliefs. From there, one step at a time, we created lasting change.
                  </span>
                </li>
                <li className="flex items-center gap-3 mb-4">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <circle cx="11" cy="11" r="11" fill="#25AB75"></circle>
                      <path d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z" fill="white"></path>
                    </svg>
                  </span>
                  <span className="text-[18px] md:text-[20px] text-semibold text-justify">
                    From 2019 to 2025, our focus wasn’t on ticking boxes - it was on touching lives. No shortcuts, no formulas. Just consistent effort, daily learning, and purpose-driven action that made each day count.
                  </span>
                </li>
              </ul>
              <h4 className="pt-[20px] font-semibold sm:w-[70%] text-[32px] text-center">
                Projects with Purpose  - Built to Serve, Not Just Scale
              </h4>
              <p className="text-[18px] text-center">Every project we launched started with a question: “How can we help?” From education and wellness to tech and youth leadership, each idea was born to serve real needs.</p>
              <p className="text-[18px] text-center">Some of our most impactful platforms include:</p>
            </div>
            <div className="w-full flex flex-col justify-between lg:px-8 xl:px-10 2xl:px-20">
              <div className="flex lg:flex-row flex-col lg:gap-5">
                <div className="py-6 rounded-xl bg-black w-full lg:w-[48%] flex gap-5 mb-7">
                  <h2 className="text-xl font-extrabold bg-custom-amber text-black flex justify-center items-center rounded-r-lg min-w-14 h-10">
                    01
                  </h2>
                  <p className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[18px] tracking-wide">
                    <img src={JJFIndia} height={80} width={200} alt="JJFIndia.com" />
                  </p>
                </div>
                <div className="py-6 rounded-xl bg-black w-full lg:w-[48%] flex gap-5 mb-7">
                  <h2 className="text-xl font-extrabold bg-custom-amber text-black flex justify-center items-center rounded-r-lg min-w-14 h-10">
                    02
                  </h2>
                  <p className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[18px] tracking-wide">
                    <img src={PlegeOrgans} height={80} width={200} alt="PlegeOrgans.com" />
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col lg:gap-5">
                <div className="py-6 rounded-xl bg-black w-full lg:w-[48%] flex gap-5 mb-7">
                  <h2 className="text-xl font-extrabold bg-custom-amber text-black flex justify-center items-center rounded-r-lg min-w-14 h-10">
                    03
                  </h2>
                  <p className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[18px] tracking-wide">
                    <img src={ReformArmy} height={80} width={250} alt="ReformArmy.com" />
                  </p>
                </div>
                <div className="pr-4 py-6 rounded-xl bg-black w-full lg:w-[48%] flex gap-5 mb-7">
                  <h2 className="text-xl font-extrabold bg-custom-amber text-black flex justify-center items-center rounded-r-lg min-w-14 h-10">
                    04
                  </h2>
                  <p className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[18px] tracking-wide">
                    <img src={MyFoodChecker} height={80} width={200} alt="MyFoodChecker.com" />
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col lg:gap-5">
                <div className="py-6 rounded-xl bg-black w-full lg:w-[48%] flex gap-5 mb-7">
                  <h2 className="text-xl font-extrabold bg-custom-amber text-black flex justify-center items-center rounded-r-lg min-w-14 h-10">
                    05
                  </h2>
                  <p className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[18px] tracking-wide">
                    <img src={LeadsMagix} height={80} style={{height:'80px'}} alt="LeadsMagix.com" />
                  </p>
                </div>
                <div className="pr-4 py-6 rounded-xl bg-black w-full lg:w-[48%] flex gap-5 mb-7">
                  <h2 className="text-xl font-extrabold bg-custom-amber text-black flex justify-center items-center rounded-r-lg min-w-14 h-10">
                    06
                  </h2>
                  <p className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[18px] tracking-wide">
                    <img src={YoungJains} height={80} style={{height:'80px'}} alt="YoungJains.com" />
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col lg:gap-5">
                <div className="py-6 rounded-xl bg-black w-full lg:w-[48%] flex gap-5 mb-7">
                  <h2 className="text-xl font-extrabold bg-custom-amber text-black flex justify-center items-center rounded-r-lg min-w-14 h-10">
                    07
                  </h2>
                  <p className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[18px] tracking-wide">
                    <img src={LifeSaverArmy} height={80} style={{height:'80px'}} alt="LifeSaverArmy.com" />
                  </p>
                </div>
                <div className="pr-4 py-6 rounded-xl bg-black w-full lg:w-[48%] flex gap-5 mb-7">
                  <h2 className="text-xl font-extrabold bg-custom-amber text-black flex justify-center items-center rounded-r-lg min-w-14 h-10">
                    08
                  </h2>
                  <p className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[18px] tracking-wide">
                    <img src={AkshayNetra} height={80} style={{height:'80px'}} alt="AkshayNetra.com" />
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col lg:gap-5">
                <div className="py-6 rounded-xl bg-black w-full lg:w-[48%] flex gap-5 mb-7">
                  <h2 className="text-xl font-extrabold bg-custom-amber text-black flex justify-center items-center rounded-r-lg min-w-14 h-10">
                    09
                  </h2>
                  <p className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[18px] tracking-wide">
                    <img src={MindUnload} height={80} style={{height:'80px'}} alt="MindUnload.com" />
                  </p>
                </div>
                <div className="pr-4 py-6 rounded-xl bg-black w-full lg:w-[48%] flex gap-5 mb-7">
                  <h2 className="text-xl font-extrabold bg-custom-amber text-black flex justify-center items-center rounded-r-lg min-w-14 h-10">
                    10
                  </h2>
                  <p className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[18px] tracking-wide">
                    <img src={XL1} height={80} style={{height:'80px'}} alt="1XL.com" />
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col lg:gap-5">
                <div className="pr-4 py-6 rounded-xl bg-black w-full lg:w-[48%] flex gap-5 mb-7">
                  <h2 className="text-xl font-extrabold bg-custom-amber text-black flex justify-center items-center rounded-r-lg min-w-14 h-10">
                    11
                  </h2>
                  <p className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[18px] tracking-wide">
                    <img src={SevakArmy} height={80} style={{height:'80px'}} alt="SevakArmy.com" />
                  </p>
                </div>
                <div className="pr-4 py-6 rounded-xl bg-black w-full lg:w-[48%] flex gap-5 mb-7">
                  <h2 className="text-xl font-extrabold bg-custom-amber text-black flex justify-center items-center rounded-r-lg min-w-14 h-10">
                    12
                  </h2>
                  <p className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[18px] tracking-wide">
                    <img src={JJFFuntime} height={80} style={{height:'80px'}} alt="JJFFuntime.com" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="py-[40px]  bg-secondary rounded-xl px-[5px]">
          <div className="mb-14 flex flex-col justify-center items-center gap-y-4">
            <h2 className="w-full text-center text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold">
              <b className="text-custom-amber">
                Every Year, A New Leap – Our Growth in Motion
              </b>
            </h2>
            {/* <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="137"
                height="14"
                viewBox="0 0 137 14"
                fill="none"
              >
                <path
                  d="M0.76312 11.4852C24.298 5.0368 84.1832 -3.98656 135.445 11.5072"
                  stroke="#FFC621"
                  strokeWidth="4"
                ></path>
              </svg>
            </div> */}
          </div>
          <section className="w-full flex flex-col justify-center gap-2  lg:px-10 xl:px-20 gap-y-6">
            <div className="flex flex-wrap justify-center w-full gap-4">
              <div className="bg-dark-gray rounded-xl border border-white w-[97%] lg:w-[48%] 2xl:w-[23%] py-8 flex  p-3 flex-col">
                <div className="w-full">
                  <h2 className="font-semibold text-[16px] text-center"></h2>
                </div>
                <div className="w-full p-2 bg-custom-amber text-black my-3 rounded-xl">
                  <p className="font-semibold text-xl text-black text-center">
                    <b className="text-black">2019</b>
                  </p>
                </div>
                <div className="font-medium text-center">
                  <p className="mb-2 mt-3 text-white">
                    Launched JJFuntime, a YouTube channel at ages 7 and 4,
                    igniting curiosity through fun, science-led experiments for
                    children around the world.
                  </p>
                </div>
              </div>
              <div className="bg-dark-gray rounded-xl  border border-white w-[97%] lg:w-[48%] 2xl:w-[23%] py-8 flex  p-3 flex-col">
                <div className="w-full">
                  <h2 className="font-semibold text-[16px] text-center"></h2>
                </div>
                <div className="w-full p-2 bg-custom-amber text-black my-3 rounded-xl">
                  <p className="font-semibold text-xl text-black text-center">
                    <b className="text-black">2020</b>
                  </p>
                </div>
                <h2 className="font-medium text-center">
                  <p className="mb-2 mt-3">
                    Learned a full religious book in just 50 days, in Prakrit,
                    to challenge our minds and connect with our roots, showing
                    that age doesn’t define discipline.
                  </p>
                </h2>
              </div>
              <div className="bg-dark-gray rounded-xl  border border-white w-[97%] lg:w-[48%] 2xl:w-[23%] py-8 flex  p-3 flex-col">
                <div className="w-full">
                  <h2 className="font-semibold text-[16px] text-center"></h2>
                </div>
                <div className="w-full p-2 bg-custom-amber text-black my-3 rounded-xl">
                  <p className="font-semibold text-xl text-black text-center">
                    <b className="text-black">2021</b>
                  </p>
                </div>
                <h2 className="font-medium text-center">
                  <p className="mb-2 mt-3">
                    Attended 50 networking events in 50 days. We listened,
                    learned, and asked questions, gaining clarity and confidence
                    from some of India’s most inspiring voices.
                  </p>
                </h2>
              </div>
              <div className="bg-dark-gray rounded-xl  border border-white w-[97%] lg:w-[48%] 2xl:w-[23%] py-8 flex p-3 flex-col">
                <div className="w-full">
                  <h2 className="font-semibold text-[16px] text-center"></h2>
                </div>
                <div className="w-full p-2 bg-custom-amber text-black my-3 rounded-xl">
                  <p className="font-semibold text-xl text-black text-center">
                    <b className="text-black">2022</b>
                  </p>
                </div>
                <h2 className="font-medium text-center">
                  <p className="mb-2 mt-3">
                    Completed 50 books in 50 days. From leadership to mindset,
                    every page taught us that knowledge becomes power when
                    paired with action.
                  </p>
                </h2>
              </div>
              <div className="bg-dark-gray rounded-xl  border border-white w-[97%] lg:w-[48%] 2xl:w-[23%] py-8 flex  p-3 flex-col">
                <div className="w-full">
                  <h2 className="font-semibold text-[16px] text-center"></h2>
                </div>
                <div className="w-full p-2 bg-custom-amber text-black my-3 rounded-xl">
                  <p className="font-semibold text-xl text-black text-center">
                    <b className="text-black">2023</b>
                  </p>
                </div>
                <h2 className="font-medium text-center">
                  <p className="mb-2 mt-3">
                    Learned 50 new skills in 50 days, from communication and
                    growth to discipline and time management. It was a year of
                    application, not just accumulation.
                  </p>
                </h2>
              </div>
              <div className="bg-dark-gray rounded-xl  border border-white w-[97%] lg:w-[48%] 2xl:w-[23%] py-8 flex  p-3 flex-col">
                <div className="w-full">
                  <h2 className="font-semibold text-[16px] text-center"></h2>
                </div>
                <div className="w-full p-2 bg-custom-amber text-black my-3 rounded-xl">
                  <p className="font-semibold text-xl text-black text-center">
                    <b className="text-black">2024</b>
                  </p>
                </div>
                <h2 className="font-medium text-center">
                  <p className="mb-2 mt-3">
                    Our boldest leap - Mission50. We hosted 120+ events in 50
                    days across India, reaching over 50,000 people through free,
                    high-energy sessions in schools, NGOs, and colleges.
                  </p>
                </h2>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center pb-[10px] mt-3">
              <div className="w-fit p-2 px-10 sm:px-20 bg-custom-amber text-black my-3 rounded-xl">
                <p className="font-semibold text-xl text-black text-center">
                  <b className="text-black">2025</b>
                </p>
              </div>
              <h2 className="text-center text-2xl font-semibold mb-3">
                A New Chapter Begins.
              </h2>
              <p className="w-[90%] lg:w-[70%] text-xl tracking-wide text-center">
                We’re taking everything we’ve learned and scaling it into
                something bigger - tools, blueprints, and guided missions to
                help others ignite their own journeys. What’s coming next? Let’s
                just say… It’s only the beginning.
              </p>
            </div>
          </section>
        </section>

        <div className="bg-black rounded-lg pt-[40px]">
          <section>
            <h2 className="w-full text-center text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold">
              <b className="text-custom-amber">
                Mission50 – Our Boldest Leap Yet
              </b>
            </h2>
            {/* <div className="flex justify-center py-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="137"
                height="14"
                viewBox="0 0 137 14"
                fill="none"
              >
                <path
                  d="M0.76312 11.4852C24.298 5.0368 84.1832 -3.98656 135.445 11.5072"
                  stroke="#FFC621"
                  strokeWidth="4"
                ></path>
              </svg>
            </div> */}

            <div className="flex justify-center">
              <section className="2xl:w-[80%] flex flex-col lg:flex-row gap-5 mt-10 mb-10">
                <div className="w-full lg-[w-47%]">
                  <div className="w-[90%] flex flex-col items-start  mb-5 lg:mb-10 mx-[15px] mt-0">
                    <div className="w-full flex flex-col justify-center items-center gap-y-2">
                      <p className="w-[90%] text-justify text-[20px] sm:text-[20px] md:text-[20px] font-medium">
                        We wanted to test everything we’d learned. So we set out
                        on Mission50 in 2024, a 50-day tour across India with
                        120+ free events and a goal to reach 50,000 people.
                      </p>
                      <p className="w-[90%] text-justify text-[20px] sm:text-[20px] md:text-[20px] font-medium">
                        It wasn’t a campaign. It was a commitment.
                      </p>
                      <p className="w-[90%] text-justify text-[20px] sm:text-[20px] md:text-[20px] font-medium">
                        With our mom on the road and our dad cheering us on from
                        afar, we ran this mission ourselves, planning,
                        preparing, speaking, and sometimes just showing up even
                        when we were exhausted.
                      </p>
                      <p className="w-[90%] text-justify text-[20px] sm:text-[20px] md:text-[20px] font-medium">
                        We documented it all on JJMission Diary, a space where
                        we share personal reflections, experiments, life hacks,
                        and everything we learned in real time.
                      </p>
                    </div>
                  </div>

                  {/*  */}
                </div>
                <div className="w-full flex justify-center flex-wrap">
                  <img
                    src="/Images/mission-50.webp"
                    className="w-full max-w-[600px] h-auto object-contain"
                    alt=""
                    loading="lazy"
                  />
                </div>
              </section>
            </div>
          </section>

          <section>
            <h2 className="w-full text-center text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold">
              <b className="text-custom-amber">The Road Wasn’t Easy</b>
            </h2>
            {/* <div className="flex justify-center py-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="137"
                height="14"
                viewBox="0 0 137 14"
                fill="none"
              >
                <path
                  d="M0.76312 11.4852C24.298 5.0368 84.1832 -3.98656 135.445 11.5072"
                  stroke="#FFC621"
                  strokeWidth="4"
                ></path>
              </svg>
            </div> */}

            <div className="flex justify-center">
              <section className="2xl:w-[80%] flex flex-col lg:flex-row gap-5 mt-10 mb-10">
                <div className="w-full flex justify-center flex-wrap">
                  <img
                    src="/Images/RoadWasntEasy.webp"
                    className="w-full max-w-[600px] h-auto object-contain"
                    alt="The Road Wasn’t Easy"
                    loading="lazy"
                  />
                </div>
                <div className="w-full items-center lg-[w-47%]">
                  <div className="w-[90%] flex flex-col items-start mb-10 mx-[25px] mt-0">
                    <div className="w-full flex flex-col justify-center items-center gap-y-2">
                      <p className="w-[90%] text-justify text-[20px] sm:text-[20px] md:text-[20px] font-medium">
                        We faced illnesses. Language barriers. Travel fatigue.
                        Sleepless nights.
                      </p>
                      <p className="w-[90%] text-justify text-[20px] sm:text-[20px] md:text-[20px] font-medium">
                        But we learned that challenges aren’t setbacks, they’re
                        reminders that we’re doing something real.
                      </p>
                      <p className="w-[90%] text-justify text-[20px] sm:text-[20px] md:text-[20px] font-medium">
                        Every struggle added depth. Every obstacle made the
                        mission matter more.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>

          <section>
            <h2 className="w-full text-center text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold">
              <b className="text-custom-amber">
                Team Dreams to Reality – The Real Heroes
              </b>
            </h2>
            {/* <div className="flex justify-center py-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="137"
                height="14"
                viewBox="0 0 137 14"
                fill="none"
              >
                <path
                  d="M0.76312 11.4852C24.298 5.0368 84.1832 -3.98656 135.445 11.5072"
                  stroke="#FFC621"
                  strokeWidth="4"
                ></path>
              </svg>
            </div> */}

            <div className="flex justify-center">
              <section className="2xl:w-[80%] flex flex-col lg:flex-row gap-5 mt-10 mb-10">
                <div className="w-full items-center lg-[w-47%]">
                  <div className="w-[90%] flex flex-col items-start mb-10 mx-[25px] mt-0">
                    <div className="w-full flex flex-col justify-center items-center gap-y-2">
                      <p className="w-[90%] text-justify text-[20px] sm:text-[20px] md:text-[20px] font-medium">
                        We couldn’t have done it alone. This was a team journey.
                      </p>
                      <p className="w-[90%] text-justify text-[20px] sm:text-[20px] md:text-[20px] font-medium">
                        Our mom was our co-creator, companion, and motivator on
                        the road.
                      </p>
                      <p className="w-[90%] text-justify text-[20px] sm:text-[20px] md:text-[20px] font-medium">
                        Our dad kept us grounded from miles away.
                      </p>
                      <p className="w-[90%] text-justify text-[20px] sm:text-[20px] md:text-[20px] font-medium">
                        It takes a village, and we’re proud of ours.
                      </p>
                    </div>
                  </div>

                  {/*  */}
                </div>
                <div className="w-full flex justify-center flex-wrap">
                  <img
                    src="/Images/team.webp"
                    className="w-full max-w-[600px] h-auto object-contain"
                    alt="Team Dreams to Reality – The Real Heroes"
                    loading="lazy"
                  />
                </div>
              </section>
            </div>
          </section>

          <section>
            <h2 className="w-full text-center text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold">
              <b className="text-custom-amber">What We Learned</b>
            </h2>
            {/* <div className="flex justify-center py-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="137"
                height="14"
                viewBox="0 0 137 14"
                fill="none"
              >
                <path
                  d="M0.76312 11.4852C24.298 5.0368 84.1832 -3.98656 135.445 11.5072"
                  stroke="#FFC621"
                  strokeWidth="4"
                ></path>
              </svg>
            </div> */}

            <div className="flex justify-center">
              <section className="2xl:w-[80%] flex flex-col lg:flex-row gap-5 mt-10 mb-10">
                <div className="w-full flex justify-center flex-wrap">
                  <img
                    src="/Images/what-learned.webp"
                    className="w-full max-w-[600px] h-auto object-contain"
                    alt="What We Learned"
                    loading="lazy"
                  />
                </div>
                <div className="w-full items-center lg-[w-47%]">
                  <div className="2xl:w-[90%] flex flex-col items-start mb-10 mx-[25px] mt-0">
                    <div className="w-full flex flex-col justify-center items-center gap-y-2">
                      <p className="w-[90%] text-justify text-[20px] sm:text-[20px] md:text-[20px] font-medium">
                        <strong>Age is irrelevant.</strong> We started at 10. We
                        weren’t waiting for permission; we gave it to ourselves.
                      </p>
                      <p className="w-[90%] text-justify text-[20px] sm:text-[20px] md:text-[20px] font-medium">
                        <strong>Giving creates growth.</strong> Every time we
                        shared our ideas, our time, or our voice, we received
                        something bigger: support, energy, and a deeper meaning.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>

          <section>
            <h2 className="w-full text-center text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold">
              <b className="text-custom-amber">
                The Next Chapter: Dreams to Reality
              </b>
            </h2>
            {/* <div className="flex justify-center py-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="137"
                height="14"
                viewBox="0 0 137 14"
                fill="none"
              >
                <path
                  d="M0.76312 11.4852C24.298 5.0368 84.1832 -3.98656 135.445 11.5072"
                  stroke="#FFC621"
                  strokeWidth="4"
                ></path>
              </svg>
            </div> */}

            <div className="flex justify-center">
              <section className="2xl:w-[80%] flex flex-col lg:flex-row gap-5 mt-10 mb-10">
                <div className="w-full items-center lg-[w-47%]">
                  <div className="w-[90%] flex flex-col items-start mb-10 mx-[25px] mt-0">
                    <div className="w-full flex flex-col justify-center items-center gap-y-2">
                      <p className="w-[90%] text-justify text-[20px] sm:text-[20px] md:text-[20px] font-medium">
                        Our latest initiative, Dreams to Reality, is about
                        sharing the blueprint of our journey so others can start
                        their own.
                      </p>
                      <p className="w-[90%] text-justify text-[20px] sm:text-[20px] md:text-[20px] font-medium">
                        It's not about being fearless. It’s about showing up
                        even when you’re scared.
                      </p>
                      <p className="w-[90%] text-justify text-[20px] sm:text-[20px] md:text-[20px] font-medium">
                        It’s for those who are tired of waiting and ready to
                        take one small step toward their dreams.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center flex-wrap">
                  <img
                    src="/Images/TheNextChapter.webp"
                    className="w-full max-w-[600px] h-auto object-contain"
                    alt="The Next Chapter: Dreams to Reality"
                    loading="lazy"
                  />
                </div>
              </section>
            </div>
          </section>
        </div>

        {/* <section className="bg-secondary rounded-xl py-[25px] md:py-[40px]">
          <h2 className="w-full px-10 md:px-18 text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold text-center">
            <b className="text-custom-amber">
              Real Reactions, True Impact
              <div className="flex justify-center py-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="137"
                  height="14"
                  viewBox="0 0 137 14"
                  fill="none"
                >
                  <path
                    d="M0.76312 11.4852C24.298 5.0368 84.1832 -3.98656 135.445 11.5072"
                    stroke="#FFC621"
                    strokeWidth="4"
                  ></path>
                </svg>
              </div>
            </b>
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-center gap-3 mt-10 px-4 sm:px-10 ">
            <div
              className="w-full rounded-xl bg-dark-gray"
              style={{ overflow: "hidden" }}
            >
              <iframe
                width="100%"
                height="415"
                src="https://www.youtube.com/embed/0t5ORABCDuk?autoplay=1&mute=1&controls=0&modestbranding=1&iv_load_policy=3&playsinline=1"
                title="YouTube video player"
                style={{ borderRadius: "inherit" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-full rounded-xl" style={{ overflow: "hidden" }}>
              <iframe
                width="100%"
                height="415"
                src="https://www.youtube.com/embed/b_YNzu0P5F8?autoplay=1&mute=1&controls=0&modestbranding=1&iv_load_policy=3&playsinline=1"
                title="YouTube video player"
                style={{ borderRadius: "inherit" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-full rounded-xl" style={{ overflow: "hidden" }}>
              <iframe
                width="100%"
                height="415"
                src="https://www.youtube.com/embed/hrGx4Fo87Ys?autoplay=1&mute=1&controls=0&modestbranding=1&iv_load_policy=3&playsinline=1"
                title="YouTube video player"
                style={{ borderRadius: "inherit" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-full rounded-xl" style={{ overflow: "hidden" }}>
              <iframe
                width="100%"
                height="415"
                src="https://www.youtube.com/embed/5q-dYi3mFWE?autoplay=1&mute=1&controls=0&modestbranding=1&iv_load_policy=3&playsinline=1"
                title="YouTube video player"
                style={{ borderRadius: "inherit" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section> */}

        {/* <section className="bg-black rounded-xl pt-[20px]">
          <div className="flex flex-col justify-center items-center pb-[40px] mt-3">
            <div className="w-full mx-2 sm:mx-0 sm:w-[90%] lg:w-[70%] 2xl:w-[50%] flex flex-col justify-center items-center">
              <h2 className="w-full text-center text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold">
                <b className="text-custom-amber">Our Story Isn’t Done</b>
              </h2>
             <div className="flex justify-center py-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="137"
                  height="14"
                  viewBox="0 0 137 14"
                  fill="none"
                >
                  <path
                    d="M0.76312 11.4852C24.298 5.0368 84.1832 -3.98656 135.445 11.5072"
                    stroke="#FFC621"
                    strokeWidth="4"
                  ></path>
                </svg>
              </div> 
              <p className="mb-2 text-lg font-medium text-center pt-4">
                It’s just proof that when you move with intention, the world
                moves with you.
              </p>
              <p className="mb-2 text-lg font-medium text-center">
                We may not have superpowers,
              </p>
              <p className="text-lg font-medium text-center mb-4">
                But this journey? It’s been nothing short of magical.
              </p>
              <div className="max-w-full flex flex-col xl:flex-row gap-6 xl:gap-6 justify-center items-center xl:w-[90%] 2xl:w-[80%]">
                <a
                  href={`/pay/?type=PRODUCT&curr=INR&productIds=67de9c03770d7aa5b35b4712&successUrl=${successUrl}&failureUrl=${failureUrl}&from=dreams-to-reality/ae`}
                  //onClick={() => ToCheckout("67de9c03770d7aa5b35b4712")}
                  className="text-white mb-3 text-1xl w-full lg:w-full  rounded-full py-4 px-10 lg:px-20 text-center font-bold bg-btn-primary hover:bg-btn-primary/90  shadow-btn-primary/100"
                >
                  Grab Your Hardcover
                </a>

                <a
                  href={`/pay/?type=PRODUCT&curr=INR&productIds=67dea774770d7aa5b35b4db2&successUrl=${successUrl}&failureUrl=${failureUrl}&from=dreams-to-reality/ae`}
                  //  onClick={() => ToCheckout("67dea774770d7aa5b35b4db2")}
                  className="text-white mb-3 text-1xl w-full lg:w-full  rounded-full py-4 px-10 lg:px-20 text-center font-bold bg-btn-primary hover:bg-btn-primary/90  shadow-btn-primary/100"
                >
                  Grab Your E-Book
                </a>
              </div>
            </div>
          </div>
        </section> */}

        <div className="bg-secondary">
          <h2 className="w-full py-[25px] md:py-[40px]  px-10 md:px-18  text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px]  font-bold text-center">
            <b className="text-custom-amber">
              Stories That Stay With Us
              {/* <div className="flex justify-center py-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="137"
                  height="14"
                  viewBox="0 0 137 14"
                  fill="none"
                >
                  <path
                    d="M0.76312 11.4852C24.298 5.0368 84.1832 -3.98656 135.445 11.5072"
                    stroke="#FFC621"
                    strokeWidth="4"
                  ></path>
                </svg>
              </div> */}
            </b>
          </h2>

          <div className="flex flex-col justify-center items-center">
            <p className="max-w-[1200px] text-center text-[20px] sm:text-[20px] md:text-[20px] lg:text-[24px] font-bold">
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
                <div className="w-[90%] flex flex-col items-cetner justify-center mb-10 mx-[25px] mt-0">
                  <div className="w-full flex flex-col justify-between lg:px-8 sm:px-10 2xl:px-20">
                    <div className="flex align-items-stretch lg:flex-row flex-col lg:gap-5">
                      <div className="mb-3 w-full bg-black/70 rounded-xl p-4 sm:px-6">
                        <div className="flex justify-start gap-5 pb-2">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                            >
                              <circle
                                cx="11"
                                cy="11"
                                r="11"
                                fill="#25AB75"
                              ></circle>
                              <path
                                d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                                fill="white"
                              ></path>
                            </svg>
                          </span>
                          <span className="text-[17px] md:text-[20px] tracking-wider">
                            <b>JJFuntime</b>
                          </span>
                        </div>
                        <p className="text-justify font-medium">
                          While the book captures our mindset, JJFuntime
                          captures the magic of curiosity. This is where science
                          becomes a playground where imagination leads the way,
                          and learning feels like fun. With 150k+ subscribers
                          and counting, this platform proves that big dreams can
                          start with small experiments.
                        </p>
                      </div>
                      <div className="mb-3 w-full bg-black/70 rounded-xl p-4 sm:px-6">
                        <div className="flex justify-start gap-5 pb-2">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                            >
                              <circle
                                cx="11"
                                cy="11"
                                r="11"
                                fill="#25AB75"
                              ></circle>
                              <path
                                d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                                fill="white"
                              ></path>
                            </svg>
                          </span>
                          <span className="text-[17px] md:text-[20px] tracking-wider">
                            <b>JJMission Diary</b>
                          </span>
                        </div>
                        <p className="text-justify font-medium">
                          This is the raw, real extension of our growth journey.
                          From late-night study hacks and day-to-day reflections
                          to lessons from our 50-day missions, JJMission Diary
                          documents the behind-the-scenes of turning dreams into
                          action. It’s not about being fearless; it’s about
                          showing up with purpose, even when it’s tough.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <section className="py-14 bg-black flex flex-col items-center rounded-xl relative">
          <div className="w-full flex flex-col justify-center pb-50 items-center gap-y-2 mb-4 relative">
            <h2 className="w-full text-center text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold">
              <b className="text-custom-amber">
                Dreams to Reality isn’t just a story; it’s an inspiration!
              </b>
            </h2>

            {/* <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="137"
                height="14"
                viewBox="0 0 137 14"
                fill="none"
              >
                <path
                  d="M0.76312 11.4852C24.298 5.0368 84.1832 -3.98656 135.445 11.5072"
                  stroke="#FFC621"
                  strokeWidth="4"
                ></path>
              </svg>
            </div> */}
          </div>

          <div className="flex justify-center ">
            <div className="max-w-[1600px] flex flex-col lg:flex-row lg:px-14 xl:px-20 gap-3 justify-center">
              <div className="w-full justify-center flex flex-col lg:w-[55%]">
                <div className="w-[90%] flex-col justify-center mx-[10px] lg:mx-[25px] mb-10 lg:mb-0">
                  <p className="text-justify text-xl mb-4">
                    And these platforms are how we keep that inspiration alive;
                    through action, creativity, and connection.
                  </p>
                  <h3 className="text-3xl font-semibold mb-4">
                    Be part of the next chapter.
                  </h3>
                  <p className="text-justify text-xl mb-4">
                    Because the real magic begins when you take the first step.
                  </p>

                  <div className="max-w-full flex flex-col xl:flex-row gap-6 xl:gap-6 justify-center items-center xl:w-[90%] 2xl:w-[80%]">
                    <a
                      href={`/pay/?type=PRODUCT&curr=INR&productIds=67de9c03770d7aa5b35b4712&successUrl=${successUrl}&failureUrl=${failureUrl}&from=dreams-to-reality/ae`}
                      //onClick={() => ToCheckout("67de9c03770d7aa5b35b4712")}
                      className="text-white mb-3 text-1xl w-full lg:w-full  rounded-full py-4 px-10 lg:px-15 text-center font-bold bg-btn-primary hover:bg-btn-primary/90  shadow-btn-primary/100"
                    >
                      Grab Your Hardcover
                    </a>

                    <a
                      href={`/pay/?type=PRODUCT&curr=INR&productIds=67dea774770d7aa5b35b4db2&successUrl=${successUrl}&failureUrl=${failureUrl}&from=dreams-to-reality/ae`}
                      // onClick={() => ToCheckout("67dea774770d7aa5b35b4db2")}
                      className="text-white mb-3 text-1xl w-full lg:w-full  rounded-full py-4 px-10 lg:px-15 text-center font-bold bg-btn-primary hover:bg-btn-primary/90  shadow-btn-primary/100"
                    >
                      Grab Your E-Book
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-[45%] flex justify-center items-center">
                <img
                  src="/Images/Inspiration.webp"
                  alt="Dreams to Reality isn’t just a story; it’s an inspiration!"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-7 right-7 animate-moveLeftRight"></div>
        </section>

        <section className="pt-[40px] bg-secondary rounded-xl px-3 md:px-[28px]">
          <div className="w-full flex flex-col items-center gap-y-2 justify-center">
            <h2 className="max-w-[1200px] px-10   md:px-18 text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold text-center ">
              <b className="text-custom-amber">
                We Turned Dreams into Reality by Breaking All the Rules!
              </b>
            </h2>
            {/* <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="137"
                height="14"
                viewBox="0 0 137 14"
                fill="none"
              >
                <path
                  d="M0.76312 11.4852C24.298 5.0368 84.1832 -3.98656 135.445 11.5072"
                  stroke="#FFC621"
                  strokeWidth="4"
                ></path>
              </svg>
            </div> */}

            <p className="max-w-[1200px] text-center  text-[20px]  sm:text-[20px] md:text-[20px] lg:text-[24px] font-bold">
              We never had a big network or formal training when we started.
              Even better, we didn’t rely on what most people consider essential
              for success. Our journey had:
            </p>

            <div className=" mx-auto mt-12 sm:py-[40px] sm:px-[50px] py-5 px-5 bg-black/70 rounded-xl shadow-xl sm:max-w-[80%] max-w-[100%]">
              <div className="flex flex-col 2xl:flex-row justify-center gap-12 text-center lg:text-left items-center">
                <div className="grid w-full text-left 2xl:w-2/3">
                  <p className="text-[20px] md:text-[24px] font-semibold mb-4">
                    We didn’t have shortcuts, fame, or a head start.
                  </p>

                  <div className="flex  justify-left gap-5 pb-4">
                    <span>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <circle cx="11" cy="11" r="11" fill="#25AB75"></circle>
                        <path
                          d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <p className="text-[18px] md:text-[20px] text-semibolds">
                      What we did have was stubborn determination,
                    </p>
                  </div>
                  <div className="flex  justify-left gap-5 pb-4">
                    <span>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <circle cx="11" cy="11" r="11" fill="#25AB75"></circle>
                        <path
                          d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <p className="text-[18px] md:text-[20px] text-semibolds">
                      A strong willingness to learn,
                    </p>
                  </div>
                  <div className="flex  justify-left gap-5 pb-4">
                    <span>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <circle cx="11" cy="11" r="11" fill="#25AB75"></circle>
                        <path
                          d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <p className="text-[18px] md:text-[20px] text-semibolds">
                      Consistency through every challenge,
                    </p>
                  </div>
                  <div className="flex  justify-left gap-5 pb-4">
                    <span>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <circle cx="11" cy="11" r="11" fill="#25AB75"></circle>
                        <path
                          d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <p className="text-[18px] md:text-[20px] text-semibolds">
                      And a habit of taking on one bold mission every year.
                    </p>
                  </div>
                </div>
                <div className="w-full 2xl:w-1/3">
                  <img
                    className="w-full"
                    src="/Images/breaking-all-rules.webp"
                    alt="We Turned Dreams into Reality by Breaking All the Rules!"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="max-w-[1200px] text-[18px]  md:text-[20px] justify-center text-semibolds w-auto mt-10 pb-[40px] px-[30px] rounded-xl shadow-xl gap-10">
              <p className="text-center mb-3 text-[20px]  sm:text-[20px] md:text-[20px] lg:text-[24px] text-semibolds">
                Sounds impossible, right? But here’s the truth:
              </p>
              <h2 className="w-full text-center text-[20px]  sm:text-[20px] md:text-[20px] font-semibold lg:text-[32px]">
                Success comes from actions, not circumstances.
              </h2>
            </div>
          </div>
        </section>

        <section className=" bg-black grid justify-center rounded-xl py-[40px] px-[20px] relative">
          <div className="w-full flex flex-col items-center gap-y-2 justify-center">
            <h2 className="max-w-[1200px] px-10   md:px-18 text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold text-center ">
              <b className="text-custom-amber">
                Our Approach to Growth Has Given Us More Freedom Than We Ever
                Imagined!
              </b>
            </h2>
            {/* <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="137"
                height="14"
                viewBox="0 0 137 14"
                fill="none"
              >
                <path
                  d="M0.76312 11.4852C24.298 5.0368 84.1832 -3.98656 135.445 11.5072"
                  stroke="#FFC621"
                  strokeWidth="4"
                ></path>
              </svg>
            </div> */}

            <div className=" mx-auto  mt-12 sm:py-[40px] sm:px-[50px] py-5 px-5 bg-secondary rounded-xl shadow-xl sm:max-w-[80%] max-w-[100%]">
              <div className="flex flex-col 2xl:flex-row justify-center gap-12 text-center lg:text-left items-center">
                <div className="grid w-full text-left 2xl:w-2/3">
                  <p className="text-[20px] md:text-[24px] font-semibold mb-4">
                    By following a structured system of 50-day challenges, we
                    were able to focus on what truly matters:
                  </p>

                  <div className="flex  justify-left gap-5 pb-4">
                    <span>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <circle cx="11" cy="11" r="11" fill="#25AB75"></circle>
                        <path
                          d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <p className="text-[18px] md:text-[20px] text-semibolds">
                      Taking on new challenges without hesitation.
                    </p>
                  </div>
                  <div className="flex  justify-left gap-5 pb-4">
                    <span>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <circle cx="11" cy="11" r="11" fill="#25AB75"></circle>
                        <path
                          d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <p className="text-[18px] md:text-[20px] text-semibolds">
                      Building confidence through real experiences.
                    </p>
                  </div>
                  <div className="flex  justify-left gap-5 pb-4">
                    <span>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <circle cx="11" cy="11" r="11" fill="#25AB75"></circle>
                        <path
                          d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <p className="text-[18px] md:text-[20px] text-semibolds">
                      Learning, growing, and inspiring others along the way.
                    </p>
                  </div>
                  <div className="flex  justify-left gap-5 pb-4">
                    <span>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <circle cx="11" cy="11" r="11" fill="#25AB75"></circle>
                        <path
                          d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <p className="text-[18px] md:text-[20px] text-semibolds">
                      Creating a life of impact by helping others achieve their
                      dreams.
                    </p>
                  </div>
                </div>
                <div className="w-full 2xl:w-1/3">
                  <img
                    className="w-full"
                    src="/Images/freedom.webp"
                    alt="Our Approach to Growth Has Given Us More Freedom Than We Ever Imagined!"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="max-w-[1200px] text-[18px]  md:text-[20px] justify-center text-semibolds w-auto mt-10 px-[30px] gap-10">
              <p className="text-center mb-3 text-[20px]  sm:text-[20px] md:text-[20px] lg:text-[24px] text-semibolds">
                Through this approach, we’ve realised that success isn’t just
                about achievements - it’s about freedom, growth, and making a
                difference.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary rounded-lg py-[40px]">
          <h2 className="w-full text-center text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold">
            <b className="text-custom-amber">
              What Will You Discover in This Book?
            </b>
          </h2>
          {/* <div className="flex justify-center py-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="137"
              height="14"
              viewBox="0 0 137 14"
              fill="none"
            >
              <path
                d="M0.76312 11.4852C24.298 5.0368 84.1832 -3.98656 135.445 11.5072"
                stroke="#FFC621"
                strokeWidth="4"
              ></path>
            </svg>
          </div> */}

          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center items-stretch flex-wrap gap-4 md:px-10 lg:px-14 xl:px-20 mb-8 mt-8">
            <div className="w-full bg-black/60 rounded-xl p-8 flex flex-col justify-center">
              <h2 className="text-center text-2xl font-semibold text-custom-amber">
                Real Stories of Action, Not Just Advice
              </h2>
              <p className="mt-4 tracking-wide text-center text-xl text-gray-300">
                Follow the journey of two young siblings who turned learning
                into impact, completing five 50-day missions that inspired
                50,000+ lives across India
              </p>
            </div>
            <div className="w-full bg-black/60 rounded-xl p-8 flex flex-col justify-center">
              <h2 className="text-center text-2xl font-semibold text-custom-amber">
                A Blueprint for Purpose-Driven Growth
              </h2>
              <p className="mt-4 tracking-wide text-center text-xl text-gray-300">
                Learn how they developed skills like discipline, time
                management, public speaking, and focus through hands-on
                experience, not just theory.
              </p>
            </div>
            <div className="w-full bg-black/60 rounded-xl p-8 flex flex-col justify-center">
              <h2 className="text-center text-2xl font-semibold text-custom-amber">
                How to Start Before You Feel Ready
              </h2>
              <p className="mt-4 tracking-wide text-center text-xl text-gray-300">
                See how Jainam and Jivika launched projects like JJFuntime, 1XL,
                Jainam Jivika Foundation, and more by starting small and showing
                up consistently.
              </p>
            </div>
            <div className="w-full bg-black/60 rounded-xl p-8 flex flex-col justify-center">
              <h2 className="text-center text-2xl font-semibold text-custom-amber">
                Lessons That Go Beyond Age or Background
              </h2>
              <p className="mt-4 tracking-wide text-center text-xl text-gray-300">
                Discover how their faith, family, and mindset helped them tackle
                challenges from public speaking fears to health setbacks and
                come out stronger every time.
              </p>
            </div>
            <div className="w-full bg-black/60 rounded-xl p-8 flex flex-col justify-center">
              <h2 className="text-center text-2xl font-semibold text-custom-amber">
                Tools to Turn Dreams Into Daily Practice
              </h2>
              <p className="mt-4 tracking-wide text-center text-xl text-gray-300">
                From reading 50 books in 50 days to mastering 50 skills, this
                book shares the exact missions and frameworks that helped them
                turn learning into leadership.
              </p>
            </div>
            <div className="w-full bg-black/60 rounded-xl p-8 flex flex-col justify-center">
              <h2 className="text-center text-2xl font-semibold text-custom-amber">
                A Deeper Meaning of Success
              </h2>
              <p className="mt-4 tracking-wide text-center text-xl text-gray-300">
                Explore how giving back, serving others, and creating impact
                became more powerful than any certificate or award.
              </p>
            </div>
          </div>
        </section>

        <section className="pt-[40px] bg-black grid justify-center rounded-xl px-[20px] relative">
          <div className="w-full flex flex-col items-center gap-y-2 justify-center">
            <h2 className="max-w-[1200px] px-10   md:px-18 text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold text-center ">
              <b className="text-custom-amber">
                Dreams to Reality is NOT Just Another Ordinary Book!
              </b>
            </h2>
            {/* <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="137"
                height="14"
                viewBox="0 0 137 14"
                fill="none"
              >
                <path
                  d="M0.76312 11.4852C24.298 5.0368 84.1832 -3.98656 135.445 11.5072"
                  stroke="#FFC621"
                  strokeWidth="4"
                ></path>
              </svg>
            </div> */}

            <div className=" mx-auto  mt-12 sm:py-[40px] sm:px-[50px] py-5 px-5 bg-secondary rounded-xl shadow-xl sm:max-w-[80%] max-w-[100%]">
              <div className="flex flex-col 2xl:flex-row justify-center gap-12 text-center lg:text-left items-center">
                <div className="grid w-full text-left 2xl:w-2/3">
                  <p className="text-[20px] md:text-[24px] font-medium mb-4">
                    Unlike typical motivational books, Dreams to Reality isn’t
                    filled with complex theories or impractical advice.
                  </p>
                  <h5 className="text-[20px] md:text-[28px] font-semibold mb-4">
                    Instead, this book offers:
                  </h5>

                  <div className="flex  justify-left gap-5 pb-4">
                    <span>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <circle cx="11" cy="11" r="11" fill="#25AB75"></circle>
                        <path
                          d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <p className="text-[18px] md:text-[20px] text-semibolds">
                      Actionable guidance to help you move forward.
                    </p>
                  </div>
                  <div className="flex  justify-left gap-5 pb-4">
                    <span>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <circle cx="11" cy="11" r="11" fill="#25AB75"></circle>
                        <path
                          d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <p className="text-[18px] md:text-[20px] text-semibolds">
                      Real-life experiences from two young achievers who made a
                      tangible impact.
                    </p>
                  </div>
                  <div className="flex  justify-left gap-5 pb-4">
                    <span>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <circle cx="11" cy="11" r="11" fill="#25AB75"></circle>
                        <path
                          d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <p className="text-[18px] md:text-[20px] text-semibolds">
                      Lessons learned through personal challenges and growth.
                    </p>
                  </div>
                </div>
                <div className="w-full 2xl:w-1/3">
                  <img
                    className="w-full"
                    src="/Images/not-a-ordinary.webp"
                    alt="Dreams to Reality is NOT Just Another Ordinary Book!"
                  />
                </div>
              </div>
            </div>

            <div className="max-w-[1200px] text-[18px]  md:text-[20px] justify-center text-semibolds w-auto mt-10 pb-[40px] px-[30px] gap-10">
              <h2 className="w-full text-center text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold">
                <b className="text-custom-amber">
                  The best part? You don’t have to figure it all out on your
                  own.
                </b>
              </h2>
              {/* <div className="flex justify-center py-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="137"
                  height="14"
                  viewBox="0 0 137 14"
                  fill="none"
                >
                  <path
                    d="M0.76312 11.4852C24.298 5.0368 84.1832 -3.98656 135.445 11.5072"
                    stroke="#FFC621"
                    strokeWidth="4"
                  ></path>
                </svg>
              </div> */}
              <p className="text-center mb-3 text-[20px] mt-4 sm:text-[20px] md:text-[20px] lg:text-[24px] text-semibolds">
                Dreams to Reality will show you exactly how to break past
                doubts, take bold action, and start achieving what once felt
                impossible.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary rounded-lg py-[40px]">
          <h2 className="w-full text-center text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold">
            <b className="text-custom-amber">
              Get Your Copy Now – Limited Stock Available!
            </b>
          </h2>
          {/* <div className="flex justify-center py-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="137"
              height="14"
              viewBox="0 0 137 14"
              fill="none"
            >
              <path
                d="M0.76312 11.4852C24.298 5.0368 84.1832 -3.98656 135.445 11.5072"
                stroke="#FFC621"
                strokeWidth="4"
              ></path>
            </svg>
          </div> */}

          <div className="flex justify-center">
            <section className="2xl:w-[80%] flex flex-col lg:flex-row gap-5 mt-10 mb-10">
              <div className="w-full lg-[w-47%]">
                <div className="w-[90%] flex flex-col items-start mb-10 mx-[25px] mt-0">
                  <div className="w-full flex flex-col justify-start items-start gap-y-2">
                    <p className="text-[20px] md:text-[20px] font-medium mb-1">
                      We’ve printed only a few copies of Dreams to Reality for
                      this special giveaway - and they’re going fast.
                    </p>
                    <p className="text-[20px] md:text-[20px] font-medium mb-1">
                      Once these copies are gone, it could be months before more
                      are available.
                    </p>
                    <p className="text-[20px] md:text-[20px] font-medium mb-1">
                      The good news? Your copy is still available - right now
                    </p>
                    <p className="text-[20px] md:text-[20px] font-medium mb-1">
                      But time is running out…
                    </p>
                    <p className="text-[20px] md:text-[20px] font-medium mb-1">
                      If you’re serious about turning your goals into reality,
                      don’t wait - grab your copy today before it’s gone!
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center flex-wrap">
                <img
                  src="/Images/LimitedBook.webp"
                  className="w-full max-w-[600px] h-auto object-contain"
                  alt="Get Your Copy Now – Limited Stock Available!"
                />
              </div>
            </section>
          </div>
        </section>

        <section className="bg-black py-[40px] mb-8 rounded-xl px-[14px]">
          <div className="mb-14 flex flex-col justify-center items-center gap-y-2">
            <h2 className="max-w-full  text-center text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold">
              <b className="text-custom-amber">
                Join the Growing List of Action-Takers Who Are Turning Their
                Dreams into Reality!
              </b>
            </h2>

            {/* <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="137"
                height="14"
                viewBox="0 0 137 14"
                fill="none"
              >
                <path
                  d="M0.76312 11.4852C24.298 5.0368 84.1832 -3.98656 135.445 11.5072"
                  stroke="#FFC621"
                  strokeWidth="4"
                ></path>
              </svg>
            </div> */}

            <p className="max-w-[1200px] text-center  text-[20px] mt-8 sm:text-[20px] md:text-[20px] lg:text-[24px] font-medium">
              Let us know where to send your Book, and take the first step
              toward achieving your goals today!
            </p>
          </div>

          <div className="w-full flex flex-col justify-center items-center">
            <div className="max-w-full flex flex-col xl:flex-row gap-6 xl:gap-6 justify-center items-center xl:w-[90%] 2xl:w-[80%]">
              <a
                href={`/pay/?type=PRODUCT&curr=INR&productIds=67dea774770d7aa5b35b4db2&successUrl=${successUrl}&failureUrl=${failureUrl}&from=dreams-to-reality/ae`}
                //onClick={() => ToCheckout("67dea774770d7aa5b35b4db2")}
                className="w-full  bg-btn-primary hover:bg-btn-primary/90 text-white py-3 px-4 sm:py-3.5 sm:px-7 font-bold text-base sm:text-xl md:text-lg flex items-center justify-center rounded-full shadow-btn-primary/100 tracking-tight"
              >
                Grab Your E-Book
              </a>

              <a
                href={`/pay/?type=PRODUCT&curr=INR&productIds=67de9c03770d7aa5b35b4712&successUrl=${successUrl}&failureUrl=${failureUrl}&from=dreams-to-reality/ae`}
                // onClick={() => ToCheckout("67de9c03770d7aa5b35b4712")}
                className="w-full  bg-btn-primary hover:bg-btn-primary/90 text-white py-3 px-4 sm:py-3.5 sm:px-7 font-bold text-base sm:text-xl md:text-lg flex items-center justify-center rounded-full shadow-btn-primary/100 tracking-tight"
              >
                Grab Your Hardcover
              </a>
            </div>
          </div>
        </section>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <FooterUAE />
      </Suspense>
    </>
  );
};

export default HeroUAE;
