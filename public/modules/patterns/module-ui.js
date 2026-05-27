// public/modules/patterns/module-ui.js

import { loadPatternsModule } from "../../src/modules/patterns/patterns-engine.js";

export default function PatternsUI() {
  const state = loadPatternsModule();

  return {
    name: "Patterns Module",
    state
  };
}
