import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "reportWebVitals";
import "assets/index.css";
import App from "App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();
