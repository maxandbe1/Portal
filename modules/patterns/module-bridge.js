
import { getPatternState, addPattern } from "../../engines/pattern-engine.js";

export function loadPatternsModule() {
  const initial = getPatternState();

  window.Portal.modules.patterns = {
    name: "Patterns Module",
    state: initial,
    add: addPattern
  };

  console.log("%cPatterns Module Loaded", "color:#ff0;font-weight:bold;");
  return initial;
}
