// public/modules/ecosystem/module-bridge.js

import { getEcosystemState, updateEcosystemState } from "../../src/modules/ecosystem/ecosystem-engine.js";

export function loadEcosystemModule() {
  const state = getEcosystemState();

  window.Portal.modules.ecosystem = {
    name: "Ecosystem Module",
    state,
    update: updateEcosystemState
  };

  console.log("%cEcosystem Module Loaded", "color:#f90;font-weight:bold;");
  return state;
}
