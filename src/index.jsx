import React, { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { createRoot } from "react-dom/client";
import reportWebVitals from "reportWebVitals";
import "assets/index.css";
import App from "App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);

reportWebVitals();
