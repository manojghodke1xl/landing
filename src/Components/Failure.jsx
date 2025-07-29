import React, { useEffect } from 'react';
// import confetti from 'canvas-confetti';
import failure from "../assets/images/bg/failure.png"

const Failure = () => {
  useEffect(() => {
    // Google Tag Manager initialization
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-GC8QG15HMX");

    // Fetch query parameters
    const getQueryParam = (param) => {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    };

    const currency = getQueryParam("curr") || "USD";
    const transactionValue = parseFloat(getQueryParam("transactionValue")) || 0.0;

    const itemIds = getQueryParam("item_ids") ? getQueryParam("item_ids").split(",") : [];
    const itemNames = getQueryParam("item_names") ? getQueryParam("item_names").split(",") : [];

    const items = itemIds.map((id, index) => ({
      item_id: id.trim(),
      item_name: itemNames[index] ? itemNames[index].trim() : "Unknown Product",
      index: index,
      item_category: "Books",
      price: 35.0,
      quantity: 1,
    }));

    gtag("event", "purchase", {
      value: transactionValue,
      currency: currency,
      items: items,
    });

    // Confetti effect on page load
    // confetti({
    //   particleCount: 200,
    //   spread: 90,
    //   origin: { y: 0.6 },
    //   colors: [
    //     "#ff0a0a",
    //     "#ff9500",
    //     "#fffb00",
    //     "#43d700",
    //     "#2196f3",
    //     "#9c27b0",
    //     "#e91e63",
    //     "#ff4081",
    //     "#009688",
    //     "#3f51b5",
    //   ], // Colorful confetti
    // });
  }, []);

  return (
    <div className="flex items-center justify-center bg-[#ebf0f5] h-screen overflow-hidden">
      <div className="bg-white p-12 rounded-2xl shadow-lg w-full max-w-lg text-center">
  <div>
    <img
      src={failure}
      alt="failure"
      className="w-1/3 mx-auto"
    />
  </div>
  <h1 className="text-[#0d9488] font-extrabold text-4xl mb-4">E-Book Purchase Unsuccessful!</h1>
  <p className="text-[#404f5e] text-xl mb-6">
    <div className='font-bold  text-[#404f5e]'>
      We regret your E-Book  purchase could not be completed.
    </div>
    Please verify your payment details and try again. Contact support for assistance.
  </p>
  <button
    className="w-1/2 bg-[#0d9488] text-white py-3 rounded-lg font-medium text-xl hover:bg-[#0b7f70]"
    onClick={() => window.location.href = '/'}
  >
    Back to Home
  </button>
</div>

    </div>
  );
};

export default Failure;
