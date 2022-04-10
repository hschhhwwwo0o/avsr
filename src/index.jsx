import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "reportWebVitals";
import "assets/index.css";
import App from "App";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
