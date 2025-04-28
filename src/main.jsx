import { createRoot } from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "./apiSlice";
import { HelmetProvider } from "react-helmet-async";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <ApiProvider api={api}>
        <App />
      </ApiProvider>
    </HelmetProvider>
  </StrictMode>
);
