import React from "react";

const BulletListSection = ({
  heading,
  items = [],
  imageSrc,
  imageAlt,
  imageFirst = false,
}) => {
  return (
    <div className="flex flex-col 2xl:flex-row justify-center gap-12 text-center lg:text-left items-center">
      {imageFirst && (
        <div className="w-full 2xl:w-1/3">
          <img
            className="w-full"
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
          />
        </div>
      )}

      <div className="grid w-full text-left 2xl:w-2/3">
        <p className="text-[20px] md:text-[24px] font-semibold mb-4">
          {heading}
        </p>

        {items.map((item, index) => (
          <div key={index} className="flex justify-left gap-5 pb-4">
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
            <p className="text-[18px] md:text-[20px] font-semibold">{item}</p>
          </div>
        ))}
      </div>

      {!imageFirst && (
        <div className="w-full 2xl:w-1/3">
          <img
            className="w-full"
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
};

export default BulletListSection;
