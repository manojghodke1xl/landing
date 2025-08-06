import { useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  const year = new Date().getFullYear();
  const pathname = location.pathname;
  const country = props.country || "";
  const code = props.code || "/in";
  const policyLinks = [
    { label: "Privacy Policy", path: `/privacy-policy${code}` },
    { label: "Contact Us", path: `/contact-us${code}` },
    {
      label: "Terms and Conditions",
      path: `/terms-and-conditions${code}`,
    },
    { label: "Refund Policy", path: `/refund-policy${code}` },
    {
      label: "Shipping/Return Policy",
      path: `/shipping-policy${code}`,
    },
    { label: "GDPR Policy", path: `/gdpr-policy${code}` },
  ];

  return (
    <footer className="bg-[#111827] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto bg-transparent">
        {/* Policy Links + Bottom */}
        <div className="pt-8 text-center bg-transparent">
          <div className="flex flex-wrap justify-center gap-6 mb-8 bg-transparent">
            {policyLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className="text-[#D1D5DB] hover:text-white transition-colors text-sm sm:text-base bg-transparent"
              >
                {label}
              </Link>
            ))}
          </div>

          <p className="text-[#D1D5DB] text-sm bg-transparent">
            © 2024 - {year}{" "}
            <a
              href="https://books.1xl.com/"
              className="hover:text-white hover:underline font-semibold bg-transparent"
              target="_blank"
              rel="noopener noreferrer"
            >
              Books.1XL.com
            </a>{" "}
            – A Product of{" "}
            <a
              href="https://1xl.com/"
              className="hover:text-white hover:underline font-semibold bg-transparent"
              target="_blank"
              rel="noopener noreferrer"
            >
              ONE XL INFO LLP
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
