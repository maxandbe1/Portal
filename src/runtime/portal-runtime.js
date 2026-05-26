// src/runtime/portal-runtime.js
import { EventBus } from "./event-bus.js";
import { initSession } from "../population/session-init.js";
import { loadModules } from "./module-loader.js";

export function bootPortal() {
  // Global Portal object
  window.Portal = {
    session: initSession(),
    bus: new EventBus(),
    modules: {},   // place for loaded modules
    engines: {}    // place for engines / services
  };

  console.log("%cPortal Runtime Booted", "color:#0f0;font-weight:bold;");
  console.log("Session:", window.Portal.session);

  // Load modules (non‑blocking, with internal error handling)
  loadModules().catch(err => {
    console.error("[Portal] Module loading failed:", err);
  });
}
