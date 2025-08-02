// src/App.jsx
import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Lazy imports
const MainPage = lazy(() => import("./Components/MainPage"));
const Hero = lazy(() => import("./Components/Hero"));
const PaymentPage = lazy(() => import("./Components/PaymentPage"));
const PaymentForm = lazy(() => import("./Components/PaymentForm"));
const Success = lazy(() => import("./Components/Success"));
const Failure = lazy(() => import("./Components/Failure"));
const PrivacyPolicy = lazy(() => import("./Components/PrivacyPolicy"));
const CancellationPolicy = lazy(() =>
  import("./Components/CancellationPolicy")
);
const RefundPolicy = lazy(() => import("./Components/RefundPolicy"));
const ShippingPolicy = lazy(() => import("./Components/ShippingPolicy"));
const TermsOfService = lazy(() => import("./Components/TermsOfService"));
const GDPRPolicy = lazy(() => import("./Components/GDPRPolicy"));
const PrivacyPolicyUAE = lazy(() => import("./Components/PrivacyPolicyUAE"));
const RefundPolicyUAE = lazy(() => import("./Components/RefundPolicyUAE"));
const ShippingPolicyUAE = lazy(() => import("./Components/ShippingPolicyUAE"));
const TermsOfServiceUAE = lazy(() => import("./Components/TermsOfServiceUAE"));
const GDPRPolicyUAE = lazy(() => import("./Components/GDPRPolicyUAE"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const ScrollToTop = lazy(() => import("./pages/ScrollToTop"));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="bg-primary w-full h-fit">
          <Suspense fallback={<></>}>
            <Routes>
              <Route element={<ScrollToTop />}>
                <Route path="/" element={<MainPage />} />
                <Route
                  path="/dreams-to-reality/in"
                  element={<Hero country="in" />}
                />
                <Route
                  path="/dreams-to-reality/ae"
                  element={<Hero country="ae" />}
                />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/payment-form" element={<PaymentForm />} />
                <Route path="/success" element={<Success />} />
                <Route path="/failure" element={<Failure />} />
                <Route path="/privacy-policy/in" element={<PrivacyPolicy />} />
                <Route
                  path="/terms-and-conditions/in"
                  element={<TermsOfService />}
                />
                <Route path="/refund-policy/in" element={<RefundPolicy />} />
                <Route
                  path="/shipping-policy/in"
                  element={<ShippingPolicy />}
                />
                <Route path="/gdpr-policy/in" element={<GDPRPolicy />} />
                <Route
                  path="/privacy-policyUAE/ae"
                  element={<PrivacyPolicyUAE />}
                />
                <Route
                  path="/terms-and-conditionsUAE/ae"
                  element={<TermsOfServiceUAE />}
                />
                <Route
                  path="/refund-policyUAE/ae"
                  element={<RefundPolicyUAE />}
                />
                <Route
                  path="/shipping-policyUAE/ae"
                  element={<ShippingPolicyUAE />}
                />
                <Route path="/gdpr-policyUAE/ae" element={<GDPRPolicyUAE />} />
                <Route path="/contact-us/in" element={<ContactUs />} />
                <Route path="/contact-us/ae" element={<ContactUs />} />
                <Route path="*" element={<MainPage />} />
              </Route>
            </Routes>
          </Suspense>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
