import React, { useState } from 'react'
import Payment_info from '/Images/Payment-info.jpeg'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import PaymentForm from './PaymentForm';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const navigate = useNavigate();


  return (
    <>
      <div className="w-full min-h-full flex flex-col justify-between text-black  bg-custom-pay  relative">
        <span className="text-2xl font-bold text-black absolute top-6 left-4">
          Logo
        </span>
        <div className="flex w-full">
          <div className="w-full md:w-[50%] h-fit bg-white text-black border-r-2 border-blue-gray-100 px-20 xl:px-32">
            <div className="w-full border-b-2 border-blue-gray-200 pt-20">
              <h1 className="text-[24px] font-semibold text-black pb-2">
                BUSINESS BREAKTHROUGH SEMINAR - Rajiv Talreja -(Scalex-Fb)
              </h1>
              <p className=" text-blue-gray-700 pb-2">
                by <span className="text-blue-gray-800"> Successgyan</span>
              </p>
              <p className="text-black font-bold text-2xl pb-2">&#x20B9; 99</p>
              <div className="py-2 w-full">
                <img src={Payment_info}></img>
              </div>

              <div className="mb-16 text-black">
                <p className="text-black pb-2">
                  <strong className="text-black text-base">
                    28th April 2024 09:00 am to 01:00 pm
                  </strong>
                </p>
                <p className="text-black pb-2">
                  <strong className="text-black text-base">
                    WHAT DO YOU GET WHEN YOU PAY INR 99/-?
                  </strong>
                </p>
                <p className="text-black opacity-80 mb-2 text-[16px] tracking-wide font-normal">
                  A 4-Hour Online Workshop with Rajiv Talreja!
                </p>
                <p className="text-black opacity-80 mb-2 text-[16px] tracking-wide font-normal">
                  Join the Workshop and Become Like the Top 1% Successful
                  Business Owners and Entrepreneurs
                </p>
                <p>
                  <strong className="text-black mb-2">
                    8 SOLUTION COURSES WORTH INR 7486/ - COMPLETELY FREE
                  </strong>
                </p>
                <p className="text-black opacity-80 mb-2 text-[16px] tracking-wide font-normal">
                  1) How to Build a{" "}
                  <strong className="text-black text-base">
                    WIN- WIN- WIN
                  </strong>{" "}
                  <strong className="text-black text-base">Team</strong> priced
                  at <strong className="text-black text-base">INR 499/-</strong>
                </p>
                <p className="text-black opacity-80 mb-2 text-[16px] tracking-wide font-normal">
                  2) How to create a{" "}
                  <strong className="text-black text-base">
                    Work-Life Balance
                  </strong>{" "}
                  priced at{" "}
                  <strong className="text-black text-base">INR 599/-</strong>
                </p>
                <p className="text-black opacity-80 mb-2 text-[16px] tracking-wide font-normal">
                  3) How to{" "}
                  <strong className="text-black text-base">
                    Beat Competition and test your business model
                  </strong>{" "}
                  priced at{" "}
                  <strong className="text-black text-base">INR 499/-</strong>
                </p>
                <p className="text-black opacity-80 mb-2 text-[16px] tracking-wide font-normal">
                  4) Top 7 strategies to{" "}
                  <strong className="text-black text-base">
                    Hire the Best Talent for your business{" "}
                  </strong>
                  priced at
                  <strong className="text-black text-base"> INR 499/-</strong>
                </p>
                <p className="text-black opacity-80 mb-2 text-[16px] tracking-wide font-normal">
                  5) Strategies to{" "}
                  <strong className="text-black text-base">
                    Expand your business
                  </strong>{" "}
                  priced at{" "}
                  <strong className="text-black text-base">INR 999/-</strong>
                </p>
                <p className="text-black opacity-80 mb-2 text-[16px] tracking-wide font-normal">
                  6) Top 4 Sales strategies that will{" "}
                  <strong className="text-black text-base">
                    Skyrocket Your Sales
                  </strong>{" "}
                  priced at{" "}
                  <strong className="text-black text-base">INR 699/-</strong>
                </p>
                <p className="text-black opacity-80 mb-2 text-[16px] tracking-wide font-normal">
                  7) 5 Areas to Invest in your business to{" "}
                  <strong className="text-black text-base">
                    Get the Best ROI
                  </strong>{" "}
                  priced at{" "}
                  <strong className="text-black text-base">INR 699/-</strong>
                </p>
                <p className="text-black opacity-80 mb-2 text-[16px] tracking-wide font-normal">
                  8) My{" "}
                  <strong className="text-black text-base">
                    Personal Money Discipline strategy
                  </strong>{" "}
                  that changed my Life priced at{" "}
                  <strong className="text-black text-base">INR 499/-</strong>
                </p>
                <p />
                <p className="text-black opacity-80 mb-2 text-[16px] tracking-wide font-normal">
                  <strong className="text-black text-base">
                    NO QUESTIONS ASKED MONEY-BACK GUARENTEE
                  </strong>
                </p>
                <p />
                <p className="text-black opacity-80 mb-2 text-[16px] tracking-wide font-normal">
                  Get This{" "}
                  <strong className="text-black">
                    AMAZING OFFER TODAY FOR JUST INR 99/-
                  </strong>{" "}
                  and Get a Money-Back Guarantee. Join today, go through our
                  seminar and if you don't like it for any reason, simply send
                  us an email and we'll refund every penny - NO QUESTIONS ASKED!
                </p>
                <p />
              </div>
            </div>
            <div>
              <p className="py-5 text-black opacity-80 text-sm">
                You agree to share information entered on this page with
                Tagmango (owner of this page) and Razorpay, adhering to
                applicable laws.
              </p>
              <p className="pb-5 text-black opacity-80 text-sm">
                TagMango 2023{" "}
                <a
                  href="https://learn.successgyan.com/privacy"
                  className=" underline pl-2"
                >
                  Privacy
                </a>{" "}
                <a
                  href="https://learn.successgyan.com/terms"
                  className="underline pl-2"
                >
                  Terms
                </a>
              </p>
            </div>
          </div>

          <div className="w-full md:w-[50%] hidden md:block">
            <PaymentForm />
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-white py-3 px-10 border-t border-gray-200 md:hidden">
          <div className="flex justify-between items-center">
            <p className="text-black text-lg font-semibold"> &#x20B9; 99</p>
            <button
              className=" px-6 py-2 bg-blue-500 text-white rounded-md"
              onClick={() => {
                navigate("/payment-form");
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentPage
