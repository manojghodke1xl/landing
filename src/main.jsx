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

    // ✅ Google Tag Manager (GTM)
    const gtmScript = document.createElement("script");
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5R8VPDTQ');
    `;
    document.head.appendChild(gtmScript);

    // ❌ Microsoft Clarity (commented out)
    /*
    const clarityScript = document.createElement("script");
    clarityScript.innerHTML = \`
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "r0d0tex454");
    \`;
    document.head.appendChild(clarityScript);
    */
  };

  const triggerLazyLoad = () => {
    loadAnalytics();
    window.removeEventListener("scroll", triggerLazyLoad);
    window.removeEventListener("click", triggerLazyLoad);
  };

  window.addEventListener("scroll", triggerLazyLoad, { once: true });
  window.addEventListener("click", triggerLazyLoad, { once: true });

  // Fallback: Load after idle or timeout
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
