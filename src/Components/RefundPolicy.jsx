import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { getSeoMeta } from "../utils/getSeoMeta";
import Seo from "../Seo";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { getSelectedCountry } from "../utils/addresses";
const LazyFooter = React.lazy(() => import("./Footer"));

export const RefundPolicy = () => {
  const seo = getSeoMeta("https://books.1xl.com/refund-policy");
   const { countryCode } = useParams();
    const selectedCountry = getSelectedCountry(countryCode);
  return (
    <>
      {seo && <Seo {...seo} />}
      <div style={{ color: "black" }}>
        <Header />
        <div style={{ color: "black" }} className="w-full bg-white">
          <div className="container mx-auto px-4 pb-6">
            <section className="bg-white  pb-6   mb-6">
              <h4
                style={{ color: "black" }}
                className="pt-[25px] text-[18px] sm:text-[30px] font-bold"
              >
                Refund Policy
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

                {/* <li style={{color:"black"}} className='pt-[10px]'>
              <strong style={{
              color:"black"
            }}>Organisation Contact No.: </strong>
              <a style={{
              color:"black"
            }} href="tel:95 5289 5289" target="_blank">
                +91 95 5289 5289
              </a>
            </li> */}

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

                  <a
                    href="https://maps.app.goo.gl/mCvV6mqmRgEaRtLL6"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                   {selectedCountry.address}
                  </a>
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
                    Last Modified Date of Refund Policy:
                  </strong>{" "}
                  28th March 2025
                </li>
              </ol>
              <div className="policies-content">
                {/* <h4 style={{color:"black"}} className='pt-[25px] text-[18px] sm:text-[25px] font-bold'>Refunds & Cancellation Policy</h4> */}

                <p
                  style={{
                    color: "black",
                  }}
                  className="pt-[10px]"
                >
                  You may cancel your subscription at any time by logging into
                  your Product Website as mentioned above. Your cancellation
                  will take effect at the end of the current billing period. If
                  you have questions or concerns about the SaaS platforms,
                  online courses, event bookings, or other services, please
                  contact us at Organisation Email ID as mentioned above.
                </p>
                <h4
                  style={{ color: "black" }}
                  className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                >
                  1. General Terms for Subscription and Service Cancellation
                </h4>
                <p
                  style={{
                    color: "black",
                  }}
                >
                  You have the ability to cancel your subscription to any of our
                  services at any time, including subscriptions to our
                  Software-as-a-Service (SaaS) platforms, online courses, and
                  membership programs. Cancellation of services will take effect
                  at the end of your current billing cycle, and you will not be
                  charged for the subsequent period following your cancellation
                  request. Please note that you will continue to have access to
                  the relevant service until the end of the ongoing billing
                  cycle.
                </p>
                <p
                  style={{
                    color: "black",
                  }}
                >
                  To initiate the cancellation process, simply log into your
                  account on the Product Website and follow the steps outlined
                  there. In the event that you have any concerns or questions
                  regarding the cancellation process, or any issues with your
                  subscriptions, SaaS platforms, online courses, or event
                  bookings, you can contact us directly via Organisation Email
                  ID for assistance.
                </p>
                <h4
                  style={{ color: "black" }}
                  className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                >
                  2. Fee Changes and Price Adjustments
                </h4>
                <p
                  style={{
                    color: "black",
                  }}
                >
                  We maintain the right to periodically adjust the subscription
                  fees for our SaaS platforms, online courses, workshops,
                  events, or any other services offered by the Organisation.
                  These changes may occur for reasons such as inflation, changes
                  in market conditions, service upgrades, or other
                  business-related considerations.
                </p>
                <p
                  style={{
                    color: "black",
                  }}
                >
                  Should any price changes occur, we will notify you in advance
                  in accordance with the applicable laws governing such
                  modifications. We strive to keep you informed of any price
                  adjustments that may impact your subscription and will provide
                  a reasonable period of notice prior to any such fee changes
                  taking effect.
                </p>
                <h4
                  style={{ color: "black" }}
                  className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                >
                  3. Credit-Based Products
                </h4>
                <p
                  style={{
                    color: "black",
                  }}
                >
                  Certain products on our Product Website, such as credits for
                  SaaS subscriptions, event registrations, and online courses,
                  are purchased on a credit-based model. Once these credits are
                  purchased, they are non-refundable and cannot be redeemed for
                  cash or exchanged for other services or products.
                </p>
                <p
                  style={{
                    color: "black",
                  }}
                >
                  It is critical to ensure that you are fully ready to utilise
                  the credits before completing your purchase. We strongly
                  recommend reviewing your intended use for these credits, as
                  once the transaction is complete, no refunds, exchanges, or
                  cancellations will be allowed.
                </p>
                <h4
                  style={{ color: "black" }}
                  className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                >
                  4. Subscription-Based Products
                </h4>
                <p className="text-gray">
                  For all subscription-based products, which include but are not
                  limited to, subscriptions for SaaS solutions, online courses,
                  or membership programs, you are free to cancel your
                  subscription at any time. However, please be aware of the
                  following:
                </p>
                <ul>
                  <li
                    style={{
                      color: "black",
                    }}
                  >
                    <strong
                      style={{
                        color: "black",
                      }}
                    >
                      No Refund for Unused Periods:
                    </strong>{" "}
                    If you choose to cancel your subscription, the cancellation
                    will be effective at the end of your current billing period,
                    and no refund will be issued for any unused portion of the
                    subscription term. For example, if you cancel midway through
                    a monthly or yearly subscription, you will not be refunded
                    for the days or months remaining in the billing period.
                  </li>
                  <li
                    style={{
                      color: "black",
                    }}
                  >
                    <strong
                      style={{
                        color: "black",
                      }}
                    >
                      Continued Access:
                    </strong>{" "}
                    After cancellation, you will retain access to the service
                    until the end of the current billing cycle. Once the cycle
                    concludes, your access will terminate, and you will no
                    longer be billed for future cycles.
                  </li>
                  {/* <li
                  style={{
                    color: "black",
                  }}
                >
                  <strong
                    style={{
                      color: "black",
                    }}
                  >
                    Pick-Up Option:
                  </strong>{" "}
                  If you selected the ticket pick-up option, you must collect
                  your tickets within the specified time frame. Failure to do so
                  may result in the cancellation of your ticket.
                </li> */}
                </ul>
                <h4
                  style={{ color: "black" }}
                  className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                >
                  5. Events - Returns/Refunds/Cancellation Policy
                </h4>
                <strong className="mb-3" style={{ color: "black" }}>
                  {" "}
                  Ticket Delivery:
                </strong>
                <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                  <li
                    style={{
                      color: "black",
                    }}
                  >
                    <strong
                      style={{
                        color: "black",
                      }}
                    >
                      Digital Tickets:
                    </strong>{" "}
                    Upon confirmation, a QR code will be sent to the registered
                    email id. This code must be presented for entry at the
                    event.
                  </li>
                  <li
                    style={{
                      color: "black",
                    }}
                  >
                    <strong
                      style={{
                        color: "black",
                      }}
                    >
                      Physical Tickets:
                    </strong>{" "}
                    If you choose physical ticket delivery, these will be sent
                    to the address provided during booking. Please ensure that
                    your delivery address is accurate. If the ticket is returned
                    due to an incorrect address or other issues beyond our
                    control, we will not be responsible for any delivery charges
                    or reissue of tickets.
                  </li>
                  <li
                    style={{
                      color: "black",
                    }}
                  >
                    <strong
                      style={{
                        color: "black",
                      }}
                    >
                      Pick-Up Option:
                    </strong>{" "}
                    If you selected the ticket pick-up option, you must collect
                    your tickets within the specified time frame. Failure to do
                    so may result in the cancellation of your ticket.
                  </li>
                </ul>

                <h4
                  style={{ color: "black" }}
                  className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                >
                  6. Ticket Cancellation Policy
                </h4>
                <p
                  style={{
                    color: "black",
                  }}
                  className="pt-[10px]"
                >
                  No cancellations will be accepted once a ticket purchase is
                  confirmed. We strongly encourage you to confirm your plans
                  before purchasing tickets.
                </p>
                <p
                  style={{
                    color: "black",
                  }}
                  className="pt-[10px]"
                >
                  <strong
                    style={{
                      color: "black",
                    }}
                  >
                    Ticket transfers
                  </strong>{" "}
                  are allowed under the following conditions:
                </p>
                <ul style={{ listStyleType: "disc", paddingLeft: "18px" }}>
                  <li
                    className=""
                    style={{
                      color: "black",
                    }}
                  >
                    A transfer request must be submitted at least 7 days prior
                    to the event.
                  </li>
                  <li
                    className=""
                    style={{
                      color: "black",
                    }}
                  >
                    The ticket holder must contact us via Organisation Email ID
                    as mentioned above with the following details:
                    <ul
                      style={{ listStyleType: "circle", paddingLeft: "20px" }}
                    >
                      <li
                        className=""
                        style={{
                          color: "black",
                        }}
                      >
                        Full name of the original ticket holder.
                      </li>
                      <li
                        className=""
                        style={{
                          color: "black",
                        }}
                      >
                        Full name of the transferee.
                      </li>
                      <li
                        className=""
                        style={{
                          color: "black",
                        }}
                      >
                        Ticket number or booking reference.
                      </li>
                      <li
                        className=""
                        style={{
                          color: "black",
                        }}
                      >
                        Additional relevant details as requested.
                      </li>
                    </ul>
                  </li>
                  <li
                    style={{
                      color: "black",
                    }}
                  >
                    The organisers reserve the right to reject a transfer
                    request if it does not meet the above criteria or if the
                    request is received after the cut-off period.
                  </li>
                </ul>
                <h4
                  style={{ color: "black" }}
                  className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                >
                  7. Promotions and Discount Offers
                </h4>
                <p
                  style={{
                    color: "black",
                  }}
                >
                  Promotions, discounts, or special offers, such as Early Bird
                  offers for workshops or courses, are subject to the discretion
                  of the organiser and may be subject to specific terms and
                  conditions. Promotional offers may not apply to tickets
                  purchased before the promotion was announced, and the
                  availability of such offers is typically limited.
                </p>
                <p className="text-gray">
                  When tickets or services are purchased during a promotion,
                  they will be subject to the specific terms of that promotion.
                  We strongly recommend reviewing the details of the promotion
                  before making your purchase to fully understand the applicable
                  terms.
                </p>
                <h4
                  style={{ color: "black" }}
                  className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                >
                  8. Event Cancellation or Postponement
                </h4>
                <p
                  style={{
                    color: "black",
                  }}
                >
                  In the unfortunate event that an event (whether a workshop,
                  conference, online course, seminar, or similar event) is
                  cancelled or rescheduled, we will offer you a refund or an
                  alternative arrangement in line with the event organiser’s
                  instructions.
                </p>
                <p className="text-black">
                  However, please note the following:
                </p>
                <ul>
                  <li
                    style={{
                      color: "black",
                    }}
                  >
                    <strong
                      style={{
                        color: "black",
                      }}
                    >
                      Non-Refundable Charges:
                    </strong>{" "}
                    Any non-refundable charges, such as booking fees, processing
                    fees, or other administrative costs, will not be refunded.
                    These fees are typically outlined at the time of booking.
                  </li>
                  <li
                    style={{
                      color: "black",
                    }}
                  >
                    <strong
                      style={{
                        color: "black",
                      }}
                    >
                      Alternative Arrangements:
                    </strong>{" "}
                    If the event is rescheduled, you will be given the option to
                    attend the new event date or receive a refund. If you are
                    unable to attend the rescheduled event, you may be eligible
                    for a refund based on the event organiser's policies.
                  </li>
                  <li
                    style={{
                      color: "black",
                    }}
                  >
                    <strong
                      style={{
                        color: "black",
                      }}
                    >
                      Event Organiser Instructions:
                    </strong>{" "}
                    In case of rescheduling or cancellation, it is essential to
                    follow any instructions or guidelines provided by the event
                    organisers. These may include deadlines for requesting
                    refunds, registration changes, or attending an alternative
                    event.
                  </li>
                </ul>
                <p className="text-gray">
                  By using our services or purchasing tickets for events, you
                  agree to be bound by the terms and conditions set out in this
                  Refunds & Cancellation Policy. If you have any questions or
                  require further clarification regarding any aspect of this
                  policy, please feel free to contact us at{" "}
                  <strong className="text-black">
                    <a href="mailto:contact@1XL.com." target="_blank">
                      contact@1XL.com.
                    </a>
                  </strong>
                </p>
              </div>
            </section>
          </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyFooter country="/ae"/>
        </Suspense>
      </div>
    </>
  );
};

export default RefundPolicy;
