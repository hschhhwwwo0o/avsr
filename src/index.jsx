import React from "react";
import { createRoot } from "react-dom/client";
import Router from "router";
import reportWebVitals from "reportWebVitals";
import "assets/index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

reportWebVitals();
