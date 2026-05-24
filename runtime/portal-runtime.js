import { EventBus } from "./event-bus.js";
import { initSession } from "../population/session-init.js";

export function bootPortal() {
  // Global Portal object
  window.Portal = {
    session: initSession(),
    bus: new EventBus(),
    modules: {},
    engines: {}
  };

  console.log("%cPortal Runtime Booted", "color:#0f0;font-weight:bold;");
  console.log("Session:", window.Portal.session);
}
