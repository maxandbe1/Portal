// public/modules/memory/module-bridge.js
import { getMemoryState, updateMemoryState } from "../../src/modules/memory/memory-engine.js";

export function loadMemoryModule() {
  const state = getMemoryState();

  window.Portal.modules.memory = {
    name: "Memory Module",
    state,
    update: updateMemoryState
  };

  console.log("%cMemory Module Loaded", "color:#a0f;font-weight:bold;");
  return state;
}
