import React from "react";
import { Check } from "lucide-react";
const Change = () => {
  return (
    <section className="py-8 sm:py-14 px-[20px] mb-10 rounded-xl container mx-auto max-w-[90%]">
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-4xl font-playfair font-bold text-gray-900">
          <b className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What is Dreams to Reality All About?
          </b>
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Left Section: Image + Bullet Points */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start">
          <img
            src="/Images/BookCopy.webp"
            className="w-full  md:h-[400px] object-contain mb-4 lg:mb-6 -mt-8"
            alt="Dreams to Reality"
            loading="lazy"
          />

          <div className="flex flex-col gap-4 ">
            <h4 className="text-lg md:text-xl font-bold">
              Through their 50-day mission, they:
            </h4>
            <ul className="list-none space-y-3 md:text-lg">
              {[
                "Turned vision into impact - one day, one event at a time.",
                "Faced doubts, setbacks, and uncertainty with resilience.",
                "Inspired 50,000+ people by showing what’s possible with clarity and courage.",
                "Focused on growth, learning, and service, rather than just goals.",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="text-purple-600 mt-1 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section: Text Blocks */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <p className="font-helvetica text-gray-700 text-md md:text-lg">
            <strong>Dreams to Reality</strong> is the true story of two young
            siblings and child prodigies who turned bold dreams into nationwide
            impact—completing 120+ events in 50 days, inspiring over 50,000
            lives across India. Through five powerful 50-day missions, they
            mastered discipline, embraced challenges, and proved that with the
            right mindset, age is never a limitation.
          </p>

          <p className="font-helvetica text-gray-700 text-md md:text-lg">
            This book isn’t just their story; it’s a blueprint for anyone ready
            to take action, break barriers, and lead with purpose.
          </p>

          <p className="font-helvetica text-gray-700 text-md md:text-lg">
            It’s a story of transformation. Two young siblings turned their
            learnings into a mission of giving back—reaching over 50,000 people
            across India through 120+ events in just 50 days. Their journey
            wasn’t just about growth; it was rooted in service and the desire to
            spark possibility in every life they touched.
          </p>
        </div>
      </div>

      {/* <div className="flex flex-col lg:flex-row items-start gap-10">
        <div className="w-full lg:w-1/2 flex flex-col justify-center -mt-12">
          <img
            src="/Images/BookCopy.webp"
            className="w-full h-[300px] md:h-[400px] object-contain"
            alt="Dreams to Reality"
            loading="lazy"
          />
          <div className="myths-list flex flex-col gap-4 justify-start -mt-10 items-start">
            <h4 className="text-lg font-bold mb-2">
              Through their 50-day mission, they:
            </h4>
            <ul className="list-none ">
              {[
                "Turned vision into impact - one day, one event at a time.",
                "Faced doubts, setbacks, and uncertainty with resilience.",
                "Inspired 50,000+ people by showing what’s possible with clarity and courage.",
                "Focused on growth, learning, and service, rather than just goals.",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check
                    className="text-purple-600 mt-1 flex-shrink-0 w-6 h-6"
                    stroke="#9333ea"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-row gap-6 justify-between items-start flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <p className="font-helvetica text-dark-gray md:text-lg text-md text-gray-600">
              Dreams to Reality is the true story of two young siblings and
              child prodigies who turned bold dreams into nationwide impact -
              completing 120+ events in 50 days, inspiring over 50,000 lives
              across India. Through five powerful 50-day missions, they mastered
              discipline, embraced challenges, and proved that with the right
              mindset, age is never a limitation.
            </p>
            <div className="flex-1 min-w-[200px]"></div>
            <p className="font-helvetica text-dark-gray md:text-lg text-md text-gray-600">
              This book isn’t just their story; it’s a blueprint for anyone
              ready to take action, break barriers, and lead with purpose.
            </p>
          </div>
          <p className="font-helvetica md:text-lg text-md text-gray-600 mb-6">
            This is the true story of two young siblings and child prodigies who
            transformed their learnings into a mission of giving back, reaching
            over 50,000 people across India through 120+ events in just 50 days.
            Their journey wasn’t just about personal growth; it was rooted in
            service, contribution, and the desire to spark possibility in every
            life they touched.
          </p>
        </div>
      </div> */}
      <div className=" md:px-10 flex flex-col justify-center">
        <p className="text-center md:text-xl sm:text-lg text-gray-600 mb-2 mt-4">
          This book reminds us that you don’t have to be extraordinary to create
          change; you just have to be intentional.
        </p>
        <h4 className="text-center md:text-xl text-lg text-gray-600 font-semibold">
          It’s not a story of luck; it’s a journey of choice, discipline, and
          heart.
        </h4>
      </div>
    </section>
  );
};

export default Change;
