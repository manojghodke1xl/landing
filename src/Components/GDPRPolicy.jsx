import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { getSeoMeta } from "../utils/getSeoMeta";
import Seo from "../Seo";
import logo from "/Images/logo-white.webp";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { getSelectedCountry } from "../utils/addresses";

const LazyFooter = React.lazy(() => import("./Footer"));

export const GDPRPolicy = () => {
  const seo = getSeoMeta("https://books.1xl.com/gdpr-policy");
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
              <div className="w-full flex justify-center bg-white">
                <div className="w-fullbg-white">
                  <h4 className=" text-black text-[25px] md:text-[30px] font-semibold pt-[25px] ">
                    {" "}
                    GDPR Policy
                  </h4>

                  <ol
                    style={{ color: "black" }}
                    className="privacy-policy-intro-list"
                  >
                    <li style={{ color: "black" }} className="pt-[10px]">
                      <strong
                        style={{
                          color: "black",
                        }}
                      >
                        Organisation Name:{" "}
                      </strong>{" "}
                      One XL Info LLP (referred to as “Company”)
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
                        Last Modified Date of GDPR Policy:
                      </strong>{" "}
                      28th March 2025
                    </li>
                  </ol>

                  <div className="policies-content">
                    <p className="text-gray">
                      <strong className="text-black">
                        Website Data Protection Statement for Data Subjects
                        Pursuant to Articles 13 and 14 of the EU General Data
                        Protection Regulation
                      </strong>
                    </p>
                    <p className="text-gray">
                      Data protection is a particularly high priority for the
                      management of{" "}
                      <strong className="text-black">
                        Company Website as mentioned above
                      </strong>
                      . The use of the website of mentioned above is possible
                      without any indication of personal data; however, if a
                      data subject wants to use special enterprise services via
                      our website, processing of personal data could become
                      necessary. If the processing of personal data is necessary
                      and there is no statutory basis for such processing, we
                      generally obtain consent from the data subject. We may ask
                      You to provide Us with certain personally identifiable
                      information that can be used to contact or identify
                      You.&nbsp;
                    </p>
                    <p className="text-gray">
                      The processing of personal data, such as the name,
                      address, email id, or telephone number of a data subject
                      shall always be in line with the General Data Protection
                      Regulation (GDPR), and in accordance with the
                      country-specific data protection regulations applicable to{" "}
                      <strong className="text-black">
                        {" "}
                        Company Website as mentioned above
                      </strong>
                      . By means of this data protection declaration, our
                      company would like to inform the general public of the
                      nature, scope, and purpose of the personal data we
                      collect, use and process. Furthermore, data subjects are
                      informed, by means of this data protection declaration, of
                      the rights to which they are entitled.
                    </p>
                    <p className="text-gray">
                      As the <strong className="text-black">controller</strong>,{" "}
                      <strong className="text-black">
                        Company Website as mentioned above
                      </strong>{" "}
                      has implemented technical and organisational measures to
                      ensure the most complete protection of personal data
                      processed through this website. However, internet-based
                      data transmissions may in principle have security gaps, so
                      absolute protection may not be guaranteed. For this
                      reason, every data subject is free to transfer personal
                      data via alternative means, e.g. by telephone.
                    </p>
                    <p className="text-graypt mt-4 mb-3 text-2xl">
                      <strong className="text-black ">Table of Contents</strong>
                    </p>
                    <ul>
                      <li id="definitions">
                        <strong className="text-black">1. Definitions</strong>
                      </li>
                    </ul>
                    <ul
                      style={{ paddingLeft: "20px", listStyleType: "circle" }}
                    >
                      <li className="text-black">Website</li>
                      <li className="text-black">Personal Data</li>
                      <li className="text-black">Data Subject</li>
                      <li className="text-black">Processing</li>
                      <li className="text-black">Restriction of Processing</li>
                      <li className="text-black">Profiling</li>
                      <li className="text-black">Pseudonymisation</li>
                      <li className="text-black">Controller</li>
                      <li className="text-black">Processor</li>
                      <li className="text-black">Recipient</li>
                      <li className="text-black">Third Party</li>
                    </ul>

                    <ul>
                      <li id="name-and-address-of-the-controller">
                        &nbsp;2.&nbsp; Name and Address of the Controller
                      </li>
                    </ul>
                    <ul>
                      <li id="collection-of-general-data-and-information">
                        &nbsp;3.&nbsp; Collection of General Data and
                        Information
                      </li>
                    </ul>
                    <ul>
                      <li id="subscription-to-newsletters">
                        &nbsp;4.&nbsp; Subscription to Newsletters
                      </li>
                    </ul>
                    <ul>
                      <li id="newsletter-tracking">
                        &nbsp;5.&nbsp; Newsletter Tracking
                      </li>
                    </ul>
                    <ul>
                      <li id="routine-erasure-and-data-blocking">
                        &nbsp;6.&nbsp; Routine Erasure & Data Blocking
                      </li>
                    </ul>
                    <ul>
                      <li id="right-to-confirmation">
                        &nbsp;7.&nbsp; Right to Confirmation (Art. 15 GDPR)
                      </li>
                    </ul>
                    <ul>
                      <li id="right-of-access">
                        &nbsp;8.&nbsp; Right of Access (Art. 15 GDPR)
                      </li>
                    </ul>
                    <ul>
                      <li id="right-to-rectification">
                        &nbsp;9.&nbsp; Right to Rectification (Art. 16 GDPR)
                      </li>
                    </ul>
                    <ul>
                      <li id="right-to-erasure">
                        10. Right to Erasure / Right to be Forgotten (Art. 17
                        GDPR)
                      </li>
                    </ul>
                    <ul>
                      <li id="right-to-restriction-of-processing">
                        11. Right to Restriction of Processing (Art. 18 GDPR)
                      </li>
                    </ul>
                    <ul>
                      <li id="right-to-data-portability">
                        12. Right to Data Portability (Art. 20 GDPR)
                      </li>
                    </ul>
                    <ul>
                      <li id="right-to-object">
                        13. Right to Object (Art. 21 GDPR)
                      </li>
                    </ul>
                    <ul>
                      <li id="automated-decision-making-and-profiling">
                        14. Automated Decision-Making & Profiling
                      </li>
                    </ul>
                    <ul>
                      <li id="right-to-withdraw-consent">
                        15. Right to Withdraw Consent
                      </li>
                    </ul>
                    <ul>
                      <li id="data-protection-for-job-applications">
                        16. Data Protection for Job Applications & Hiring
                        Process
                      </li>
                    </ul>
                    <ul>
                      <li id="legal-basis-for-processing">
                        17. Legal Basis for Processing
                      </li>
                    </ul>
                    <ul>
                      <li id="law-enforcement-and-legal-disclosure">
                        18. Law Enforcement & Legal Disclosure
                      </li>
                    </ul>
                    <ul>
                      <li id="security-measures-for-data-protection">
                        19. Security Measures for Data Protection
                      </li>
                    </ul>
                    <ul>
                      <li id="email-marketing-and-communication">
                        20. Email Marketing & Communication
                      </li>
                    </ul>
                    <ul>
                      <li id="payments-and-financial-transactions">
                        21. Payments & Financial Transactions
                      </li>
                    </ul>
                    <ul>
                      <li id="retention-period-for-personal-data">
                        22. Retention Period for Personal Data
                      </li>
                    </ul>
                    <ul>
                      <li id="provision-of-personal-data">
                        23. Provision of Personal Data: Contractual & Legal
                        Requirements
                      </li>
                    </ul>
                    <ul>
                      <li id="it-security-and-encryption-measures">
                        24. IT-Security & Encryption Measures
                      </li>
                    </ul>
                    <ul>
                      <li id="existence-of-automated-decision-making">
                        25. Existence of Automated Decision-Making
                      </li>
                    </ul>
                    <ul>
                      <li id="changes-and-updates-to-the-privacy-policy">
                        26. Changes & Updates to the Privacy Policy
                      </li>
                    </ul>

                    <h3 className="pt-25 pt-4 text-2xl mb-2" id="Definitions">
                      <strong className="text-black">1. Definitions</strong>
                    </h3>
                    <p className="text-gray">
                      We use the following terms in this Privacy Policy:
                    </p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "18px" }}>
                      <li className="text-black">
                        <strong className="text-black">Website:</strong> Refers
                        to all online properties of{" "}
                        <strong className="text-black">
                          Company Website as mentioned above
                        </strong>
                        , including services like SaaS, courses, events,
                        podcasts, and travel bookings.
                      </li>
                      <li className="text-black">
                        <strong className="text-black">Personal Data:</strong>{" "}
                        Personal data means any information relating to an
                        identified or identifiable natural person (&ldquo;data
                        subject&rdquo;). An identifiable natural person is one
                        who can be identified, directly or indirectly, in
                        particular by reference to an identifier such as a name,
                        an identification number, location data, an online
                        identifier or to one or more factors specific to the
                        physical, physiological, genetic, mental, economic,
                        cultural or social identity of that natural person.
                      </li>
                      <li className="text-black">
                        <strong className="text-black">Data subject:</strong>{" "}
                        Data subject is any identified or identifiable natural
                        person, whose personal data is processed by the
                        controller responsible for the processing.
                      </li>
                      <li className="text-black">
                        <strong className="text-black">Processing:</strong>{" "}
                        Processing is any operation or set of operations which
                        is performed on personal data or on sets of personal
                        data, whether or not by automated means, such as
                        collection, recording, organisation, structuring,
                        storage, adaptation or alteration, retrieval,
                        consultation, use, disclosure by transmission,
                        dissemination or otherwise making available, alignment
                        or combination, restriction, erasure or destruction.
                      </li>
                      <li className="text-black">
                        <strong className="text-black">
                          Restriction of Processing:
                        </strong>{" "}
                        Restriction of processing is the marking of stored
                        personal data with the aim of limiting their processing
                        in the future.
                      </li>
                      <li className="text-black">
                        <strong className="text-black">Profiling:</strong>{" "}
                        Profiling means any form of automated processing of
                        personal data consisting of the use of personal data to
                        evaluate certain personal aspects relating to a natural
                        person, in particular to analyse or predict aspects
                        concerning that natural person&rsquo;s performance at
                        work, economic situation, health, personal preferences,
                        interests, reliability, behaviour, location or movements
                        (used in marketing, SaaS tools, events, etc.).
                      </li>
                      <li className="text-black">
                        <strong className="text-black">
                          Pseudonymisation:
                        </strong>{" "}
                        Pseudonymisation is the processing of personal data in
                        such a manner that the personal data can no longer be
                        attributed to a specific data subject without the use of
                        additional information, provided that such additional
                        information is kept separately and is subject to
                        technical and organisational measures to ensure that the
                        personal data are not attributed to an identified or
                        identifiable natural person.
                      </li>
                      <li className="text-black">
                        <strong className="text-black">Controller:</strong>{" "}
                        Controller is responsible for the processing is the
                        natural or legal person, public authority, agency or
                        other body which, alone or jointly with others,
                        determines the purposes and means of the processing of
                        personal data; where the purposes and means of such
                        processing are determined by Union or Member State law,
                        the controller or the specific criteria for its
                        nomination may be provided for by Union or Member State
                        law.
                      </li>
                      <li className="text-black">
                        <strong className="text-black">Processor:</strong>{" "}
                        Processor is a natural or legal person, public
                        authority, agency or other body which processes personal
                        data on behalf of the controller.
                      </li>
                      <li className="text-black">
                        <strong className="text-black">Recipient:</strong>{" "}
                        Recipient is a natural or legal person, public
                        authority, agency or another body, to which the personal
                        data are disclosed, whether a third party or not.
                        However, public authorities which may receive personal
                        data in the framework of a particular inquiry in
                        accordance with Union or Member State law shall not be
                        regarded as recipients; the processing of that data by
                        those public authorities shall be in compliance with the
                        applicable data protection rules according to the
                        purposes of the processing.
                      </li>
                      <li className="text-black">
                        <strong className="text-black">Third party:</strong> A
                        third party is a natural or legal person, public
                        authority, agency or body other than the data subject,
                        controller, processor and persons who, under the direct
                        authority of the controller or processor, are authorised
                        to process personal data.
                      </li>
                      <li className="text-black">
                        <strong className="text-black">Consent:</strong> Consent
                        of the data subject is any freely given, specific,
                        informed and unambiguous indication of the wishes by
                        which he or she, by a statement or by clear affirmative
                        action, signifies agreement to the processing of
                        personal data relating to him or her.
                      </li>
                    </ul>
                    <h3 className="mb-3 mt-4 text-2xl">
                      <strong className="text-black">
                        2. Name and Address of the Controller
                      </strong>
                    </h3>
                    <p className="text-gray">
                      Controller for the purposes of the General Data Protection
                      Regulation (GDPR), other data protection laws applicable
                      in Member states of the European Union and other
                      provisions related to data protection is:
                    </p>
                    <p className="text-gray">
                      <strong className="text-black">One XL Info LLP</strong>
                      <strong className="text-black"></strong> - <br />
                      Registered Address: 3, Jainam Tower, 3, Sai Park, Belthika
                      Nagar, Thergaon, Pune - 411033, Maharashtra, India. <br />
                      Email ID: contact@1XL.com
                    </p>
                    <h3 className="mb-3 mt-4 text-2xl">
                      <strong className="text-black">
                        3. Collection of General Data and Information
                      </strong>
                    </h3>
                    <p className="text-gray mb-2">
                      The website of One XL Info LLP collects a series of
                      general data and information when a data subject or
                      automated system calls up the website. This general data
                      and information are stored in the server log files. The
                      collected data may include:
                    </p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "18px" }}>
                      <li
                        className="text-black pb-0"
                        style={{ lineHeight: "18px" }}
                      >
                        The browser types and versions used,
                      </li>
                      <li
                        className="text-black pb-0"
                        style={{ lineHeight: "18px" }}
                      >
                        The operating system used by the accessing system,
                      </li>
                      <li
                        className="text-black pb-0"
                        style={{ lineHeight: "18px" }}
                      >
                        The website from which an accessing system reaches our
                        website (so-called referrers),
                      </li>
                      <li
                        className="text-black pb-0"
                        style={{ lineHeight: "18px" }}
                      >
                        The sub-websites accessed on our platform (e.g., SaaS
                        products, online courses, event pages, podcasts, or
                        travel bookings),
                      </li>
                      <li
                        className="text-black pb-0"
                        style={{ lineHeight: "18px" }}
                      >
                        The date and time of access to the website,
                      </li>
                      <li
                        className="text-black pb-0"
                        style={{ lineHeight: "18px" }}
                      >
                        An Internet protocol address (IP address),
                      </li>
                      <li
                        className="text-black pb-0"
                        style={{ lineHeight: "18px" }}
                      >
                        The Internet service provider of the accessing system,
                      </li>
                      <li
                        className="text-black pb-0"
                        style={{ lineHeight: "18px" }}
                      >
                        Any other similar data and information that may be used
                        in the event of attacks on our information technology
                        systems.
                      </li>
                    </ul>
                    <p className="text-gray">
                      When using this general data and information,{" "}
                      <strong className="text-black">
                        Company Website as mentioned above
                      </strong>{" "}
                      does not draw any conclusions about the data subject.
                      Instead, this information is required to:
                    </p>
                    <ul
                      style={{ listStyleType: "circle", paddingLeft: "16px" }}
                    >
                      <li
                        className="text-black pb-0"
                        style={{ lineHeight: "18px" }}
                      >
                        Deliver the content of our website correctly,
                      </li>
                      <li
                        className="text-black pb-0"
                        style={{ lineHeight: "18px" }}
                      >
                        Optimise the content of our website as well as its
                        advertisements, particularly for industries like SaaS
                        solutions, online courses, events, podcasts, and travel
                        bookings,
                      </li>
                      <li
                        className="text-black pb-0"
                        style={{ lineHeight: "18px" }}
                      >
                        Ensure the long-term viability of our information
                        technology systems and website technology,
                      </li>
                      <li
                        className="text-black pb-0"
                        style={{ lineHeight: "18px" }}
                      >
                        Provide law enforcement authorities with the information
                        necessary for criminal prosecution in case of a
                        cyber-attack.
                      </li>
                    </ul>
                    <p className="text-gray">
                      Therefore,{" "}
                      <strong className="text-black">
                        Company Website as mentioned above
                      </strong>{" "}
                      analyses anonymously collected data and information
                      statistically to enhance the data protection and security
                      of our company. This ensures an optimal level of
                      protection for the personal data we process across all our
                      services (SaaS, courses, events, podcasts, and travel).
                      The anonymous data in the server log files are stored
                      separately from all personal data provided by a data
                      subject.
                    </p>
                    <h3 className="mb-3 mt-4 text-2xl">
                      <strong className="text-black">
                        4. Subscription to Newsletters
                      </strong>
                    </h3>
                    <p className="text-gray">
                      On the website, users are given the opportunity to
                      subscribe to our enterprise&rsquo;s newsletter. The input
                      mask used for this purpose determines what personal data
                      are transmitted, as well as when the newsletter is ordered
                      from the controller.
                    </p>
                    <p className="text-gray">
                      <strong className="text-black">
                        Company Website as mentioned above
                      </strong>{" "}
                      informs its customers and business partners regularly by
                      means of a newsletter about company offers related to our
                      services, including SaaS products, online courses, events,
                      podcasts, and travel bookings. The enterprise&rsquo;s
                      newsletter may only be received by the data subject if:
                      (1) The data subject has a valid email id, and (2) The
                      data subject registers for the newsletter shipping.
                    </p>
                    <p className="text-gray">
                      A confirmation email will be sent to the email id
                      registered by a data subject for the first time for
                      newsletter shipping, for legal reasons, in the double
                      opt-in procedure. This confirmation email is used to prove
                      whether the owner of the email id, as the data subject, is
                      authorised to receive the newsletter.
                    </p>
                    <p className="text-gray">
                      During the registration for the newsletter, we also store
                      the IP address of the computer system assigned by the
                      Internet service provider (ISP) and used by the data
                      subject at the time of registration, as well as the date
                      and time of registration. The collection of this data is
                      necessary to understand the (possible) misuse of the email
                      id of a data subject at a later date, and it therefore
                      serves the aim of the legal protection of the controller.
                    </p>
                    <p className="text-gray">
                      The personal data collected as part of a registration for
                      the newsletter will only be used to send our newsletter.
                      In addition, subscribers to the newsletter may be informed
                      by email as long as this is necessary for the operation of
                      the newsletter service or a registration in question, such
                      as in the event of modifications to the newsletter offer
                      or a change in technical circumstances.
                    </p>
                    <p className="text-gray">
                      There will be no transfer of personal data collected by
                      the newsletter service to third parties. The subscription
                      to our newsletter may be terminated by the data subject at
                      any time. The consent to the storage of personal data,
                      which the data subject has given for shipping the
                      newsletter, may be revoked at any time.
                    </p>
                    <p className="text-gray">
                      For the purpose of revocation of consent, a corresponding
                      link is found in each newsletter. It is also possible to
                      unsubscribe from the newsletter at any time directly on
                      the website of the controller or to communicate this to
                      the controller in a different way.
                    </p>
                    <h3 className="mb-3 mt-4 text-2xl">
                      <strong className="text-black">
                        5. Newsletter Tracking
                      </strong>
                    </h3>
                    <p className="text-gray">
                      Our newsletter contains so-called tracking pixels. A
                      tracking pixel is a miniature graphic embedded in such
                      emails, which are sent in HTML format to enable log file
                      recording and analysis. This allows a statistical analysis
                      of the success or failure of online marketing campaigns,
                      including those related to our SaaS products, online
                      courses, events, podcasts, and travel bookings. Based on
                      the embedded tracking pixel,{" "}
                      <strong className="text-black">
                        Company Website as mentioned above
                      </strong>{" "}
                      may see if and when an email was opened by a data subject,
                      and which links in the email were called up by data
                      subjects.
                    </p>
                    <p className="text-gray">
                      Such personal data collected in the tracking pixels
                      contained in the newsletters are stored and analysed by
                      the controller in order to optimise the shipping of the
                      newsletter, as well as to adapt the content of future
                      newsletters even better to the interests of the data
                      subject. This includes tailoring content for 1xl website,
                      SaaS updates, new course offerings, event invites,
                      exclusive podcast content, or special travel deals.
                    </p>
                    <p className="text-gray">
                      These personal data will not be passed on to third
                      parties. Data subjects are at any time entitled to revoke
                      the respective separate declaration of consent issued by
                      means of the double-opt-in procedure. After a revocation,
                      these personal data will be deleted by the controller.{" "}
                      <strong className="text-black">
                        Company Website as mentioned above
                      </strong>{" "}
                      automatically regards a withdrawal from the receipt of the
                      newsletter as a revocation.
                    </p>
                    <h3 className="mb-3 mt-4 text-2xl">
                      <strong className="text-black">
                        6. Routine Erasure &amp; Data Blocking
                      </strong>
                    </h3>
                    <p className="text-gray">
                      The data controller shall process and store the personal
                      data of the data subject only for the period necessary to
                      achieve the purpose of storage, or as far as this is
                      granted by the European legislator or other legislators in
                      laws or regulations to which the controller is subject to.
                      This applies to all personal data collected through our
                      One XL website, SaaS platforms, online courses, events,
                      podcasts, and travel bookings. If the storage purpose is
                      no longer applicable, or if a storage period prescribed by
                      the European legislator or another competent legislator
                      expires, the personal data are routinely blocked or erased
                      in accordance with legal requirements, whether this data
                      pertains to customer subscriptions, course registrations,
                      event bookings, podcast sign-ups, or travel reservations.
                    </p>
                    <p className="text-gray">
                      <strong className="text-black">
                        Rights of the data subject
                      </strong>
                    </p>
                    <h3 className="mb-3 mt-4 text-2xl">
                      <strong className="text-black">
                        7. Right to Confirmation (Art. 15 GDPR)
                      </strong>
                    </h3>
                    <p className="text-gray">
                      Each data subject shall have the right granted by the
                      European legislator to obtain from the controller the
                      confirmation as to whether or not personal data concerning
                      him or her are being processed. This includes personal
                      data collected through our SaaS platforms, online courses,
                      events, podcasts, and travel bookings. If a data subject
                      wishes to avail himself of this right of confirmation, he
                      or she may, at any time, contact any employee of the
                      controller, whether regarding data linked to their SaaS
                      account, course enrollment, event registration, podcast
                      subscription, or travel bookings.
                    </p>
                    <h3 className="mb-3 mt-4 text-2xl">
                      <strong className="text-black">
                        8. Right of Access (Art. 15 GDPR)
                      </strong>
                    </h3>
                    <p className="text-gray">
                      Each data subject shall have the right granted by the
                      European legislator to obtain from the controller free
                      information about his or her personal data stored at any
                      time and a copy of this information. This applies to
                      personal data collected via our{" "}
                      <strong className="text-black">SaaS platforms</strong>,{" "}
                      <strong className="text-black">online courses</strong>,{" "}
                      <strong className="text-black">events</strong>,{" "}
                      <strong className="text-black">podcasts</strong>, and{" "}
                      <strong className="text-black">travel bookings</strong>.
                      Furthermore, the European directives and regulations grant
                      the data subject access to the following information:
                    </p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "18px" }}>
                      <li className="text-black">
                        <strong className="text-black">
                          The purposes of the processing:
                        </strong>{" "}
                        This includes data used for providing SaaS services,
                        managing course enrollments, organising events,
                        delivering podcast content, and processing travel
                        bookings.
                      </li>
                      <li className="text-black">
                        <strong className="text-black">
                          The categories of personal data concerned:
                        </strong>{" "}
                        These may include name, email, payment details, and
                        other necessary data specific to each service (e.g.,
                        SaaS subscriptions, course materials, event
                        participation, travel itineraries).
                      </li>
                      <li className="text-black">
                        <strong className="text-black">
                          The recipients or categories of recipients to whom the
                          personal data have been or will be disclosed:
                        </strong>{" "}
                        This may include payment processors, marketing partners,
                        and any third parties involved in processing SaaS
                        services, online courses, event registrations, and
                        travel bookings, including international organisations.
                      </li>
                      <li className="text-black">
                        <strong className="text-black">
                          Where possible, the envisaged period for which the
                          personal data will be stored, or, if not possible, the
                          criteria used to determine that period:{" "}
                        </strong>
                        For example, data may be stored for the duration of
                        course access, event participation, or SaaS
                        subscription.
                      </li>
                      <li className="text-black">
                        <strong className="text-black">
                          The existence of the right to request from the
                          controller rectification or erasure of personal data:
                        </strong>{" "}
                        or restriction of processing of personal data concerning
                        the data subject, or to object to such processing.
                      </li>
                      <li className="text-black">
                        <strong className="text-black">
                          The existence of the right to lodge a complaint with a
                          supervisory authority
                        </strong>
                        .
                      </li>
                      <li className="text-black">
                        <strong className="text-black">
                          Where the personal data are not collected from the
                          data subject:
                        </strong>{" "}
                        any available information as to their source.
                      </li>
                      <li className="text-black">
                        <strong className="text-black">
                          The existence of automated decision-making:
                        </strong>{" "}
                        including profiling, referred to in Article 22(1) and
                        (4) of the GDPR, and, at least in those cases,
                        meaningful information about the logic involved, as well
                        as the significance and envisaged consequences of such
                        processing for the data subject.
                      </li>
                    </ul>
                    <p className="text-gray">
                      Furthermore, the data subject shall have a right to obtain
                      information as to whether personal data are transferred to
                      a third country or to an international organisation. Where
                      this is the case, the data subject shall have the right to
                      be informed of the appropriate safeguards relating to the
                      transfer. If a data subject wishes to avail himself of
                      this right of access, he or she may, at any time, contact
                      any employee of the controller.
                    </p>
                    <h3 className="mb-3 mt-4 text-2xl">
                      <strong className="text-black">
                        9. Right to Rectification (Art. 16 GDPR)
                      </strong>
                    </h3>
                    <p className="text-gray">
                      Each data subject shall have the right granted by the
                      European legislator to obtain from the controller without
                      undue delay the rectification of inaccurate personal data
                      concerning him or her. Taking into account the purposes of
                      the processing, the data subject shall have the right to
                      have incomplete personal data completed, including by
                      means of providing a supplementary statement. This applies
                      to personal data processed through our One XL website,
                      SaaS platforms, online courses, events, podcasts, and
                      travel bookings. For example, if the information related
                      to a SaaS subscription, course enrollment, event
                      participation, or travel booking is found to be inaccurate
                      or incomplete, it can be rectified by providing the
                      correct details.
                    </p>
                    <p className="text-gray">
                      If a data subject wishes to exercise this right to
                      rectification, he or she may, at any time, contact any
                      employee of the controller.
                    </p>
                    <h3 className="mb-3 mt-4 text-2xl">
                      <strong className="text-black">
                        10. Right to Erasure / Right to be Forgotten (Art. 17
                        GDPR)
                      </strong>
                    </h3>
                    <p className="text-gray">
                      Each data subject shall have the right granted by the
                      European legislator to obtain from the controller the
                      erasure of personal data concerning him or her without
                      undue delay, and the controller shall have the obligation
                      to erase personal data without undue delay where one of
                      the following grounds applies, as long as the processing
                      is not necessary:
                    </p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "18px" }}>
                      <li className="text-black">
                        The personal data are no longer necessary in relation to
                        the purposes for which they were collected or otherwise
                        processed, such as when SaaS subscriptions, online
                        course registrations, event participations, or travel
                        bookings are no longer active or required.
                      </li>
                      <li className="text-black">
                        The data subject withdraws consent to which the
                        processing is based according to point (a) of Article
                        6(1) of the GDPR or point (a) of Article 9(2) of the
                        GDPR, and where there is no other legal ground for the
                        processing, such as for marketing communications or
                        participation in our workshops and online webinars.
                      </li>
                      <li className="text-black">
                        The data subject objects to the processing pursuant to
                        Article 21(1) of the GDPR, and there are no overriding
                        legitimate grounds for the processing, or the data
                        subject objects to the processing pursuant to Article
                        21(2) of the GDPR, for example, if they no longer wish
                        to be contacted about online course offers or event
                        updates.
                      </li>
                      <li className="text-black">
                        The personal data have been unlawfully processed, such
                        as if user account information was mistakenly shared or
                        mishandled.
                      </li>
                      <li className="text-black">
                        The personal data must be erased for compliance with a
                        legal obligation in Union or Member State law to which
                        the controller is subject, for instance, in the case of
                        data protection laws governing SaaS platforms or travel
                        service providers.
                      </li>
                      <li className="text-black">
                        The personal data have been collected in relation to the
                        offer of information society services referred to in
                        Article 8(1) of the GDPR, for example, services related
                        to online course platforms or digital products.
                      </li>
                    </ul>
                    <p className="text-gray">
                      If one of the aforementioned reasons applies, and a data
                      subject wishes to request the erasure of personal data
                      stored by One XL Info LLP, he or she may, at any time,
                      contact any employee of the controller. An employee of One
                      XL Info LLP shall promptly ensure that the erasure request
                      is complied with immediately.
                    </p>
                    <p className="text-gray">
                      Where the controller has made personal data public and is
                      obliged pursuant to Article 17(1) to erase the personal
                      data, the controller, taking account of available
                      technology and the cost of implementation, shall take
                      reasonable steps, including technical measures, to inform
                      other controllers processing the personal data that the
                      data subject has requested the erasure by such controllers
                      of any links to, or copy or replication of, those personal
                      data, as far as processing is not required. Employees of
                      One XL Info LLP will arrange the necessary measures in
                      individual cases, especially in the context of{" "}
                      <strong className="text-black">
                        digital service platforms
                      </strong>{" "}
                      and{" "}
                      <strong className="text-black">SaaS applications</strong>.
                    </p>
                    <h3 className="mb-3 mt-4 text-2xl">
                      <strong className="text-black">
                        11. Right to Restriction of Processing (Art. 18 GDPR)
                      </strong>
                    </h3>
                    <p className="text-gray">
                      Each data subject shall have the right granted by the
                      European legislator to obtain from the controller
                      restriction of processing where one of the following
                      applies:
                    </p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "18px" }}>
                      <li className="text-black">
                        The accuracy of the personal data is contested by the
                        data subject, for a period enabling the controller to
                        verify the accuracy of the personal data, such as when a
                        user disputes their SaaS subscription details, online
                        course enrollment information, or travel booking data.
                      </li>
                      <li className="text-black">
                        The processing is unlawful and the data subject opposes
                        the erasure of the personal data and requests the
                        restriction of their use instead. For example, a user
                        may want to restrict the processing of their event
                        registration details, but not have it erased.
                      </li>
                      <li className="text-black">
                        The controller no longer needs the personal data for the
                        purposes of the processing, but they are required by the
                        data subject for the establishment, exercise, or defence
                        of legal claims. This may apply when payment data or
                        user account data for SaaS platforms or online courses
                        are retained for legal reasons or to handle disputes.
                      </li>
                      <li className="text-black">
                        The data subject has objected to processing pursuant to
                        Article 21(1) of the GDPR, pending the verification of
                        whether the legitimate grounds of the controller
                        override those of the data subject. This can occur when
                        a data subject contests the processing of their email
                        marketing preferences for workshops or course
                        promotions, pending a decision.
                      </li>
                    </ul>
                    <p className="text-gray">
                      If one of the aforementioned conditions is met, and a data
                      subject wishes to request the restriction of the
                      processing of personal data stored by us, he or she may at
                      any time contact any employee of the controller. The
                      employee of One XL Info LLP will arrange the restriction
                      of the processing, especially in relation to SaaS
                      platforms, event registrations, travel services, or
                      digital product offerings.
                    </p>
                    <h3 className="mb-3 mt-4 text-2xl">
                      <strong className="text-black">
                        12. Right to Data Portability (Art. 20 GDPR)
                      </strong>
                    </h3>
                    <p className="text-gray">
                      Each data subject shall have the right granted by the
                      European legislator to receive the personal data
                      concerning him or her, which was provided to a controller,
                      in a structured, commonly used, and machine-readable
                      format. He or she shall have the right to transmit those
                      data to another controller without hindrance from the
                      controller to which the personal data have been provided,
                      as long as the processing is based on consent pursuant to
                      point (a) of Article 6(1) of the GDPR or point (a) of
                      Article 9(2) of the GDPR, or on a contract pursuant to
                      point (b) of Article 6(1) of the GDPR, and the processing
                      is carried out by automated means, as long as the
                      processing is not necessary for the performance of a task
                      carried out in the public interest or in the exercise of
                      official authority vested in the controller.
                    </p>
                    <p className="text-gray">
                      Furthermore, in exercising his or her right to data
                      portability pursuant to Article 20(1) of the GDPR, the
                      data subject shall have the right to have personal data
                      transmitted directly from one controller to another, where
                      technically feasible and when doing so does not adversely
                      affect the rights and freedoms of others. This applies,
                      for example, to users who request to transfer their SaaS
                      account data, event registration information, online
                      course progress, or travel booking data to another service
                      provider or platform.
                    </p>
                    <p className="text-gray">
                      In order to assert the right to data portability, the data
                      subject may at any time contact any employee of One XL
                      Info LLP, and the request will be handled promptly,
                      ensuring the seamless transfer of data within SaaS
                      solutions, event management systems, online learning
                      platforms, or travel booking services.
                    </p>
                    <h3 className="mb-3 mt-4 text-2xl">
                      <strong className="text-black">
                        13. Right to Object (Art. 21 GDPR)
                      </strong>
                    </h3>
                    <p className="text-gray">
                      Each data subject shall have the right granted by the
                      European legislator to object, on grounds relating to his
                      or her particular situation, at any time, to the
                      processing of personal data concerning him or her, which
                      is based on point (e) or (f) of Article 6(1) of the GDPR.
                      This also applies to profiling based on these provisions.
                      One XL Info LLP shall no longer process the personal data
                      in the event of the objection unless we can demonstrate
                      compelling legitimate grounds for the processing which
                      override the interests, rights, and freedoms of the data
                      subject or for the establishment, exercise, or defense of
                      legal claims.
                    </p>
                    <p className="text-gray">
                      If we process personal data for direct marketing purposes,
                      such as SaaS product offers, event promotions, special
                      travel packages, or online course discounts, the data
                      subject shall have the right to object at any time to the
                      processing of personal data concerning him or her for such
                      marketing. This applies to profiling to the extent that it
                      is related to such direct marketing. If the data subject
                      objects to the processing for direct marketing purposes,
                      we will no longer process the personal data for these
                      purposes.
                    </p>
                    <p className="text-gray">
                      In addition, the data subject has the right, on grounds
                      relating to his or her particular situation, to object to
                      the processing of personal data concerning him or her for
                      scientific or historical research purposes or for
                      statistical purposes pursuant to Article 89(1) of the
                      GDPR, unless the processing is necessary for the
                      performance of a task carried out for reasons of public
                      interest, such as data processing in event planning,
                      travel statistics, or SaaS service improvement.
                    </p>
                    <p className="text-gray">
                      In order to exercise the right to object, the data subject
                      may contact any employee of One XL Info LLP. In addition,
                      the data subject is free, in the context of the use of
                      information society services such as our SaaS platform,
                      online course system, travel booking service, or event
                      registration system, and notwithstanding Directive
                      2002/58/EC, to use his or her right to object by automated
                      means using technical specifications.
                    </p>
                    <h3 className="mb-3 mt-4 text-2xl">
                      <strong className="text-black">
                        14. Automated Decision-Making &amp; Profiling
                      </strong>
                    </h3>
                    <p className="text-gray">
                      Each data subject shall have the right granted by the
                      European legislator not to be subject to a decision based
                      solely on automated processing, including profiling, which
                      produces legal effects concerning him or her, or similarly
                      significantly affects him or her, as long as the decision
                      (1) is not necessary for entering into, or the performance
                      of, a contract between the data subject and a data
                      controller, such as SaaS service agreements, event
                      registrations, travel bookings, or online course
                      subscriptions, or (2) is not authorised by Union or Member
                      State law to which the controller is subject and which
                      also lays down suitable measures to safeguard the data
                      subject&rsquo;s rights and freedoms and legitimate
                      interests, or (3) is not based on the data subject&rsquo;s
                      explicit consent, such as when a user opts into
                      personalised SaaS product recommendations, event offers,
                      or course suggestions.
                    </p>
                    <p className="text-gray">
                      If the decision (1) is necessary for entering into, or the
                      performance of, a contract between the data subject and a
                      data controller, or (2) it is based on the data
                      subject&rsquo;s explicit consent, One XL Info LLP shall
                      implement suitable measures to safeguard the data
                      subject&rsquo;s rights and freedoms and legitimate
                      interests, at least the right to obtain human intervention
                      on the part of the controller, to express his or her point
                      of view, and contest the decision.
                    </p>
                    <p className="text-gray">
                      If the data subject wishes to exercise the rights
                      concerning automated individual decision-making, such as
                      automated profiling for targeted promotions or service
                      customisation, he or she may, at any time, contact any
                      employee of One XL Info LLP.
                    </p>
                    <h3 className="mb-3 mt-4 text-2xl">
                      <strong className="text-black">
                        15. Right to Withdraw Consent
                      </strong>
                    </h3>
                    <p className="text-gray">
                      Each data subject shall have the right granted by the
                      European legislator to withdraw his or her consent to
                      processing of his or her personal data at any time. This
                      applies to consent given for One XL website, SaaS
                      products, event registrations, online course
                      subscriptions, travel bookings, or marketing
                      communications.
                    </p>
                    <p className="text-gray">
                      If the data subject wishes to exercise the right to
                      withdraw consent, he or she may, at any time, contact any
                      employee of One XL Info LLP.
                    </p>
                    <p className="text-gray">
                      You can also contact a supervisory authority with a
                      complaint at any time, e.g., the supervisory authority of
                      the state of your residence or the authority that oversees
                      One XL Info LLP.
                    </p>
                    <h3 className="mb-3 mt-4 text-2xl">
                      <strong className="text-black">
                        16. Data Protection for Job Applications &amp; Hiring
                        Process
                      </strong>
                    </h3>
                    <p className="text-gray">
                      The data controller shall collect and process the personal
                      data of applicants for the purpose of processing
                      applications for positions related to One XL website, SaaS
                      services, workshops, online course instructors, event
                      staff, or any customer service roles within One XL Info
                      LLP. The processing may also be carried out
                      electronically. This is the case, in particular, if an
                      applicant submits corresponding application documents by
                      email or through a web form on the website to the
                      controller.
                    </p>
                    <p className="text-gray">
                      If the data controller concludes an employment contract
                      with an applicant, the submitted data will be stored for
                      the purpose of processing the employment relationship in
                      compliance with legal requirements, such as those relating
                      to workshop facilitators, course instructors, or staff
                      supporting digital services.
                    </p>
                    <p className="text-gray">
                      If no employment contract is concluded with the applicant
                      by the controller, the application documents shall be
                      automatically erased six months after notification of the
                      refusal decision, provided that no other legitimate
                      interests of the controller are opposed to the erasure.
                    </p>
                    <p className="text-gray">
                      Another legitimate interest in this relation is, for
                      example, a burden of proof in a procedure under the
                      General Equal Treatment Act (AGG).
                    </p>
                    <h3 className="mb-3 mt-4 text-2xl">
                      <strong className="text-black">
                        17. Legal Basis for Processing
                      </strong>
                    </h3>
                    <ul style={{ listStyleType: "disc", paddingLeft: "18px" }}>
                      <li className="text-black">
                        Art. 6(1) lit. a GDPR serves as the legal basis for
                        processing operations for which we obtain consent for a
                        specific processing purpose, such as when a user
                        subscribes to SaaS services, online courses, or events
                        hosted by One XL Info LLP. If the processing of personal
                        data is necessary for the performance of a contract to
                        which the data subject is a party, such as processing
                        operations necessary for the supply of SaaS products,
                        event bookings, or the provision of workshops, the
                        processing is based on Article 6(1) lit. b GDPR. The
                        same applies to such processing operations that are
                        necessary for carrying out pre-contractual measures, for
                        example, in the case of inquiries concerning our SaaS
                        offerings, course enrollment, or event participation.
                      </li>
                      <li className="text-black">
                        If our company is subject to a legal obligation by which
                        processing of personal data is required, such as for the
                        fulfilment of tax obligations related to course fees,
                        workshop registrations, or payment transactions, the
                        processing is based on Art. 6(1) lit. c GDPR. In rare
                        cases, the processing of personal data may be necessary
                        to protect the vital interests of the data subject or of
                        another natural person. This would be the case, for
                        example, if a workshop participant or event attendee
                        were injured during an event or course, and their name,
                        age, health insurance data, or other vital information
                        would need to be passed on to a doctor, hospital, or
                        other third party. Then, the processing would be based
                        on Art. 6(1) lit. d GDPR. Finally, processing operations
                        could be based on Article 6(1) lit. f GDPR.
                      </li>
                      <li className="text-black">
                        This legal basis is used for processing operations which
                        are not covered by any of the above-mentioned legal
                        grounds if processing is necessary for the purposes of
                        the legitimate interests pursued by our company or by a
                        third party, such as for the marketing of SaaS
                        solutions, workshops, or online events, except where
                        such interests are overridden by the interests or
                        fundamental rights and freedoms of the data subject,
                        which require the protection of personal data. Such
                        processing operations are particularly permissible
                        because they have been specifically mentioned by the
                        European legislator.
                      </li>
                    </ul>
                    <h3 className="mb-3 mt-4 text-2xl">
                      <strong className="text-black">
                        18. Law Enforcement &amp; Legal Disclosure
                      </strong>
                    </h3>
                    <p className="text-gray">
                      Under certain circumstances,{" "}
                      <strong className="text-black">One XL Info LLP</strong>{" "}
                      may be required to disclose your Personal Data if required
                      to do so by law or in response to valid requests by public
                      authorities (e.g., a court or a government agency). The
                      Company may also disclose your Personal Data in the good
                      faith belief that such action is necessary to:
                    </p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "18px" }}>
                      <li className="text-black">
                        Comply with a legal obligation, such as financial
                        regulations for SaaS transactions or compliance with
                        event-related legal requirements.
                      </li>
                      <li className="text-black">
                        Protect and defend the rights or property of One XL Info
                        LLP, including the protection of intellectual property
                        or SaaS product rights.
                      </li>
                      <li className="text-black">
                        Prevent or investigate possible wrongdoing in connection
                        with the SaaS platform or online course services or to
                        ensure workshop safety and integrity.
                      </li>
                      <li className="text-black">
                        Protect the personal safety of users of the Service,
                        such as attendees at a workshop, subscribers to SaaS
                        solutions, or the public participating in events.
                      </li>
                      <li className="text-black">
                        Protect against legal liability, such as protecting
                        against fraud or misuse of event bookings and payment
                        processing systems.
                      </li>
                    </ul>
                    <h3 className="mb-3 mt-4 text-2xl">
                      <strong className="text-black">
                        19. Security Measures for Data Protection
                      </strong>
                    </h3>
                    <p className="text-gray">
                      The security of your Personal Data is important to One XL
                      Info LLP, but remember that no method of transmission over
                      the Internet, or method of electronic storage, is 100%
                      secure. While we strive to use commercially acceptable
                      means to protect your Personal Data across our SaaS
                      platforms, online courses, and event registration systems,
                      we cannot guarantee its absolute security. This includes
                      safeguarding data used for payment processing on our
                      platform, workshop bookings, and personal data shared in
                      connection with our services.
                    </p>
                    <h3 className="mb-3 mt-4 text-2xl">
                      <strong className="text-black">
                        20. Email Marketing &amp; Communication
                      </strong>
                    </h3>
                    <p className="text-gray">
                      We may use your Personal Data to contact you with
                      newsletters, marketing materials, promotional offers, and
                      updates related to our SaaS products, online courses,
                      workshops, events, and other services that may be of
                      interest to you. You may opt-out of receiving any, or all,
                      of these communications from us by following the
                      unsubscribe link or instructions provided in any email we
                      send or by contacting us through our customer support
                      channels or website.
                    </p>
                    <h3 className="mb-3 mt-4 text-2xl">
                      <strong className="text-black">
                        21. Payments &amp; Financial Transactions
                      </strong>
                    </h3>
                    <p className="text-gray">
                      We may provide paid products and/or services within the
                      scope of our SaaS platforms, online courses, workshops,
                      events, and other digital services. In such cases, we may
                      use third-party services for payment processing (e.g.,
                      payment processors such as Rasorpay, PayPal, Google Pay,
                      PhonePe, etc.). We will not store or collect your payment
                      card details. That information is provided directly to our
                      third-party payment processors, whose use of your personal
                      information is governed by their respective Privacy
                      Policies. These payment processors adhere to the standards
                      set by PCI-DSS, as managed by the PCI Security Standards
                      Council, a joint effort of brands like Visa, Mastercard,
                      American Express, and Discover. PCI-DSS requirements help
                      ensure the secure handling of payment information.
                    </p>
                    <h3 className="mb-3 mt-4 text-2xl">
                      <strong className="text-black">
                        22. Retention Period for Personal Data
                      </strong>
                    </h3>
                    <p className="text-gray">
                      Where the processing of personal data is based on Article
                      6(1) lit. f GDPR, our legitimate interest is to carry out
                      our business in favor of the well-being of all our
                      employees, stakeholders, and customers across industries
                      such as SaaS platforms, online courses, events, workshops,
                      and digital marketing services, while ensuring we meet the
                      needs of all parties involved and fostering growth for One
                      XL Info LLP and its business operations.
                    </p>
                    <h3 className="mb-3 mt-4 text-2xl">
                      <strong className="text-black">
                        23. Provision of Personal Data: Contractual &amp; Legal
                        Requirements
                      </strong>
                    </h3>
                    <p className="text-gray">
                      The criteria used to determine the period of storage of
                      personal data are based on the respective statutory
                      retention period relevant to our SaaS platforms, online
                      courses, event bookings, and digital marketing services.
                      After the expiration of that period, the corresponding
                      data is routinely deleted, as long as it is no longer
                      necessary for the fulfilment of the contract or the
                      initiation of a contract (such as course subscriptions,
                      event registrations, or service agreements).
                    </p>
                    <p className="text-gray">
                      <strong className="text-black">
                        Provision of personal data as a statutory or contractual
                        requirement:
                      </strong>
                    </p>
                    <p className="text-gray">
                      The provision of personal data is partly required by law
                      (e.g., tax regulations, compliance with financial
                      regulations for event payments) or can also result from
                      contractual provisions (e.g., information on the
                      contractual partner for SaaS service agreements or event
                      participation contracts). Sometimes, it may be necessary
                      to conclude a contract that the data subject provides us
                      with personal data, which must subsequently be processed
                      by us. The data subject is, for example, obliged to
                      provide us with personal data when our company signs a
                      contract with him or her, such as when booking a workshop,
                      subscribing to an online service, or attending an event.
                    </p>
                    <p className="text-gray">
                      The non-provision of the personal data would have the
                      consequence that the contract with the data subject could
                      not be concluded. Before personal data is provided by the
                      data subject, the data subject must contact any employee.
                      The employee clarifies to the data subject whether the
                      provision of the personal data is required by law or
                      contract, or is necessary for the conclusion of the
                      contract, and the consequences of non-provision of data.
                    </p>
                    <h3 className="mb-3 mt-4 text-2xl">
                      <strong className="text-black">
                        24. IT-Security &amp; Encryption Measures
                      </strong>
                    </h3>
                    <p className="text-gray">
                      To protect the security of your data during transmission,
                      we use state-of-the-art encryption methods (such as SSL)
                      via HTTPS, ensuring secure transactions for all our SaaS
                      platforms, online courses, event bookings, workshops, and
                      digital marketing services.
                    </p>
                    <h3 className="mb-3 mt-4 text-2xl">
                      <strong className="text-black">
                        25. Existence of Automated Decision-Making
                      </strong>
                    </h3>
                    <p className="text-gray">
                      One XL Info LLP does not perform automatic decision-making
                      or profiling for any of its SaaS platforms, online
                      courses, event bookings, workshops, or digital marketing
                      services.
                    </p>
                    <h3 className="mb-3 mt-4 text-2xl">
                      <strong className="text-black">
                        26. Changes &amp; Updates to the Privacy Policy
                      </strong>
                    </h3>
                    <p className="text-gray">
                      We reserve the right to amend this privacy policy so that
                      it always complies with current legal requirements or to
                      implement changes to our SaaS platforms, online courses,
                      event bookings, workshops, or digital marketing services,
                      e.g. when introducing new services. Your next visit to our
                      website or platforms will be subject to the new privacy
                      policy.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
       <Suspense fallback={<div>Loading...</div>}>
          <LazyFooter country="/ae" />
        </Suspense>
      </div>
    </>
  );
};

export default GDPRPolicy;
