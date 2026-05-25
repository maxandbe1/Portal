import { updateIdentityState, getIdentityState } from "../../engines/identity-engine.js";

export function loadIdentityModule() {
  const initial = getIdentityState();

  // Register the module inside the Portal runtime
  window.Portal.modules.identity = {
    name: "Identity Module",
    state: initial,
    update: updateIdentityState
  };

  console.log("%cIdentity Module Loaded", "color:#0ff;font-weight:bold;");
  return initial;
}
