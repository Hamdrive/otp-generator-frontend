import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { VerifyProvider } from "./context/verify-context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VerifyProvider>
      <App />
    </VerifyProvider>
  </React.StrictMode>
);
