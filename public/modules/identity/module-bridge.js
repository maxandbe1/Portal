// public/modules/identity/module-bridge.js
import { getIdentityState, updateIdentityState } from "../../src/modules/identity/identity-engine.js";

export function loadIdentityModule() {
  const state = getIdentityState();

  window.Portal.modules.identity = {
    name: "Identity Module",
    state,
    update: updateIdentityState
  };

  console.log("%cIdentity Module Loaded", "color:#0ff;font-weight:bold;");
  return state;
}
