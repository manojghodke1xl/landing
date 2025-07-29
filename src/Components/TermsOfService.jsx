import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { getSeoMeta } from "../utils/getSeoMeta";
import Seo from "../Seo";

const LazyFooter = React.lazy(() => import("./Footer"));

const TermsOfService = () => {
  const seo = getSeoMeta("https://books.1xl.com/terms-and-conditions");
  return (
    <>
      {seo && <Seo {...seo} />}
      <div style={{ color: "black" }} classname="">
        <nav className="h-[100px] bg-black px-[56px] py-4">
          <div className="flex items-center sm:justify-between justify-center">
            {/* Logo Placeholder */}
            <div className="w-[233px] h-[41px] bg-gray-500 text-white flex items-center justify-center text-sm font-bold">
              <Link to="/">
                <img
                  src="/Images/logo-white.webp"
                  className="w-42 h-auto mt-5"
                  alt="Dreams To Reality Logo_Horizontal"
                />
              </Link>
            </div>

            {/* Navigation Links */}
            {/* <div className="flex flex-grow justify-center space-x-8">
                   <a href="#" className="text-white hover:text-gray-400">
                     Support
                   </a>
                   <a href="#" className="text-white hover:text-gray-400">
                     Order Now
                   </a>
                 </div> */}
          </div>
        </nav>
        <div style={{ color: "black" }} className="w-full bg-white">
          <div className="container mx-auto px-4 pb-6">
            <section className="bg-white  pb-6   mb-6">
              <h4
                style={{ color: "black" }}
                className="pt-[25px] text-[18px] sm:text-[30px] font-bold"
              >
                Terms and Conditions
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
                    Last Modified Date of Terms and Conditions:
                  </strong>{" "}
                  28th March 2025
                </li>
              </ol>
              <div className="policies-content">
                <p
                  style={{
                    color: "black",
                  }}
                  className="pt-[25px]"
                >
                  Our Organisation Website, as mentioned above, complies
                  with&nbsp;
                  <strong
                    style={{
                      color: "black",
                    }}
                  >
                    Information Technology (Intermediary Guidelines and Digital
                    Media Ethics Code) Rules, 2021,
                  </strong>{" "}
                  which make it mandatory for the disclosure of the use of
                  cookies and obtain users' consent for their use. So by
                  agreeing to our legal terms and conditions, you as a User are
                  obligated to follow and use our Organisation Website as
                  mentioned above as per legal terms and conditions.
                </p>
                <div style={{ color: "black" }} classname="terms-section-1">
                  <h4
                    style={{ color: "black" }}
                    className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                  >
                    THE AGREEMENT
                  </h4>
                  <p
                    style={{
                      color: "black",
                    }}
                    className="text-justify"
                  >
                    The use of this website and the services on this website are
                    governed by One XL INFO LLP under the applicable laws of
                    India. These Terms of Service govern your access and usage
                    of the Website, all its pages, and the Services, including:
                  </p>
                  <ul>
                    <li className="text-black">1. SaaS Platforms & Tools</li>
                    <li className="text-black">
                      2. Online and Offline Courses
                    </li>
                    <li className="text-black">
                      3. Digital and Physical Events (Including Workshops &
                      Webinars)
                    </li>
                    <li className="text-black">
                      4. Podcasts and Associated Media
                    </li>
                    <li className="text-black">
                      5. Travel Services Organised or Facilitated by the
                      Organisation
                    </li>
                    <li className="text-black">
                      6. Sales of Any Digital or Physical Goods Associated with
                      the Above
                    </li>
                  </ul>

                  <p
                    style={{
                      color: "black",
                    }}
                    className="text-justify"
                  >
                    By accessing the Website directly or via a hyperlink, and/or
                    using our Services or purchasing from us, you agree to be
                    bound by these Terms & Conditions, as well as any
                    supplemental terms that may apply to specific services.
                    These Terms apply to all users, including, but not limited
                    to, browsers, vendors, customers, clients, and content
                    contributors.
                  </p>
                  <p
                    style={{
                      color: "black",
                    }}
                    className="text-justify"
                  >
                    You acknowledge and agree that the Product Website as
                    mentioned above, may use your personal information in the
                    manner described in our Privacy Policy, which sets forth how
                    information collected about you is collected, used and
                    stored.
                  </p>
                </div>
                <hr />
                <ol
                  style={{ color: "black", marginLeft: "5px" }}
                  classname="privacy-policy-intro-list policy-list-items mt-8"
                >
                  <li style={{ color: "black", marginLeft: "5px" }}>
                    <h4
                      style={{ color: "black" }}
                      className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                    >
                      Table of Contents
                    </h4>
                    <div>
                      <ol
                        style={{ color: "black", marginLeft: "5px" }}
                        classname="privacy-policy-intro-list"
                      >
                        <li
                          style={{ color: "black", marginLeft: "5px" }}
                          classname="font-weight-600"
                        >
                          <a
                            style={{ color: "black", marginLeft: "5px" }}
                            href="#assent"
                          >
                            1. Assent &amp; Acceptance{" "}
                          </a>
                        </li>
                        <li
                          style={{ color: "black", marginLeft: "5px" }}
                          classname="font-weight-600"
                        >
                          <a
                            style={{ color: "black", marginLeft: "5px" }}
                            href="#age-restriction"
                          >
                            2. Age Restriction
                          </a>
                        </li>
                        <li
                          style={{ color: "black", marginLeft: "5px" }}
                          classname="font-weight-600"
                        >
                          <a
                            style={{ color: "black", marginLeft: "5px" }}
                            href="#about-the-site"
                          >
                            3. About the Site
                          </a>
                        </li>
                        <li
                          style={{ color: "black", marginLeft: "5px" }}
                          classname="font-weight-600"
                        >
                          <a
                            style={{ color: "black", marginLeft: "5px" }}
                            href="#licence-to-use-website"
                          >
                            4. Licence to Use Website
                          </a>
                        </li>
                        <li
                          style={{ color: "black", marginLeft: "5px" }}
                          classname="font-weight-600"
                        >
                          <a
                            style={{ color: "black", marginLeft: "5px" }}
                            href="#intellectual-property"
                          >
                            5. Intellectual Property
                          </a>
                          <ol
                            style={{ color: "black", marginLeft: "5px" }}
                            classname="privacy-policy-intro-list policy-list-items mt-1"
                          >
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              5.1 Ownership of Intellectual Property
                            </li>
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              5.2 Licence for User Content
                            </li>
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              5.3 Reporting Infringements
                            </li>
                          </ol>
                        </li>
                        <li
                          style={{ color: "black", marginLeft: "5px" }}
                          classname="font-weight-600"
                        >
                          <a
                            style={{ color: "black", marginLeft: "5px" }}
                            href="#user-obligations"
                          >
                            6. User Obligations
                          </a>
                          <ol
                            style={{ color: "black", marginLeft: "5px" }}
                            classname="privacy-policy-intro-list policy-list-items mt-1"
                          >
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              6.1 Registration Requirements
                            </li>
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              6.2 Account Security
                            </li>
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              6.3 Billing Information
                            </li>
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              6.4 Prohibited Actions
                            </li>
                          </ol>
                        </li>
                        <li
                          style={{ color: "black", marginLeft: "5px" }}
                          classname="font-weight-600"
                        >
                          <a
                            style={{ color: "black", marginLeft: "5px" }}
                            href="#payment-fees"
                          >
                            7. Payment &amp; Fees
                          </a>
                          <ol
                            style={{ color: "black", marginLeft: "5px" }}
                            classname="privacy-policy-intro-list policy-list-items mt-1"
                          >
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              7.1 Billing and Renewal
                            </li>
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              7.2 Fee Changes
                            </li>
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              7.3 Credit-Based Products
                            </li>
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              7.4 Subscription-Based Products
                            </li>
                          </ol>
                        </li>
                        <li
                          style={{ color: "black", marginLeft: "5px" }}
                          classname="font-weight-600"
                        >
                          <a
                            style={{ color: "black", marginLeft: "5px" }}
                            href="#software"
                          >
                            8. Software
                          </a>
                          <ol
                            style={{ color: "black", marginLeft: "5px" }}
                            classname="privacy-policy-intro-list policy-list-items mt-1"
                          >
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              8.1 Licencing Terms
                            </li>
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              8.2 Disclaimer of Warranties for Software
                            </li>
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              8.3 User Restrictions
                            </li>
                          </ol>
                        </li>
                        <li
                          style={{ color: "black", marginLeft: "5px" }}
                          classname="font-weight-600"
                        >
                          <a
                            style={{ color: "black", marginLeft: "5px" }}
                            href="#acceptable-use"
                          >
                            9. Acceptable Use
                          </a>
                          <ol
                            style={{ color: "black", marginLeft: "5px" }}
                            classname="privacy-policy-intro-list policy-list-items mt-1"
                          >
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              9.1 Prohibited Activities
                            </li>
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              9.2 Consequences of Violations
                            </li>
                          </ol>
                        </li>
                        <li
                          style={{ color: "black", marginLeft: "5px" }}
                          classname="font-weight-600"
                        >
                          <a
                            style={{ color: "black", marginLeft: "5px" }}
                            href="#communication"
                          >
                            10. Communication
                          </a>
                          <ol
                            style={{ color: "black", marginLeft: "5px" }}
                            classname="privacy-policy-intro-list policy-list-items mt-1"
                          >
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              10.1 Consent for Communication
                            </li>
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              10.2 Methods of Communication
                            </li>
                          </ol>
                        </li>
                        <li
                          style={{ color: "black", marginLeft: "5px" }}
                          classname="font-weight-600"
                        >
                          <a
                            style={{ color: "black", marginLeft: "5px" }}
                            href="#sale-of-goods-services"
                          >
                            11. Sale of Goods/Services
                          </a>
                        </li>
                        <li
                          style={{ color: "black", marginLeft: "5px" }}
                          classname="font-weight-600"
                        >
                          <a
                            style={{ color: "black", marginLeft: "5px" }}
                            href="#indemnification"
                          >
                            12. Indemnification
                          </a>
                        </li>
                        <li
                          style={{ color: "black", marginLeft: "5px" }}
                          classname="font-weight-600"
                        >
                          <a
                            style={{ color: "black", marginLeft: "5px" }}
                            href="#spam-policy"
                          >
                            13. Spam Policy
                          </a>
                        </li>
                        <li
                          style={{ color: "black", marginLeft: "5px" }}
                          classname="font-weight-600"
                        >
                          <a
                            style={{ color: "black", marginLeft: "5px" }}
                            href="#third-party-links-content"
                          >
                            14. Third-Party Links &amp; Content
                          </a>
                        </li>
                        <li
                          style={{ color: "black", marginLeft: "5px" }}
                          classname="font-weight-600"
                        >
                          <a
                            style={{ color: "black", marginLeft: "5px" }}
                            href="#modification-variation"
                          >
                            15. Modification &amp; Variation
                          </a>
                        </li>
                        <li
                          style={{ color: "black", marginLeft: "5px" }}
                          classname="font-weight-600"
                        >
                          <a
                            style={{ color: "black", marginLeft: "5px" }}
                            href="#entire-agreement"
                          >
                            16. Entire Agreement
                          </a>
                        </li>
                        <li
                          style={{ color: "black", marginLeft: "5px" }}
                          classname="font-weight-600"
                        >
                          <a
                            style={{ color: "black", marginLeft: "5px" }}
                            href="#service-interruptions"
                          >
                            17. Service Interruptions
                          </a>
                        </li>
                        <li
                          style={{ color: "black", marginLeft: "5px" }}
                          classname="font-weight-600"
                        >
                          <a
                            style={{ color: "black", marginLeft: "5px" }}
                            href="#term-termination-suspension"
                          >
                            18. Term, Termination &amp; Suspension
                          </a>
                          <ol
                            style={{ color: "black", marginLeft: "5px" }}
                            classname="privacy-policy-intro-list policy-list-items mt-1"
                          >
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              18.1 Grounds for Termination
                            </li>
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              18.2 User Termination Rights
                            </li>
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              18.3 Survival of Terms
                            </li>
                          </ol>
                        </li>
                        <li
                          style={{ color: "black", marginLeft: "5px" }}
                          classname="font-weight-600"
                        >
                          <a
                            style={{ color: "black", marginLeft: "5px" }}
                            href="#no-warranties"
                          >
                            19. No Warranties
                          </a>
                        </li>
                        <li
                          style={{ color: "black", marginLeft: "5px" }}
                          classname="font-weight-600"
                        >
                          <a
                            style={{ color: "black", marginLeft: "5px" }}
                            href="#limitation-on-liability"
                          >
                            20. Limitation on Liability
                          </a>
                        </li>
                        <li
                          style={{ color: "black", marginLeft: "5px" }}
                          classname="font-weight-600"
                        >
                          <a
                            style={{ color: "black", marginLeft: "5px" }}
                            href="#general-provisions"
                          >
                            21. General Provisions
                          </a>
                          <ol
                            style={{ color: "black", marginLeft: "5px" }}
                            classname="privacy-policy-intro-list policy-list-items mt-1"
                          >
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              21.1 Language
                            </li>
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              21.2 Jurisdiction, Venue &amp; Governing Law
                            </li>
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              21.3 Assignment Restrictions
                            </li>
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              21.4 Severability
                            </li>
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              21.5 No Waiver
                            </li>
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              21.6 Headings for Convenience
                            </li>
                            <li style={{ color: "black", marginLeft: "5px" }}>
                              21.7 No Agency, Partnership or Joint Venture
                            </li>
                          </ol>
                        </li>
                        <li
                          style={{ color: "black", marginLeft: "5px" }}
                          classname="font-weight-600"
                        >
                          <a
                            style={{ color: "black", marginLeft: "5px" }}
                            href="#force-majeure"
                          >
                            22. Force Majeure
                          </a>
                        </li>
                        <li
                          style={{ color: "black", marginLeft: "5px" }}
                          classname="font-weight-600"
                        >
                          <a
                            style={{ color: "black", marginLeft: "5px" }}
                            href="#electronic-communications-permitted"
                          >
                            23. Electronic Communications Permitted
                          </a>
                        </li>
                      </ol>
                    </div>
                  </li>
                </ol>

                <ol
                  style={{ color: "black" }}
                  classname="privacy-policy-intro-list2 policy-list-items top-policy-margin"
                >
                  <li id="assent">
                    <h4
                      style={{ color: "black" }}
                      className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                    >
                      1. ASSENT & ACCEPTANCE
                    </h4>
                    <ol>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>1.1</strong> By using
                        the Website, You warrant that You have read and reviewed
                        these Terms of Service and that You agree to be bound by
                        them. If You do not agree to be bound by these Terms of
                        Service, please leave the Product Website as mentioned
                        above immediately. The Owner only agrees to provide use
                        of this Website and Services to You if You assent to
                        these Terms of Service. Further, based on the Services
                        obtained by a User, additional terms and conditions in
                        respect of the specific Services may apply, which shall
                        be deemed an agreement between the Users and the Owner.
                      </li>
                    </ol>
                  </li>

                  <li id="age-restriction">
                    <h4
                      style={{ color: "black" }}
                      className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                    >
                      2. AGE RESTRICTION
                    </h4>
                    <ol>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>2.1</strong> You must
                        be at least 18 (eighteen) years of age to use this
                        Website or any Services contained herein. By using this
                        Website, You represent and warrant that You are at least
                        18 years of age and may legally agree to these Terms of
                        Service.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 2.2</strong> The
                        Owner assumes no responsibility or liability for any
                        misrepresentation of Your age.
                      </li>
                    </ol>
                  </li>

                  <li id="about-the-site">
                    <h4
                      style={{ color: "black" }}
                      className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                    >
                      3. ABOUT THE SITE
                    </h4>
                    <ol>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 3.1 </strong>The
                        Product Website as mentioned above reserves the right to
                        refuse service or refuse to sell the products or
                        services on the Product Website at our sole discretion
                        to anyone for any reason at any time. The Product
                        Website does not screen or censor the users who register
                        on and access the Website.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 3.2</strong> You
                        assume all risks associated with dealing with other
                        users with whom you come in contact through the Website.
                        You agree to use the Product Website only for lawful
                        purposes without infringing the rights of or restricting
                        the use of this Website by any third party.
                      </li>
                    </ol>
                  </li>

                  <li id="licence-to-use-website">
                    <h4
                      style={{ color: "black" }}
                      className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                    >
                      4. LICENCE TO USE WEBSITE
                    </h4>
                    <ol>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 4.1 </strong> The
                        Owner may provide You with certain Information as a
                        result of Your use of the Website or Services. Such
                        Information may include but is not limited to,
                        documentation, data, or Information developed by the
                        Owner and other materials which may assist in your use
                        of Product Website as mentioned above or Services
                        Limited Materials.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 4.2 </strong>{" "}
                        Subject to these Terms of Service, the owner grants you
                        a non-exclusive, limited, non-transferable, and
                        revocable licence to use the owner's Materials solely in
                        connection with Your use of the website and Services.
                        The Owner Materials may not be used for any other
                        purpose and this licence terminates upon your cessation
                        of use of Product Website or Services or at the
                        termination of these Terms of Service.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 4.3 </strong> You
                        agree not to collect the contact information of other
                        Users from the Product Website or download or copy any
                        Information by means of unsolicited access so as to
                        communicate directly with them or for any reason
                        whatsoever. Any unauthorized use by you shall terminate
                        the permission or licence granted to you by the Product
                        Website, and You agree that you shall not bypass any
                        measures used by the Owner to prevent or restrict access
                        to the Website.
                      </li>
                    </ol>
                  </li>

                  <li id="intellectual-property">
                    <h4
                      style={{ color: "black" }}
                      className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                    >
                      5. INTELLECTUAL PROPERTY
                    </h4>
                    <ol>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 5.1 </strong> You
                        agree that the Product Website, and all Services
                        provided by the Owner are the property of the Owner,
                        including all copyrights, trademarks, trade secrets,
                        patents, and other intellectual property ("Owner IP").
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 5.2 </strong> You
                        agree that the Owner owns all rights, title, and
                        interest in and to the Owner IP and that You will not
                        use the Owner IP for any unlawful or infringing purpose.
                        You agree not to reproduce or distribute the Owner IP in
                        any way, including electronically or via registration of
                        any new trademarks, trade names, service marks or
                        Uniform Resource Locators (URLs), without express
                        written permission from the Owner. In order to make
                        Product Website and Services available to You, You
                        hereby grant the Owner a royalty-free, non-exclusive,
                        worldwide licence to copy, display, use, broadcast,
                        transmit and make derivative works of any content You
                        publish, upload or otherwise make available to Product
                        Website ("Your Content").
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>5.3 </strong>The
                        Owner claims no further proprietary rights in Your
                        Content. If You feel that any of Your intellectual
                        property rights have been infringed or otherwise
                        violated by the posting of information or media by
                        another of Our users, please contact Us and let Us know.
                      </li>
                    </ol>
                  </li>

                  <li id="user-obligations">
                    <h4
                      style={{ color: "black" }}
                      className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                    >
                      6. USER OBLIGATIONS
                    </h4>
                    <ol>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 6.1 </strong>As a
                        user of the Product Website or Services, You may be
                        asked to register with Us. When You do so,
                        <ol>
                          <li
                            style={{ color: "black" }}
                            className="pt-[10px]  text-justify"
                          >
                            <strong style={{ color: "black" }}>6.1.1</strong>{" "}
                            You will choose a user identifier, which may be Your
                            Email ID or another term, as well as a password.
                          </li>
                          <li
                            style={{ color: "black" }}
                            className="pt-[10px]  text-justify"
                          >
                            <strong style={{ color: "black" }}> 6.1.2 </strong>{" "}
                            You may also provide personal information,
                            including, but not limited to, Your name.
                          </li>
                          <li
                            style={{ color: "black" }}
                            className="pt-[10px]  text-justify"
                          >
                            <strong style={{ color: "black" }}> 6.1.3</strong>{" "}
                            You are responsible for ensuring the accuracy of
                            this information. This identifying information will
                            enable you to use the Product Website and Services.
                          </li>
                          <li
                            style={{ color: "black" }}
                            className="pt-[10px]  text-justify"
                          >
                            <strong style={{ color: "black" }}>6.1.4</strong>{" "}
                            You must not share such identifying information with
                            any third party, and if You discover that Your
                            identifying information has been compromised, You
                            agree to notify Us immediately in writing. An email
                            notification will suffice.
                          </li>
                          <li
                            style={{ color: "black" }}
                            className="pt-[10px]  text-justify"
                          >
                            <strong style={{ color: "black" }}> 6.1.5</strong>{" "}
                            You are responsible for maintaining the safety and
                            security of Your identifying information as well as
                            keeping Us apprised of any changes to Your
                            identifying information.
                          </li>
                        </ol>
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>6.2 </strong> The
                        billing information You provide us, including credit
                        card, billing address and other payment information, is
                        subject to the same confidentiality and accuracy
                        requirements as the rest of Your identifying
                        information. Providing false or inaccurate information
                        or using the Product Website or Services to further
                        fraud or unlawful activity is grounds for immediate
                        termination of these Terms of Service.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>6.3 </strong> The
                        Owner reserves the right to refuse service, terminate
                        accounts, or remove or edit content in its sole
                        discretion.
                      </li>
                    </ol>
                  </li>
                  <li id="payment-fees">
                    <h4
                      style={{ color: "black" }}
                      className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                    >
                      7. PAYMENT & FEES
                    </h4>
                    <ol>
                      <li style={{ color: "black" }} className="pt-[10px}">
                        <strong style={{ color: "black" }}>7.1</strong> Should
                        You register for any of the paid Services on this
                        website or purchase any product or service on this
                        website, You agree to pay Us the specific monetary
                        amounts required for that product or those Services.
                        These monetary amounts ("Fees") will be described to You
                        during Your account registration and/or confirmation
                        process. The final amount required for payment will be
                        shown to You immediately prior to purchase. Payment for
                        any ongoing Services is billed automatically until You
                        notify Us that You would like to terminate Your access
                        to the Services. We reserve the right to refuse service
                        or refuse to sell the products on the Product Website at
                        our sole discretion to anyone for any reason at any
                        time.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}></strong> Note - All
                        Payments Are To Be Made In Indian National Rupee (INR)
                        Only.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>7.2</strong>{" "}
                        Subscriptions.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}></strong>{" "}
                        <strong style={{ color: "black" }}>
                          Billing and Renewal:
                        </strong>{" "}
                        Your Organisation Website subscription will
                        automatically renew unless you cancel it. By
                        subscribing, you consent to recurring charges to your
                        payment method without needing prior approval for each
                        charge until you cancel. The length of your billing
                        cycle will depend on the subscription plan you selected.
                      </li>
                    </ol>
                  </li>

                  <li id="software">
                    <h4
                      style={{ color: "black" }}
                      className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                    >
                      8. SOFTWARE
                    </h4>
                    <ol>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>8.1</strong> The
                        product Website as mentioned above, may include software
                        for use in connection with our Services. If this
                        software is accompanied by an end user licence agreement
                        (“EULA”), the terms of the EULA will govern your use of
                        the software. If there is no EULA, we grant you a
                        non-exclusive, revocable, personal, and non-transferable
                        licence to use the software solely in connection with
                        our Services and in accordance with these Legal Terms.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>8.2</strong> The
                        software and any related documentation are provided "AS
                        IS," without any warranties, express or implied,
                        including but not limited to implied warranties of
                        merchantability, fitness for a particular purpose, or
                        non-infringement.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>8.3</strong> You
                        assume all risks arising from the use or performance of
                        the software. You may not reproduce or redistribute the
                        Software except as permitted by the EULA or these Legal
                        Terms.
                      </li>
                    </ol>
                  </li>
                  <li id="acceptable-use">
                    <h4
                      style={{ color: "black" }}
                      className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                    >
                      9. ACCEPTABLE USE
                    </h4>
                    <ol style={{ listStyleType: "de" }}>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.1</strong> You
                        agree not to use the Product Website as mentioned above
                        or Services for any unlawful purpose or any purpose
                        prohibited under this clause. You agree not to use the
                        Product Website as mentioned above or Services in any
                        way that could damage the Website, Services or general
                        business of the Owner.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.2</strong> You
                        further agree not to use the Product Website as
                        mentioned above or Services:
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.3</strong> To
                        harass, abuse, or threaten others or otherwise violate
                        any person's legal rights;
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.4</strong> To
                        violate any intellectual property rights of the Owner or
                        any third party;
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.5</strong> To
                        upload or otherwise disseminate any computer viruses or
                        other software that may damage the property of another;
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.6</strong> To
                        perpetrate any fraud;
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.7</strong> To
                        engage in or create any unlawful gambling, sweepstakes,
                        or pyramid scheme;
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.8</strong> To
                        publish or distribute any obscene or defamatory
                        material;
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.9</strong> To
                        publish or distribute any material that incites
                        violence, hate or discrimination towards any group;
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.10</strong> To
                        unlawfully gather information about others;
                      </li>
                      <h4
                        style={{ color: "black" }}
                        className="pt-[25px] pb-[25px]"
                      >
                        You are prohibited from using the site or its content:
                      </h4>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.11</strong> To use
                        for any unlawful purpose;
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.12</strong> To
                        solicit others to perform or participate in any unlawful
                        acts;
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.13</strong> To
                        infringe on any third party's intellectual property or
                        proprietary rights, or rights of publicity or privacy,
                        whether knowingly or unknowingly;
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.14</strong> To
                        violate any local, federal or international law,
                        statute, ordinance or regulation;
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.15</strong> To
                        harass, abuse, insult, harm, defame, slander, disparage,
                        intimidate, or discriminate based on gender, sexual
                        orientation, religion, ethnicity, race, age, national
                        origin, or disability;
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.16</strong> To
                        submit false or misleading information or any content
                        which is defamatory, libellous, threatening, unlawful,
                        harassing, indecent, abusive, obscene, lewd, lascivious
                        or pornographic, or exploits minors in any way or
                        assists in human trafficking or content that would
                        violate rights of publicity and/or privacy or that would
                        violate any law;
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.17</strong> To
                        upload or transmit viruses or any other type of
                        malicious code that will or may be used in any way that
                        will affect the functionality or operation of the
                        Service or of any related website, other websites, or
                        the Internet;
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.18</strong> To
                        collect or track the personal information of others;
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.19</strong> To
                        damage, disable, overburden, or impair Product Website
                        as mentioned above or any other party's use of the
                        Website;
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.20</strong> To
                        spam, phish, pharm, pretext, spider, crawl, or scrape;
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.21</strong> To
                        interfere with or circumvent the security features of
                        the Service or
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.22</strong> To any
                        related website, other websites, or the Internet;
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.23</strong> To
                        personally threaten or have the effect of personally;
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.24</strong> To use
                        for any obscene or immoral purpose; threatening other
                        Users. We reserve the right to terminate your use of the
                        Service or any related website for
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.25</strong>{" "}
                        Violating any of the prohibited uses. We reserve the
                        full authority to review all content posted by Users on
                        the website.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.26</strong> You
                        acknowledge that Product Website, as mentioned above, is
                        not responsible or liable and does not control the
                        content of any information that may be posted to Product
                        Website as mentioned above by You or another User of
                        Product Website as mentioned above, and you are solely
                        responsible for the same. You agree that You shall not
                        upload, post, or transmit any content that you do not
                        have a right to make available (such as the intellectual
                        property of another party).
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.27</strong> You
                        agree to comply with all applicable laws, statutes and
                        regulations concerning your use of the Product Website
                        as mentioned above and further agree that you will not
                        transmit any information, data, text, files, links,
                        software, chats, communication or other materials that
                        are abusive, invasive of another's privacy, harassing,
                        defamatory, vulgar, obscene, unlawful, false,
                        misleading, harmful, threatening, hateful or racially or
                        otherwise objectionable, including without limitation
                        material of any kind or nature that encourages conduct
                        that could constitute a criminal offence, give rise to
                        civil liability or otherwise violate any applicable
                        local, state, provincial, national or international law
                        or regulation or encourage the use of controlled
                        substances.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>9.28</strong> We may,
                        but have no obligation to, monitor, edit or remove
                        content that we determine in our sole discretion are
                        unlawful, offensive, threatening, libellous, defamatory,
                        pornographic, obscene or otherwise objectionable or
                        violates any party's intellectual property or these
                        Terms of Service. You may not use our products for any
                        illegal or unauthorised purpose, nor may you, in the use
                        of the Service, violate any laws in your jurisdiction
                        (including but not limited to copyright laws).
                      </li>
                    </ol>
                  </li>

                  <li id="communication">
                    <h4
                      style={{ color: "black" }}
                      className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                    >
                      10. COMMUNICATION
                    </h4>
                    <ol>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>10.1</strong> You
                        understand that each time you use the product Website as
                        mentioned above in any manner, you agree to these Terms.
                        By agreeing to these Terms, you acknowledge that you are
                        interested in availing and purchasing the Services that
                        you have selected and consent to receive communications
                        via phone or electronic records from Product Website as
                        mentioned above, including Email messages telling you
                        about products and services offered by Product Website
                        as mentioned above (or its affiliates and partners) and
                        understanding your requirements. Communication can also
                        be by posting any notices on the Website. You agree that
                        the communications sent to You by the Product Website as
                        mentioned above shall not be construed as spam or bulk
                        under any law prevailing in any country where such
                        communication is received.
                      </li>
                    </ol>
                  </li>
                  <li id="sale-of-goods-services">
                    <h4
                      style={{ color: "black" }}
                      className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                    >
                      11. SALE OF GOODS/SERVICES
                    </h4>
                    <ol>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>11.1</strong> The
                        Owner may sell goods or services or allow third parties
                        to sell goods or services on the Website.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>11.2 </strong>The
                        Owner undertakes to be as accurate as possible with all
                        information regarding the goods and services, including
                        product descriptions and images.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>11.3</strong> The
                        Owner does not guarantee the accuracy or reliability of
                        any product information, and You acknowledge and agree
                        that You purchase such products at Your own risk.
                      </li>
                    </ol>
                  </li>
                  <li id="indemnification">
                    <h4
                      style={{ color: "black" }}
                      className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                    >
                      12. INDEMNIFICATION
                    </h4>
                    <ol>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 12.1 </strong>You
                        agree to defend and indemnify the Owner and any of its
                        affiliates (if applicable) and hold Us harmless against
                        any and all legal claims and demands, including
                        reasonable attorney's fees, which may arise from or
                        relate to Your use or misuse of Product Website as
                        mentioned above or Services, Your breach of these Terms
                        of Service, or Your conduct or actions.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 12.2 </strong>You
                        agree that the Owner shall be able to select its own
                        legal counsel and may participate in its own defence if
                        the Owner wishes.
                      </li>
                    </ol>
                  </li>
                  <li id="spam-policy">
                    <h4
                      style={{ color: "black" }}
                      className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                    >
                      13. SPAM POLICY
                    </h4>
                    <ol>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 13.1 </strong>You
                        are strictly prohibited from using the Product Website
                        as mentioned above or any of the Owner's Services for
                        illegal spam activities, including gathering Email ID
                        and personal information from others or sending any mass
                        commercial emails.
                      </li>
                    </ol>
                  </li>
                  <li id="third-party-links-content">
                    <h4
                      style={{ color: "black" }}
                      className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                    >
                      14. THIRD-PARTY LINKS &amp; CONTENT
                    </h4>
                    <ol>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 14.1 </strong> The
                        Owner may occasionally post links to third-party
                        websites or other services. You agree that the Owner is
                        not responsible or liable for any loss or damage caused
                        as a result of Your use of any third-party services
                        linked to or from Our Website.
                      </li>
                    </ol>
                  </li>
                  <li id="modification-variation">
                    <h4
                      style={{ color: "black" }}
                      className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                    >
                      15. MODIFICATION &amp; VARIATION
                    </h4>
                    <ol>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 15.1</strong> The
                        Owner may, from time to time and at any time without
                        notice to You, modify these Terms of Service. You agree
                        that the Owner has the right to modify these Terms of
                        Service or revise anything contained herein. You further
                        agree that all modifications to these Terms of Service
                        are in full force and effect immediately upon posting on
                        the Product Website as mentioned above and that
                        modifications or variations will replace any prior
                        version of these Terms of Service unless prior versions
                        are specifically referred to or incorporated into the
                        latest modification or variation of these Terms of
                        Service.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 15.2</strong> To the
                        extent any part or sub-part of these Terms of Service is
                        held ineffective or invalid by any court of law, You
                        agree that the prior, effective version of these Terms
                        of Service shall be considered enforceable and valid to
                        the fullest extent.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 15.3</strong> You
                        agree to routinely monitor these Terms of Service and
                        refer to the Effective Date posted at the top of these
                        Terms of Service to note modifications or variations.
                        You further agree to clear Your cache when doing so to
                        avoid accessing a prior version of these Terms of
                        Service. You agree that Your continued use of the
                        Product Website as mentioned above after any
                        modifications to these Terms of Service is a
                        manifestation of Your continued assent to these Terms of
                        Service. In the event that You fail to monitor any
                        modifications to or variations of these Terms of
                        Service, You agree that such failure shall be considered
                        an affirmative waiver of Your right to review the
                        modified Agreement.
                      </li>
                    </ol>
                  </li>

                  <li id="entire-agreement">
                    <h4
                      style={{ color: "black" }}
                      className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                    >
                      16. ENTIRE AGREEMENT
                    </h4>
                    <ol>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 16.1</strong> This
                        Agreement constitutes the entire understanding between
                        the Parties with respect to any and all use of this
                        Website. This Agreement supersedes and replaces all
                        prior or contemporaneous agreements or understandings,
                        written or oral, regarding the use of this Website.
                      </li>
                    </ol>
                  </li>
                  <li id="service-interruptions">
                    <h4
                      style={{ color: "black" }}
                      className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                    >
                      17. SERVICE INTERRUPTIONS
                    </h4>
                    <ol>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 17.1</strong> The
                        Owner may need to interrupt Your access to the Product
                        Website, as mentioned above, to perform maintenance or
                        emergency services on a scheduled or unscheduled basis.
                        You agree that Your access to the Product Website, as
                        mentioned above, may be affected by unanticipated or
                        unscheduled downtime for any reason but that the Owner
                        shall have no liability for any damage or loss caused as
                        a result of such downtime.
                      </li>
                    </ol>
                  </li>
                  <li id="term-termination-suspension">
                    <h4
                      style={{ color: "black" }}
                      className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                    >
                      18. TERM, TERMINATION &amp; SUSPENSION
                    </h4>
                    <ol>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 18.1</strong> The
                        Owner may terminate these Terms of Service with You at
                        any time for any reason, with or without cause. The
                        Owner specifically reserves the right to terminate these
                        Terms of Service if You violate any of the terms
                        outlined herein, including, but not limited to,
                        violating the intellectual property rights of the Owner
                        or a third party, failing to comply with applicable laws
                        or other legal obligations, and/or publishing or
                        distributing illegal material.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 18.2</strong> If You
                        have registered for an account with Us, You may also
                        terminate these Terms of Service at any time by
                        contacting us and requesting termination.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 18.3</strong> Please
                        keep in mind that any outstanding fees will still be due
                        even after termination of Your account. At the
                        termination of these Terms of Service, any provisions
                        that would be expected to survive termination by their
                        nature shall remain in full force and effect.
                      </li>
                    </ol>
                  </li>

                  <li id="no-warranties">
                    <h4
                      style={{ color: "black" }}
                      className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                    >
                      19. NO WARRANTIES
                    </h4>
                    <ol>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 19.1 </strong>You
                        agree that Your use of The Product Website as mentioned
                        above and Services is at Your sole and exclusive risk
                        and that any services provided by Us are on an “As Is"
                        basis. The Owner hereby expressly disclaims any and all
                        express or implied warranties of any kind, including,
                        but not limited to, the implied warranty of fitness for
                        a particular purpose and the implied warranty of
                        merchantability. The Owner makes no warranties that
                        Product Website as mentioned above or Services will meet
                        Your needs or that Product Website as mentioned above or
                        Services will be uninterrupted, error-free, or secure.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 19.2</strong> The
                        Owner also makes no warranties as to the reliability or
                        accuracy of any information on the Product Website as
                        mentioned above or obtained through the Services. You
                        agree that any damage that may occur to You through Your
                        computer system or as a result of the loss of Your data
                        from Your use of Product Website as mentioned above or
                        Services is Your sole responsibility and that the Owner
                        is not liable for any damage or loss. All information,
                        software, products, services and related graphics
                        provided on this site are “as is" and “as available”
                        basis without warranty of any kind, either expressed or
                        implied. Product Website, as mentioned above, all
                        warranties, expressed or implied, including, without
                        limitation, all implied warranties of merchantability
                        for a particular purpose, title and non-infringement or
                        arising from a course of dealing usage or trade
                        practice. We make no representation about the
                        suitability of the information, software, products, and
                        services contained on this Website for any purpose, and
                        the inclusion or offering of any products or services on
                        this Website does not constitute any endorsement or
                        recommendation of such products or services.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 19.3</strong> The
                        Product Website, as mentioned above, makes no warranty
                        that the use of The Product Website mentioned above will
                        be uninterrupted, timely, secure, without defect or
                        error-free. You expressly agree that the use of the site
                        is at your own risk. Product Website, as mentioned
                        above, shall not be responsible for any content found on
                        the Website. Your use of any information or materials on
                        this site or otherwise obtained through the use of this
                        Website is entirely at your own risk, for which we shall
                        not be liable. It shall be your own responsibility to
                        ensure that any products, services or information
                        available through this website meet your specific
                        requirements. Product Website, as mentioned above,
                        assumes no responsibility for the accuracy, currency,
                        completeness or usefulness of information, views,
                        opinions, or advice in any material contained on the
                        Website. Any information from third parties or
                        advertisers is made available without making any
                        changes, and so the Product Website, as mentioned above
                        cannot guarantee accuracy and is not liable for any
                        inconsistencies arising thereof. All postings, messages,
                        advertisements, photos, sounds, images, text, files,
                        video, or other materials posted on, transmitted
                        through, or linked from the Website are solely the
                        responsibility of the person from whom such Content
                        originated, and Product Website as mentioned above does
                        not control and is not responsible for Content available
                        on the Website. There may be instances when incorrect
                        information is published inadvertently on our Website or
                        in the Service, such as typographical errors,
                        inaccuracies or omissions that may relate to product
                        descriptions, pricing, promotions, offers, product
                        shipping charges, transit times and availability. Any
                        errors, inaccuracies, or omissions may be corrected at
                        our discretion at any time, and we may change or update
                        information or cancel orders if any information in the
                        Service or on any related website is inaccurate at any
                        time without prior notice (including after you have
                        submitted your order). We undertake no obligation to
                        update, amend or clarify information in the Service or
                        on any related website, including, without limitation,
                        pricing information, except as required by law. No
                        specified update or refresh date applied in the Service
                        or on any related website should be taken to indicate
                        that all information in the Service or on any related
                        website has been modified or updated.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 19.4</strong>{" "}
                        Product Website, as mentioned above, shall not be
                        responsible for any interaction between you and the
                        other users of the Website. Under no circumstances will
                        Product Website, as mentioned above, be liable for any
                        goods, services, resources, or content available through
                        such third-party dealings or communications or for any
                        harm related thereto. Product Website, as mentioned
                        above is under no obligation to become involved in any
                        disputes between you and other users of Product Website
                        as mentioned above or between you and any other third
                        parties. You agree to release the Product Website, as
                        mentioned above, from any and all claims, demands, and
                        damages arising out of or in connection with such
                        dispute. You agree and understand that while Product
                        Website, as mentioned above, has made reasonable efforts
                        to safeguard the Website, it cannot and does not ensure
                        or make any representations that Product Website, as
                        mentioned above, or any of the information provided by
                        You cannot be hacked by any unauthorised third parties.
                        You specifically agree that Product Website, as
                        mentioned above shall not be responsible for
                        unauthorised access to or alteration of Your
                        transmissions or data, any material or data sent or
                        received or not sent or received, or any transactions
                        entered into through the Website. You hereby agree and
                        confirm that Product Website, as mentioned above, shall
                        not be held liable or responsible in any manner
                        whatsoever for such hacking or any loss or damages
                        suffered by you due to unauthorised access of Product
                        Website, as mentioned above, by third parties or for any
                        such use of the information provided by You or any spam
                        messages or information that You may receive from any
                        such unauthorised third party (including those which are
                        although sent representing the name of Product Website
                        as mentioned above but have not been authorised by the
                        Website) which is in violation or contravention of this
                        Terms of Service or the Privacy Policy. You specifically
                        agree that the Product Website, as mentioned above, is
                        not responsible or liable for any threatening,
                        defamatory, obscene, offensive, or illegal content or
                        conduct of any other party or any infringement of
                        another's rights, including intellectual property
                        rights. You specifically agree that the Product Website,
                        as mentioned above, is not responsible for any content
                        sent using and/or included on the Product Website as
                        mentioned above by any third party.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 19.5 </strong>{" "}
                        Product Website, as mentioned above, has no liability
                        and will make no refund in the event of any delay,
                        cancellation, strike, force majeure, or other causes
                        beyond their direct control, and they have no
                        responsibility for any additional expense, omissions,
                        delays or acts of any government or authority. You will
                        be solely responsible for any damage to your computer
                        system or loss of data that results from the download of
                        any information and/or material. Some jurisdictions do
                        not allow the exclusion of certain warranties, so some
                        of the above exclusions may not apply to you. In no
                        event shall Product Website, as mentioned above be
                        liable for any direct, indirect, punitive, incidental,
                        special, consequential damages or any damages
                        whatsoever, including, without limitation, damages for
                        loss of use, data or profits, arising out of or in any
                        way connected with the use or performance of the site,
                        with the delay or inability to use the site or related
                        services, the provision of or failure to provide
                        Services, or to deliver the products or for any
                        information, software, products, services and related
                        graphics obtained through the site, or any interaction
                        between you and other participants of Product Website as
                        mentioned above or otherwise arising out of the use of
                        the Website, damages resulting from use of or reliance
                        on the information present, whether based on contract,
                        tort, negligence, strict liability or otherwise, even if
                        Product Website as mentioned above or any of its
                        affiliates/suppliers has been advised of the possibility
                        of damages. We are not liable for any direct, indirect,
                        incidental, or consequential damages arising from your
                        use of the Website, including loss of data or revenue,
                        even if we have been advised of such possibilities.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 19.6 </strong>You
                        accept all responsibility for and hereby agree to
                        indemnify and hold harmless Us from and against any
                        actions taken by you or by any person authorised to use
                        your account, including, without limitation, disclosure
                        of passwords to third parties. By using the Website, you
                        agree to defend, indemnify, and hold harmless the
                        indemnified parties from any and all liability regarding
                        your use of the site or participation in any site's
                        activities. If you are dissatisfied with the Website,
                        the Services or any portion thereof, or do not agree
                        with these terms, your only recourse and exclusive
                        remedy shall be to stop using the site.
                      </li>
                    </ol>
                  </li>

                  <li id="limitation-on-liability">
                    <h4
                      style={{ color: "black" }}
                      className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                    >
                      20. LIMITATION ON LIABILITY
                    </h4>
                    <ol>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 20.1</strong> The
                        Owner is not liable for any damage that may occur to You
                        as a result of Your use of Product Website as mentioned
                        above or Services, to the fullest extent permitted by
                        law. We are not liable for any direct, indirect,
                        incidental, or consequential damages arising from your
                        use of the Product Website as mentioned above, including
                        loss of data or revenue, even if we have been advised of
                        such possibilities.
                      </li>
                    </ol>
                  </li>

                  <li id="general-provisions">
                    <h4
                      style={{ color: "black" }}
                      className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                    >
                      21. GENERAL PROVISIONS
                    </h4>
                    <ol>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 21.1 </strong>
                        <strong style={{ color: "black" }}>
                          LANGUAGE:
                        </strong>{" "}
                        All communications made or notices given pursuant to
                        these Terms of Service shall be in the English language.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 21.2 </strong>{" "}
                        <strong style={{ color: "black" }}>
                          JURISDICTION, VENUE & GOVERNING LAW:
                        </strong>{" "}
                        Through Your use of the Product Website as mentioned
                        above or Services, You agree that the laws of India
                        shall govern any matter or dispute relating to or
                        arising out of these Terms of Service, as well as any
                        dispute of any kind that may arise between You and the
                        Owner, with the exception of its conflict of law
                        provisions. In case any litigation specifically
                        permitted under these Terms of Service is initiated, the
                        Parties agree to submit to the exclusive jurisdiction of
                        the courts in Maharashtra, India. The Parties agree that
                        this choice of law, venue, and jurisdiction provision is
                        not permissive but rather mandatory in nature. You
                        hereby waive the right to any objection of venue,
                        including assertion of the doctrine of forum
                        non-conveniens or similar doctrine.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 21.3 </strong>{" "}
                        <strong style={{ color: "black" }}>ASSIGNMENT:</strong>{" "}
                        This Agreement, or the rights granted hereunder, may not
                        be assigned, sold, leased or otherwise transferred in
                        whole or part by You. Should these Terms of Service, or
                        the rights granted hereunder, be assigned, sold, leased
                        or otherwise transferred by the Owner, the rights and
                        liabilities of the Owner will bind and insure to any
                        assignees, administrators, successors and executors.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 21.4 </strong>{" "}
                        <strong style={{ color: "black" }}>
                          SEVERABILITY:
                        </strong>{" "}
                        If any part or sub-part of these Terms of Service is
                        held invalid or unenforceable by a court of law or
                        competent arbitrator, the remaining parts and sub-parts
                        will be enforced to the maximum extent possible. In such
                        conditions, the remainder of these Terms of Service
                        shall continue in full force.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 21.5 </strong>{" "}
                        <strong style={{ color: "black" }}>NO WAIVER:</strong>{" "}
                        In the event that We fail to enforce any provision of
                        these Terms of Service, this shall not constitute a
                        waiver of any future enforcement of that provision or of
                        any other provision. Waiver of any part or sub-part of
                        these Terms of Service will not constitute a waiver of
                        any other part or sub-part.
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 21.6</strong>{" "}
                        <strong
                          style={{ color: "black" }}
                          className="pt-[10px]  text-justify"
                        >
                          HEADINGS FOR CONVENIENCE ONLY:
                        </strong>
                        <ol>
                          <li
                            style={{ color: "black" }}
                            className="pt-[10px]  text-justify"
                          >
                            <strong style={{ color: "black" }}> 21.6.1</strong>{" "}
                            Headings of parts and sub-parts under these Terms of
                            Service are for convenience and organisation only.
                            Headings shall not affect the meaning of any
                            provisions of these Terms of Service.
                          </li>
                        </ol>
                      </li>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}>21.7 </strong>{" "}
                        <strong style={{ color: "black" }}>
                          NO AGENCY, PARTNERSHIP OR JOINT VENTURE:
                        </strong>
                        <ol>
                          <li
                            style={{ color: "black" }}
                            className="pt-[10px]  text-justify"
                          >
                            <strong style={{ color: "black" }}> 21.7.1 </strong>{" "}
                            No agency, partnership, or joint venture has been
                            created between the Parties as a result of these
                            Terms of Service. No Party has any authority to bind
                            the other to third parties.
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </li>

                  <li id="force-majeure">
                    <h4
                      style={{ color: "black" }}
                      className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                    >
                      22. FORCE MAJEURE
                    </h4>
                    <ol>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 22.1 </strong>The
                        Owner is not liable for any failure to perform due to
                        causes beyond its reasonable control, including, but not
                        limited to, acts of God, acts of civil authorities, acts
                        of military authorities, riots, embargoes, acts of
                        nature and natural disasters, and other acts which may
                        be due to unforeseen circumstances.
                      </li>
                    </ol>
                  </li>
                  <li id="electronic-communications-permitted">
                    <h4
                      style={{ color: "black" }}
                      className="pt-[25px] text-[18px] sm:text-[25px] font-bold"
                    >
                      23. ELECTRONIC COMMUNICATIONS PERMITTED
                    </h4>
                    <ol>
                      <li
                        style={{ color: "black" }}
                        className="pt-[10px]  text-justify"
                      >
                        <strong style={{ color: "black" }}> 23.1 </strong>{" "}
                        Electronic communications are permitted to both Parties
                        under these Terms of Service, including email id or fax.
                        For any questions or concerns, please email us at
                        Organisation Email ID as mentioned above.
                      </li>
                    </ol>
                  </li>
                </ol>
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
export default TermsOfService;
