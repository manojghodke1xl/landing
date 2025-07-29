// src/App.jsx
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage"; // Import MainPage
import Hero from "./Components/Hero"; // Import Hero
import HeroUAE from "./Components/HeroUAE";
import PaymentPage from "./Components/PaymentPage";
import PaymentForm from "./Components/PaymentForm";
import Success from "./Components/Success";
import Failure from "./Components/Failure";

import PrivacyPolicy from "./Components/PrivacyPolicy";
import CancellationPolicy from "./Components/CancellationPolicy";
import RefundPolicy from "./Components/RefundPolicy";
import ShippingPolicy from "./Components/ShippingPolicy";
import TermsOfService from "./Components/TermsOfService";
import GDPRPolicy from "./Components/GDPRPolicy";
import { HelmetProvider } from "react-helmet-async";

import PrivacyPolicyUAE from "./Components/PrivacyPolicyUAE";
// import CancellationPolicy from './Components/CancellationPolicy';
import RefundPolicyUAE from "./Components/RefundPolicyUAE";
import ShippingPolicyUAE from "./Components/ShippingPolicyUAE";
import TermsOfServiceUAE from "./Components/TermsOfServiceUAE";
import GDPRPolicyUAE from "./Components/GDPRPolicyUAE";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./pages/ScrollToTop";

function App() {
  return (
    <>
      <HelmetProvider>
        <Router>
          <div className="bg-primary w-full h-fit">
            <Routes>
              <Route element={<ScrollToTop />}>
                <Route exact path="/" element={<MainPage />} />
                <Route exact path="/dreams-to-reality/in" element={<Hero />} />
                <Route
                  exact
                  path="/dreams-to-reality/ae"
                  element={<HeroUAE />}
                />{" "}
                <Route exact path="/payment" element={<PaymentPage />} />
                <Route exact path="/payment-form" element={<PaymentForm />} />
                <Route exact path="/success" element={<Success />} />
                <Route exact path="/failure" element={<Failure />} />
                <Route
                  exact
                  path="/privacy-policy"
                  element={<PrivacyPolicy />}
                />
                <Route
                  exact
                  path="/terms-and-conditions"
                  element={<TermsOfService />}
                />
                <Route exact path="/refund-policy" element={<RefundPolicy />} />
                <Route
                  exact
                  path="/shipping-policy"
                  element={<ShippingPolicy />}
                />
                <Route exact path="/gdpr-policy" element={<GDPRPolicy />} />
                <Route
                  exact
                  path="/privacy-policyUAE"
                  element={<PrivacyPolicyUAE />}
                />
                <Route
                  exact
                  path="/terms-and-conditionsUAE"
                  element={<TermsOfServiceUAE />}
                />
                <Route
                  exact
                  path="/refund-policyUAE"
                  element={<RefundPolicyUAE />}
                />
                <Route
                  exact
                  path="/shipping-policyUAE"
                  element={<ShippingPolicyUAE />}
                />
                <Route
                  exact
                  path="/gdpr-policyUAE"
                  element={<GDPRPolicyUAE />}
                />
                {/* <Route exact path="/cancellation-policyUAE" element={<CancellationPolicyUAE />} /> */}
                <Route exact path="/contact-us" element={<ContactUs />} />
                <Route path="*" element={<MainPage />} />
              </Route>
            </Routes>
          </div>
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;

// this is my App.jsx i want have a page named MainPage.jsx i want it to appear first when i start the react poject and what code hsould i add in MainPage.jsx
