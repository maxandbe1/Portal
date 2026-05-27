import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { loadPortalModules } from "./runtime/module-loader.js";

loadPortalModules();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
