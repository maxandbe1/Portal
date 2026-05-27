// public/modules/console/module-ui.js

import { loadConsoleModule } from "../../src/modules/console/console-engine.js";

export default function ConsoleUI() {
  const state = loadConsoleModule();

  return {
    name: "Console Module",
    state
  };
}
