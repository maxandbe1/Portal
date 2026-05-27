// public/modules/ecosystem/module-ui.js

import { loadEcosystemModule } from "../../src/modules/ecosystem/ecosystem-engine.js";

export default function EcosystemUI() {
  const state = loadEcosystemModule();

  return {
    name: "Ecosystem Module",
    state
  };
}
