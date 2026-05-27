// public/modules/identity/module-bridge.js
import { getIdentityState, updateIdentityState } from "../../src/modules/identity/identity-engine.js";

// public/modules/identity/module-bridge.js

export function identityBridge() {
  return {
    name: "Identity Bridge",
    status: "connected",
    ping() {
      return "identity-bridge-ok";
    }
  };
}


  window.Portal.modules.identity = {
    name: "Identity Module",
    state,
    update: updateIdentityState
  };

  console.log("%cIdentity Module Loaded", "color:#0ff;font-weight:bold;");
  return state;
}
