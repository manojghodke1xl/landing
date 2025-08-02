import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { getSeoMeta } from "../utils/getSeoMeta";
import Seo from "../Seo";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { getSelectedCountry } from "../utils/addresses";

const LazyFooter = React.lazy(() => import("./Footer"));

export const ShippingPolicy = () => {
  const seo = getSeoMeta("https://books.1xl.com/shipping-policy");
  const { countryCode } = useParams();
  const selectedCountry = getSelectedCountry(countryCode);
  return (
    <>
      {seo && <Seo {...seo} />}
      <div style={{ color: "black" }}>
        <Header />
        {/* <nav className="h-[100px] bg-black px-[56px] py-4">
          <div className="flex items-center sm:justify-between justify-center h-full bg-black">
            <div className="flex items-center justify-center h-full bg-black">
              <Link to="/">
                <img
                  src="/Images/logo-white.webp"
                  className="w-[168px] h-auto bg-black"
                  alt="Dreams To Reality Logo"
                />
              </Link>
            </div>
          </div>
        </nav> */}
        <div style={{ color: "black" }} className="w-full bg-white">
          <div className="container mx-auto px-4 pb-6">
            <section className="bg-white  pb-6   mb-6">
              <div className="w-full flex justify-center bg-white">
                <div className="w-full  bg-white">
                  <h4 className=" text-black text-[25px] md:text-[30px] font-semibold  ">
                    {" "}
                    Shipping/Return Policy
                  </h4>

                  <ol
                    style={{ color: "black" }}
                    classname="privacy-policy-intro-list"
                  >
                    <li style={{ color: "black" }} className="pt-[10px]">
                      <strong
                        style={{
                          color: "black",
                        }}
                      >
                        Organisation Name:{" "}
                      </strong>{" "}
                      One XL Info LLP (referred to as “Organisation”)
                    </li>
                    <li style={{ color: "black" }} className="pt-[10px]">
                      <strong
                        style={{
                          color: "black",
                        }}
                      >
                        Organisation Email ID:{" "}
                      </strong>

                      <a
                        href="mailto:contact@1XL.com "
                        target="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        contact@1XL.com
                      </a>
                    </li>

                    <li style={{ color: "black" }} className="pt-[10px]">
                      <strong
                        style={{
                          color: "black",
                        }}
                      >
                        Organisation Website:{" "}
                      </strong>

                      <a
                        href="https://1xl.com/"
                        target="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        1XL.com
                      </a>
                    </li>
                    <li style={{ color: "black" }} className="pt-[10px]">
                      <strong
                        style={{
                          color: "black",
                        }}
                      >
                        Product Website:{" "}
                      </strong>

                      <a
                        href="https://books.1xl.com"
                        target="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        Books.1XL.com
                      </a>
                    </li>
                    <li style={{ color: "black" }} className="pt-[10px]">
                      <strong
                        style={{
                          color: "black",
                        }}
                      >
                        Registered Address:{" "}
                      </strong>

                      {selectedCountry.address}
                    </li>
                    <li style={{ color: "black" }} className="pt-[10px]">
                      <strong
                        style={{
                          color: "black",
                        }}
                      >
                        Registered Country:
                      </strong>{" "}
                      India
                    </li>
                    <li style={{ color: "black" }} className="pt-[10px]">
                      <strong
                        style={{
                          color: "black",
                        }}
                      >
                        Last Modified Date of Shipping Policy:
                      </strong>{" "}
                      28th March 2025
                    </li>
                  </ol>

                  <div className="policies-content">
                    <h4 className="pt-[30px] text-gray text-[20px] md:text-[24px] font-semibold ">
                      1. General Terms
                    </h4>
                    <p className="text-gray  pb-[10px]">
                      {" "}
                      By purchasing products or services from One XL Info LLP,
                      you agree to ensure payment for any items you may
                      purchase, and you acknowledge that prices are subject to
                      change. We reserve the right to reject or cancel an order
                      for any reason, including errors or omissions in the
                      information you provide. We may request additional
                      information from you prior to confirming a sale and
                      reserve the right to place additional restrictions on the
                      sale of any of our products or services.
                    </p>

                    <h4 className="pt-[30px] text-gray text-[20px] md:text-[24px] font-semibold ">
                      2. Digital Products and Services
                    </h4>
                    <p className="text-gray">
                      For digital products and services, such as our SaaS
                      platforms, online courses, and digital marketing services,
                      payment is due at the time of purchase. Access to these
                      products or services will be provided upon successful
                      payment processing. Please ensure you are ready to use the
                      services before completing your purchase, as we do not
                      offer refunds for unused portions of subscription periods.
                    </p>

                    <h4 className="pt-[30px] text-gray text-[20px] md:text-[24px] font-semibold ">
                      3. Events - Shipping/Delivery/Return Policy
                    </h4>
                    <strong style={{ color: "black" }}>
                      {" "}
                      Ticket Delivery:
                    </strong>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                      <li className="text-gray pt-[10px]">
                        {" "}
                        <strong style={{ color: "black" }}>
                          {" "}
                          Digital Tickets:&nbsp;
                        </strong>{" "}
                        Upon confirmation, a QR code will be sent to the
                        registered email id. This code must be presented for
                        entry at the event.
                      </li>
                      <li className="text-gray">
                        {" "}
                        <strong style={{ color: "black" }}>
                          Physical Tickets:&nbsp;
                        </strong>
                        If you choose physical ticket delivery, these will be
                        sent to the address provided during booking. Please
                        ensure your delivery address is accurate. If the ticket
                        is returned due to an incorrect address or other issues
                        beyond our control, we will not be responsible for any
                        delivery charges or reissue of tickets.
                      </li>
                      <li className="text-gray">
                        {" "}
                        <strong style={{ color: "black" }}>
                          {" "}
                          Pick-Up Option:&nbsp;
                        </strong>{" "}
                        If you selected the ticket pick-up option, you must
                        collect your tickets within the specified time frame.
                        Failure to do so may result in the cancellation of your
                        ticket.
                      </li>
                    </ul>

                    <strong style={{ color: "black" }}> Cancellation:</strong>
                    <ol
                      style={{ listStyleType: "decimal", paddingLeft: "20px" }}
                    >
                      <li className="text-gray">
                        {" "}
                        Cancellations will be accepted and payments refunded in
                        full up to two (2) weeks prior to any training event.
                        Following this period, a credit for future trainings
                        matching the amount already paid will be given to
                        registrants who cancel their registration, up to two (2)
                        days prior to the event date. This credit can only be
                        applied to one future training. If the cost of the
                        future training is less than the amount paid, the
                        difference will be lost.
                      </li>
                      <li className="text-gray">
                        {" "}
                        No cancellations will be accepted once a ticket purchase
                        is confirmed. We strongly encourage you to confirm your
                        plans before purchasing tickets.
                      </li>
                      <li className="text-gray">
                        {" "}
                        Ticket transfers are allowed under specific conditions,
                        including submission at least 7 days prior to the event
                        and provision of necessary details. The organisers
                        reserve the right to reject a transfer request if it
                        does not meet the criteria or is received after the
                        cut-off period.
                      </li>
                    </ol>
                    <strong style={{ color: "black" }}>
                      {" "}
                      Promotions and Offers:
                    </strong>
                    <p className="text-gray">
                      Any promotional offers or discounts are subject to change
                      at the organiser's discretion and may not be applicable to
                      tickets purchased before the offer was announced. Tickets
                      purchased during promotions or discounts are subject to
                      the specific terms of that offer.
                    </p>
                    <strong style={{ color: "black" }}>
                      Event Cancellation or Postponement:
                    </strong>
                    <p className="text-gray">
                      If the event is cancelled or rescheduled, we will provide
                      a refund or an alternative arrangement as per the event
                      organiser's instructions. However, any non-refundable
                      charges, such as booking fees, will not be refunded. You
                      must follow any specific instructions provided by the
                      event organiser in such cases.
                    </p>

                    <h4 className="pt-[30px] text-gray text-[20px] md:text-[24px] font-semibold ">
                      4. Service Fees and Taxes
                    </h4>
                    <p className="text-gray">
                      Tickets purchased may be subject to, among other possible
                      fees, a per-ticket service fee and a per-order processing
                      fee. We collect tax as required by state and local laws.
                      These fees are calculated based on delivery location and
                      shipping method. Please note that the delivery fee, as
                      well as the order processing fee, may not reflect the
                      actual cost to deliver or process your order, and in some
                      cases, these fees may include a profit to One XL Info LLP.
                    </p>

                    <h4 className="pt-[30px] text-gray text-[20px] md:text-[24px] font-semibold ">
                      5. Contact Information
                    </h4>
                    <p className="text-gray">
                      For any questions or concerns regarding our
                      Shipping/Return Policy, please contact us at{" "}
                      <a
                        className="text-blue-600"
                        href="mailto:contact@1XL.com"
                        target="_blank"
                      >
                        contact@1XL.com
                      </a>
                      .
                    </p>
                    <h4 className="pt-[30px] text-gray text-[20px] md:text-[24px] font-semibold ">
                      6. Policy Updates
                    </h4>
                    <p className="text-gray">
                      We reserve the right to amend this policy to ensure it
                      complies with current legal requirements or to implement
                      changes to our services. Your next visit will be subject
                      to the new policy.
                    </p>

                    <h4 className="pt-[30px] text-gray text-[20px] md:text-[24px] font-semibold ">
                      7. Legal Compliance
                    </h4>
                    <p className="text-gray">
                      This policy is governed by the laws applicable to
                      Organisation Website as mentioned above operations. Any
                      disputes arising from this policy shall be resolved in
                      accordance with the Organisation's standard terms and
                      conditions.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyFooter code="/in" />
        </Suspense>
      </div>
    </>
  );
};

export default ShippingPolicy;
