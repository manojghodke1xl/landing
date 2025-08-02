import { useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  const year = new Date().getFullYear();
  const pathname = location.pathname;
  const country = props.country || "";
  const policyLinks = [
    { label: "Privacy Policy", path: `/privacy-policy${country}` },
    { label: "Contact Us", path: `/contact-us${country}` },
    { label: "Terms and Conditions", path: `/terms-and-conditions${country}` },
    { label: "Refund Policy", path: `/refund-policy${country}` },
    { label: "Shipping/Return Policy", path: `/shipping-policy${country}` },
    { label: "GDPR Policy", path: `/gdpr-policy${country}` },
  ];

  return (
    <footer className="bg-[#111827] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto bg-transparent">
        {/* Top Call-to-Action Section */}
        {["/dreams-to-reality/ae", "/dreams-to-reality/in"].includes(
          pathname
        ) && (
          <div className="text-center mb-10 bg-transparent">
            <h2 className="font-playfair text-3xl font-bold text-white mb-6 bg-transparent">
              Join the Growing List of Action-Takers Who Are Turning Their
              Dreams into Reality!
            </h2>
            <p className="text-lg text-[#D1D5DB] mb-8 bg-transparent">
              Let us know where to send your Book, and take the first step
              toward achieving your goals today!
            </p>

            <div className="flex flex-wrap justify-center gap-4 bg-transparent">
              <a
                href={props.buildPayUrl("67de9c03770d7aa5b35b4712")}
                className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Grab Your Hardcover
              </a>
              <a
                href={props.buildPayUrl("67dea774770d7aa5b35b4db2")}
                className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Grab Your E-Book
              </a>
            </div>
          </div>
        )}

        {/* Policy Links + Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center bg-transparent">
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
