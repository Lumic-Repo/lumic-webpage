import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { Analytics } from "@vercel/analytics/react";

import { BrowserRouter } from "react-router-dom";
import ScrollToTopComponent from "./components/ScrollToTopComponent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Analytics>
        <ScrollToTopComponent />
        <App />
      </Analytics>
    </BrowserRouter>
  </React.StrictMode>
);
