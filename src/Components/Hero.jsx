import React, { useState, useEffect, Suspense } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import WhyAttend from "./WhyAttend";
import Change from "./Change";
import { getSeoMeta } from "../utils/getSeoMeta";
import Seo from "../Seo";
import GrowthInMotion from "./GrowthInMotion";
import Discover from "./Discover";
import MissionSection from "./MissionComponent";
import BulletListSection from "./BulletListSection";
import { missionSectionsData } from "../data/BooksData";

const LazyFooter = React.lazy(() => import("./Footer"));

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const seo = getSeoMeta("https://books.1xl.com/dreams-to-reality/in");
  const successUrl = window.location.origin + "/success";
  const failureUrl = window.location.origin + "/failure";
  const cardData = [
    {
      title: "Real Stories of Action, Not Just Advice",
      description:
        "Follow the journey of two young siblings who turned learning into impact, completing five 50-day missions that inspired 50,000+ lives across India",
    },
    {
      title: "A Blueprint for Purpose-Driven Growth",
      description:
        "Learn how they developed skills like discipline, time management, public speaking, and focus through hands-on experience, not just theory.",
    },
    {
      title: "How to Start Before You Feel Ready",
      description:
        "See how Jainam and Jivika launched projects like JJFuntime, 1XL, Jainam Jivika Foundation, and more by starting small and showing up consistently.",
    },
    {
      title: "Lessons That Go Beyond Age or Background",
      description:
        "Discover how their faith, family, and mindset helped them tackle challenges from public speaking fears to health setbacks and come out stronger every time.",
    },
    {
      title: "Tools to Turn Dreams Into Daily Practice",
      description:
        "From reading 50 books in 50 days to mastering 50 skills, this book shares the exact missions and frameworks that helped them turn learning into leadership.",
    },
    {
      title: "A Deeper Meaning of Success",
      description:
        "Explore how giving back, serving others, and creating impact became more powerful than any certificate or award.",
    },
  ];
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
                  loading="lazy"
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
                </div>
                <WhyAttend />
                <div className="flex flex-col lg:flex-row gap-4 justify-center">
                  <a
                    href={`/pay/?type=PRODUCT&curr=INR&productIds=67de9c03770d7aa5b35b4712&successUrl=${successUrl}&failureUrl=${failureUrl}&from=dreams-to-reality/in`}
                    // onClick={() => ToCheckout("67de9c03770d7aa5b35b4712")}
                    className="w-full lg:w-auto px-6 py-4 rounded-full bg-btn-primary text-white font-bold "
                  >
                    Grab Your Hardcover
                  </a>
                  <a
                    href={`/pay/?type=PRODUCT&curr=INR&productIds=67dea774770d7aa5b35b4db2&&successUrl=${successUrl}&failureUrl=${failureUrl}&from=dreams-to-reality/in`}
                    //onClick={() => ToCheckout("67dea774770d7aa5b35b4db2")}
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
            <div></div>
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

        <section className="py-[40px]  bg-secondary rounded-xl px-[5px]">
          <div className="mb-14 flex flex-col justify-center items-center gap-y-4">
            <h2 className="w-full text-center text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold">
              <b className="text-custom-amber">
                Every Year, A New Leap – Our Growth in Motion
              </b>
            </h2>
            <div></div>
          </div>
          <section className="w-full flex flex-col justify-center gap-2  lg:px-10 xl:px-20 gap-y-6">
            <GrowthInMotion />

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
          {missionSectionsData.map((section, index) => (
            <MissionSection key={index} {...section} />
          ))}
        </div>
        <div className="bg-secondary">
          <h2 className="w-full py-[25px] md:py-[40px]  px-10 md:px-18  text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px]  font-bold text-center">
            <b className="text-custom-amber">Stories That Stay With Us</b>
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

            <div></div>
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
                      href={`/pay/?type=PRODUCT&curr=INR&productIds=67de9c03770d7aa5b35b4712&successUrl=${successUrl}&failureUrl=${failureUrl}&from=dreams-to-reality/in`}
                      //onClick={() => ToCheckout("67de9c03770d7aa5b35b4712")}
                      className="text-white mb-3 text-1xl w-full lg:w-full  rounded-full py-4 px-5 lg:px-15 text-center font-bold bg-btn-primary hover:bg-btn-primary/90  shadow-btn-primary/100"
                    >
                      Grab Your Hardcover
                    </a>
                    <a
                      //onClick={() => ToCheckout("67dea774770d7aa5b35b4db2")}
                      href={`/pay/?type=PRODUCT&curr=INR&productIds=67dea774770d7aa5b35b4db2&successUrl=${successUrl}&failureUrl=${failureUrl}&from=dreams-to-reality/in`}
                      className="text-white mb-3 text-1xl w-full lg:w-full  rounded-full py-4 px-5 lg:px-15 text-center font-bold bg-btn-primary hover:bg-btn-primary/90  shadow-btn-primary/100"
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
            <div></div>

            <p className="max-w-[1200px] text-center  text-[20px]  sm:text-[20px] md:text-[20px] lg:text-[24px] font-bold">
              We never had a big network or formal training when we started.
              Even better, we didn’t rely on what most people consider essential
              for success. Our journey had:
            </p>

            <div className=" mx-auto mt-12 sm:py-[40px] sm:px-[50px] py-5 px-5 bg-black/70 rounded-xl shadow-xl sm:max-w-[80%] max-w-[100%]">
              <BulletListSection
                heading="We didn’t have shortcuts, fame, or a head start."
                items={[
                  "What we did have was stubborn determination,",
                  "A strong willingness to learn,",
                  "Consistency through every challenge,",
                  "And a habit of taking on one bold mission every year.",
                ]}
                imageSrc="/Images/breaking-all-rules.webp"
                imageAlt="We Turned Dreams into Reality by Breaking All the Rules!"
                imageFirst={false}
              />
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
            <div></div>

            <div className=" mx-auto  mt-12 sm:py-[40px] sm:px-[50px] py-5 px-5 bg-secondary rounded-xl shadow-xl sm:max-w-[80%] max-w-[100%]">
              <BulletListSection
                heading="By following a structured system of 50-day challenges, we were able to focus on what truly matters:"
                items={[
                  "Taking on new challenges without hesitation.",
                  "Building confidence through real experiences.",
                  "Learning, growing, and inspiring others along the way.",
                  "Creating a life of impact by helping others achieve their dreams.",
                ]}
                imageSrc="/Images/freedom.webp"
                imageAlt="Our Approach to Growth Has Given Us More Freedom Than We Ever Imagined!"
                imageFirst={false}
              />
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
          <Discover cards={cardData} />
        </section>

        <section className="pt-[40px] bg-black grid justify-center rounded-xl px-[20px] relative">
          <div className="w-full flex flex-col items-center gap-y-2 justify-center">
            <h2 className="max-w-[1200px] px-10   md:px-18 text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold text-center ">
              <b className="text-custom-amber">
                Dreams to Reality is NOT Just Another Ordinary Book!
              </b>
            </h2>
            <div></div>

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
                    loading="lazy"
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
              <p className="text-center mb-3 text-[20px] mt-4 sm:text-[20px] md:text-[20px] lg:text-[24px] text-semibolds">
                Dreams to Reality will show you exactly how to break past
                doubts, take bold action, and start achieving what once felt
                impossible.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary rounded-lg py-[40px]">
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
        </section>

        <section className="bg-black py-[40px] mb-8 rounded-xl px-[14px]">
          <div className="mb-14 flex flex-col justify-center items-center gap-y-2">
            <h2 className="max-w-full  text-center text-[20px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold">
              <b className="text-custom-amber">
                Join the Growing List of Action-Takers Who Are Turning Their
                Dreams into Reality!
              </b>
            </h2>

            <div></div>

            <p className="max-w-[1200px] text-center  text-[20px] mt-8 sm:text-[20px] md:text-[20px] lg:text-[24px] font-medium">
              Let us know where to send your Book, and take the first step
              toward achieving your goals today!
            </p>
          </div>

          <div className="w-full flex flex-col justify-center items-center">
            <div className="max-w-full flex flex-col xl:flex-row gap-6 xl:gap-6 justify-center items-center xl:w-[90%] 2xl:w-[80%]">
              <a
                href={`/pay/?type=PRODUCT&curr=INR&productIds=67dea774770d7aa5b35b4db2&successUrl=${successUrl}&failureUrl=${failureUrl}&from=dreams-to-reality/in`}
                //onClick={() => ToCheckout("67dea774770d7aa5b35b4db2")}
                className="w-full  bg-btn-primary hover:bg-btn-primary/90 text-white py-3 px-4 sm:py-3.5 sm:px-7 font-bold text-base sm:text-xl md:text-lg flex items-center justify-center rounded-full shadow-btn-primary/100 tracking-tight"
              >
                Grab Your E-Book
              </a>

              <a
                href={`/pay/?type=PRODUCT&curr=INR&productIds=67de9c03770d7aa5b35b4712&successUrl=${successUrl}&failureUrl=${failureUrl}&from=dreams-to-reality/in`}
                //onClick={() => ToCheckout("67de9c03770d7aa5b35b4712")}
                className="w-full  bg-btn-primary hover:bg-btn-primary/90 text-white py-3 px-4 sm:py-3.5 sm:px-7 font-bold text-base sm:text-xl md:text-lg flex items-center justify-center rounded-full shadow-btn-primary/100 tracking-tight"
              >
                Grab Your Hardcover
              </a>
            </div>
          </div>
        </section>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyFooter />
      </Suspense>
    </>
  );
};

export default Hero;
