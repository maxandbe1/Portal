// public/modules/console/module-bridge.js

import { getConsoleState, updateConsoleState } from "../../src/modules/console/console-engine.js";

export function loadConsoleModule() {
  const state = getConsoleState();

  window.Portal.modules.console = {
    name: "Console Module",
    state,
    update: updateConsoleState
  };

  console.log("%cConsole Module Loaded", "color:#09f;font-weight:bold;");
  return state;
}
