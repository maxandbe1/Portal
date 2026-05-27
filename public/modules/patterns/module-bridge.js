// public/modules/patterns/module-bridge.js
import { getPatternsState, updatePatternsState } from "../../src/modules/patterns/patterns-engine.js";

export function loadPatternsModule() {
  const state = getPatternsState();

  window.Portal.modules.patterns = {
    name: "Patterns Module",
    state,
    update: updatePatternsState
  };

  console.log("%cPatterns Module Loaded", "color:#ff0;font-weight:bold;");
  return state;
}
