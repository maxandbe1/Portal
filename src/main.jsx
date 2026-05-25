import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { bootPortal } from "./runtime/portal-runtime.js";


// Start the Portal runtime (session, event bus, engines, modules)
bootPortal();

// Mount the React application
createRoot(document.getElementById("root")).render(<App />);
