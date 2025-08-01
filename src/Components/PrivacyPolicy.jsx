import React, { Suspense } from "react";
import { Link } from "react-router-dom";

import { getSeoMeta } from "../utils/getSeoMeta";
import Seo from "../Seo";
import Header from "./Header";
const LazyFooter = React.lazy(() => import("./Footer"));

const PrivacyPolicy = () => {
  const seo = getSeoMeta("https://books.1xl.com/privacy-policy");
  return (
    <>
      {seo && <Seo {...seo} />}
      <div style={{ color: "black" }}>
        <Header />
        <div style={{ color: "black" }} className="w-full bg-white">
          <div className="container mx-auto px-4 pb-6">
            <section className="bg-white  pb-6   mb-6">
              <h4 className=" text-black text-[25px] md:text-[30px] font-semibold pt-[25px] ">
                {" "}
                Privacy Policy
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

                  <a
                    href="https://maps.app.goo.gl/mCvV6mqmRgEaRtLL6"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    3, Jainam Tower, 3, Sai Park, Belthika Nagar, Thergaon
                    (Chinchwad), Pune - 411033, Maharashtra, India
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
                    Last Modified Date of Privacy Policy:
                  </strong>{" "}
                  28th March 2025
                </li>
              </ol>

              <div className="policies-content">
                <p className="text-black">
                  This Privacy Policy explains how One XL Info LLP
                  (“Organisation”, “we”, “our”, or “us”) collects, uses, shares,
                  and protects your information across all of our platforms and
                  services, including our SaaS products, online courses, events,
                  podcasts, travel bookings, and websites.
                </p>

                <h4 className="pt-[30px] text-gray text-[20px] md:text-[24px] font-semibold ">
                  1. What Information Do We Collect?
                </h4>

                <p className="text-gray">
                  We collect personal information you voluntarily provide when
                  you register, express interest in our services, or interact
                  with us via:
                </p>
                <ul>
                  <li className="text-black">1. SaaS tools</li>
                  <li className="text-black">2. Online courses</li>
                  <li className="text-black">3. Events & workshops</li>
                  <li className="text-black">4. Podcasts</li>
                  <li className="text-black">5. Travel bookings</li>
                  <li className="text-black">6. Website forms</li>
                </ul>

                <br />
                <strong
                  style={{
                    color: "black",
                  }}
                >
                  Collected data may include:
                </strong>

                <ul>
                  <li className="text-black">&nbsp;1. &nbsp;Name</li>
                  <li className="text-black">&nbsp;2. &nbsp;Contact numbers</li>
                  <li className="text-black">&nbsp;3. &nbsp;Email IDs</li>
                  <li className="text-black">
                    &nbsp;4. &nbsp;Mailing addresses
                  </li>
                  <li className="text-black">&nbsp;5. &nbsp;Job titles</li>
                  <li className="text-black">&nbsp;6. &nbsp;Usernames</li>
                  <li className="text-black">
                    &nbsp;7. &nbsp;Contact preferences
                  </li>
                  <li className="text-black">
                    &nbsp;8. &nbsp;Contact or authentication data
                  </li>
                  <li className="text-black">
                    &nbsp;9. &nbsp;Billing addresses
                  </li>
                  <li className="text-black">10. Payment card information</li>
                  <li className="text-black">11. Passwords</li>
                </ul>

                <h4 className="pt-[30px] text-gray text-[20px] md:text-[24px] font-semibold ">
                  2. Sensitive Information
                </h4>

                <p className="text-gray">
                  We do not process sensitive personal information such as:
                  {/* government IDs, financial account information, health information,
  or biometric data. */}
                </p>
                <ul>
                  <li style={{ color: "black" }}>1. Government-issued IDs</li>
                  <li style={{ color: "black" }}>
                    2. Financial account numbers (beyond billing needs)
                  </li>
                  <li style={{ color: "black" }}>
                    3. Biometric or health-related data
                  </li>
                  <li style={{ color: "black" }}>
                    4. Religious or political views
                  </li>
                </ul>

                <h4 className="pt-[30px] text-gray text-[20px] md:text-[24px] font-semibold ">
                  3. Social Media Login Data
                </h4>
                <p className="text-gray">
                  When using social logins (e.g. Facebook, Google), we may
                  access profile data (with your permission) to facilitate
                  registration and login across:
                </p>
                <ul>
                  <li className="text-black">1. Learning platforms</li>
                  <li className="text-black">2. Event dashboards</li>
                  <li className="text-black">3. Podcast accounts</li>
                  <li className="text-black">4. SaaS workspaces</li>
                </ul>

                <h4 className="pt-[30px] text-gray text-[20px] md:text-[24px] font-semibold ">
                  4. Information Automatically Collected{" "}
                </h4>
                <p className="text-gray">
                  We automatically collect technical information when you use
                  our services, including:
                </p>
                <ul>
                  <li className="text-black">1. IP address</li>
                  <li className="text-black">2. Browser/device details</li>
                  <li className="text-black">
                    3. Usage behaviour (e.g. time spent on a course or SaaS
                    session)
                  </li>
                  <li className="text-black">4. Location data (if enabled)</li>
                </ul>
                <p className="text-gray ">
                  This helps us improve user experience and maintain platform
                  security.
                </p>

                <h4 className="pt-[30px] text-gray text-[20px] md:text-[24px] font-semibold ">
                  5. How Do We Process Your Information?
                </h4>
                <p className="text-gray">We process personal information to:</p>
                <ul>
                  <li className="text-black">
                    1. Provide access to SaaS, courses, events, podcasts, and
                    travel tools
                  </li>
                  <li className="text-black">
                    2. Manage user profiles and accounts
                  </li>
                  <li className="text-black">
                    3. Fulfil purchases, subscriptions, or bookings
                  </li>
                  <li className="text-black">
                    4. Respond to inquiries or support requests
                  </li>
                  <li className="text-black">
                    5. Send updates and administrative emails
                  </li>
                  <li className="text-black">
                    6. Detect fraud and protect user data
                  </li>
                  <li className="text-black">
                    7. Improve service performance and personalise experiences
                  </li>
                  <li className="text-black">
                    8. Comply with applicable legal obligations
                  </li>
                </ul>
                <h4 className="pt-[30px] text-gray text-[20px] md:text-[24px] font-semibold ">
                  6. When and With Whom Do We Share Your Personal Information?
                </h4>
                <p className="text-gray">
                  We may share information with third parties in specific
                  situations, such as:
                </p>
                <ul>
                  <li className="text-black">
                    1. Share your data with trusted third parties, including:{" "}
                  </li>
                  <li className="text-black">
                    2. Service Providers: Hosting, payment, or marketing support
                  </li>
                  <li className="text-black">
                    3. Affiliates: Within One XL brands for delivering services
                  </li>
                  <li className="text-black">
                    4. Business Partners: For joint courses, events, or SaaS
                    tools
                  </li>
                  <li className="text-black">
                    5. Legal Entities: When required by law or for protection
                  </li>
                  <li className="text-black">
                    6. In Mergers/Acquisitions: In case of reorganisation or
                    business transition
                  </li>
                </ul>

                <h4 className="pt-[30px] text-gray text-[20px] md:text-[24px] font-semibold ">
                  7. Do We Use Cookies and Other Tracking Technologies?
                </h4>
                <p className="text-gray">
                  Yes, we use cookies and similar tools to:
                </p>
                <ul>
                  <li className="text-black">
                    1. Maintain logins across SaaS and learning platforms
                  </li>
                  <li className="text-black">
                    2. Track podcast engagement and event participation
                  </li>
                  <li className="text-black">
                    3. Optimise travel bookings and site navigation
                  </li>
                  <li className="text-black">
                    4. Serve personalised content or promotional offers
                  </li>
                </ul>
                <p className="text-black">
                  Please refer to our separate Cookie Policy for details.
                </p>
                <h4 className="pt-[30px] text-gray text-[20px] md:text-[24px] font-semibold ">
                  8. How Do We Handle Your Social Logins?
                </h4>
                <p className="text-gray">
                  If you use social media credentials to access our services, we
                  collect information allowed by the provider (e.g. name,
                  email). This is used to streamline account creation and login.
                  No data is posted without your consent.
                </p>
                <h4 className="pt-[30px] text-gray text-[20px] md:text-[24px] font-semibold ">
                  9. How Long Do We Keep Your Information?
                </h4>
                <p className="text-gray">
                  We retain your information only as long as necessary to:
                </p>
                <ul>
                  <li className="text-black">
                    1. Maintain your SaaS or course account
                  </li>
                  <li className="text-black">
                    2. Manage event or travel bookings
                  </li>
                  <li className="text-black">
                    3. Fulfil legal, tax, or fraud-prevention obligations
                  </li>
                </ul>
                <p className="text-gray">
                  Once no longer needed, data is deleted or anonymised securely.
                </p>
                <h4 className="pt-[30px] text-gray text-[20px] md:text-[24px] font-semibold ">
                  10. How Do We Keep Your Information Safe?
                </h4>
                <p className="text-gray">
                  We use robust technical and organisational security measures
                  across all platforms (SaaS, learning portals, podcast
                  platforms, event dashboards, and travel booking systems).
                  Despite these efforts, no system is 100% secure.
                </p>
                <h4 className="pt-[30px] text-gray text-[20px] md:text-[24px] font-semibold ">
                  11. What Are Your Privacy Rights?
                </h4>
                <p className="text-gray">
                  Depending on your location, you may:
                </p>
                <ul>
                  <li className="text-black">1. Request access to your data</li>
                  <li className="text-black">2. Correct or update details</li>
                  <li className="text-black">3. Delete your account</li>
                  <li className="text-black">4. Withdraw marketing consent</li>
                  <li className="text-black">
                    5. Opt out of certain data processing
                  </li>
                </ul>
                <p className="text-gray">
                  Contact{" "}
                  <a
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    href="mailto:privacy@1XL.com"
                  >
                    privacy@1XL.com
                  </a>{" "}
                  to make a request.
                </p>

                <h4 className="pt-[30px] text-gray text-[20px] md:text-[24px] font-semibold ">
                  12. Account Information
                </h4>
                <p className="text-gray">
                  To review, update, or delete your account (SaaS, course,
                  event, or travel), contact our support team or use your
                  account dashboard. Some data may be retained for compliance or
                  fraud prevention.
                </p>

                <h4 className="pt-[30px] text-gray text-[20px] md:text-[24px] font-semibold ">
                  13. Controls for Do-Not-Track Features
                </h4>
                <p className="text-gray">
                  We currently do not respond to browser-based Do-Not-Track
                  (DNT) signals, as there’s no universal standard in place.
                </p>

                <h4 className="pt-[30px] text-gray text-[20px] md:text-[24px] font-semibold ">
                  14. Do We Make Updates to This Notice?
                </h4>
                <p className="text-gray">
                  Yes, This Privacy Policy may be revised to reflect changes in:
                </p>
                <ul>
                  <li className="text-black">1. Law or regulation</li>
                  <li className="text-black">2. Technology</li>
                  <li className="text-black">
                    3. Our service offerings or business model
                  </li>
                </ul>

                <p className="text-gray">
                  Updates will be posted here. For significant changes, we may
                  notify you directly.
                </p>
              </div>
            </section>
          </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyFooter />
        </Suspense>
      </div>
    </>
  );
};

export default PrivacyPolicy;
