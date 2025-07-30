// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Lazy-load GTM & Clarity only in production
if (import.meta.env.MODE === "production") {
  const loadAnalytics = () => {
    //  Google Tag Manager
    const gtmScript = document.createElement("script");
    gtmScript.src = "https://www.googletagmanager.com/gtm.js?id=GTM-5R8VPDTQ";
    gtmScript.async = true;
    document.head.appendChild(gtmScript);

    //  Microsoft Clarity
    const clarityScript = document.createElement("script");
    clarityScript.innerHTML = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "r0d0tex454");
    `;
    document.head.appendChild(clarityScript);
  };

  const triggerLazyLoad = () => {
    loadAnalytics();
    window.removeEventListener("scroll", triggerLazyLoad);
    window.removeEventListener("click", triggerLazyLoad);
  };

  window.addEventListener("scroll", triggerLazyLoad, { once: true });
  window.addEventListener("click", triggerLazyLoad, { once: true });

  // Load anyway after 5 seconds as fallback
  setTimeout(() => loadAnalytics(), 5000);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
