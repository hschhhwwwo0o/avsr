import React, { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { createRoot } from "react-dom/client";
import reportWebVitals from "reportWebVitals";
import "assets/index.css";
import App from "App";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);

reportWebVitals();
