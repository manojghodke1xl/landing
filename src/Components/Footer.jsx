import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-secondary grid justify-center py-[40px]">
        <div className="max-w-[1400px] pb-[25px] flex flex-col sm:flex-row justify-center items-center">
          <div className="flex justify-center gap-10">
            <div className="flex flex-wrap justify-center  gap-5">

              <Link to="/privacy-policy">
                <b className="text-[15px] hover:text-blue-500 hover:underline sm:text-[15px] md:text-[15px] lg:text-[15px] flex-grow">Privacy Policy</b>
              </Link>
              <Link to="/contact-us">
                <b className="text-[15px] hover:text-blue-500 hover:underline sm:text-[15px] md:text-[15px] lg:text-[15px] flex-grow">Contact Us</b>
              </Link>


              <Link to="/terms-and-conditions">
                <b className="text-[15px] hover:text-blue-500 hover:underline sm:text-[15px] md:text-[15px] lg:text-[15px] flex-grow">Terms and Conditions</b>
              </Link>


              <Link to="/refund-policy">
                <b className="text-[15px] hover:text-blue-500 hover:underline sm:text-[15px] md:text-[15px] lg:text-[15px] flex-grow">Refund Policy</b>
              </Link>


              <Link to="/shipping-policy">
                <b className="text-[15px] hover:text-blue-500 hover:underline sm:text-[15px] md:text-[15px] lg:text-[15px] flex-grow">Shipping/Return Policy</b>
              </Link>

              <Link to="/gdpr-policy">
                <b className="text-[15px] hover:text-blue-500 hover:underline sm:text-[15px] md:text-[15px] lg:text-[15px] flex-grow">GDPR Policy</b>
              </Link>


            </div>
          </div>
        </div>


        <hr />
        <div className="pt-[25px] text-center">
          © 2024 - 2025 <a href="https://books.1xl.com/" className='hover:text-blue-500 hover:underline font-semibold'>Books.1XL.com</a> – A Product of{" "}
          <a href="https://1xl.com/" className='hover:text-blue-500 hover:underline font-semibold'>ONE XL INFO LLP</a>. All Rights Reserved.
        </div>
      </footer>
    </>
  )
}

export default Footer
