// public/modules/sovereignty/module-bridge.js

import { getSovereigntyState, updateSovereigntyState } from "../../src/modules/sovereignty/sovereignty-engine.js";

export function loadSovereigntyModule() {
  const state = getSovereigntyState();

  window.Portal.modules.sovereignty = {
    name: "Sovereignty Module",
    state,
    update: updateSovereigntyState
  };

  console.log("%cSovereignty Module Loaded", "color:#0f0;font-weight:bold;");
  return state;
}
