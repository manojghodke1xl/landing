import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

function loadGoogleTagManager(id) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
  document.head.appendChild(script);

  const noscript = document.createElement("noscript");
  noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${id}"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
  document.body.appendChild(noscript);
}

function loadClarity(trackingCode) {
  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = `https://www.clarity.ms/tag/${i}`;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", trackingCode);
}

// Inject GTM and Clarity when app loads
loadGoogleTagManager("GTM-5R8VPDTQ"); // ✅ Replace with your GTM ID
loadClarity("r0d0tex454"); // ✅ Replace with your Clarity project ID

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
