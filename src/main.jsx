// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

if (import.meta.env.MODE === "production") {
  let loaded = false;

  const loadAnalytics = () => {
    if (loaded) return;
    loaded = true;

    // Google Tag Manager <script>
    const gtmScript = document.createElement("script");
    gtmScript.src = "https://www.googletagmanager.com/gtm.js?id=GTM-5R8VPDTQ";
    gtmScript.async = true;
    document.head.appendChild(gtmScript);

    // Microsoft Clarity <script>
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

  // Fallback if user doesn't interact
  if ("requestIdleCallback" in window) {
    requestIdleCallback(loadAnalytics, { timeout: 5000 });
  } else {
    setTimeout(loadAnalytics, 5000);
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
