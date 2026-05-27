// public/modules/patterns/module-ui.js

import { loadPatternsEngine } from "../../src/modules/patterns/patterns-engine.js";
import { patternsBridge } from "./module-bridge.js";

export default function PatternsUI() {
  const engine = loadPatternsEngine();
  const bridge = patternsBridge();

  return {
    name: "Patterns Module",
    engine,
    bridge,
    init() {
      console.log("%c[Patterns] UI initialized", "color:#ff0");
    }
  };
}
