// public/runtime/module-loader.js

import IdentityUI from "../modules/identity/module-ui.js";
import PatternsUI from "../modules/patterns/module-ui.js";
import MemoryUI from "../modules/memory/module-ui.js";
import SovereigntyUI from "../modules/sovereignty/module-ui.js";
import ConsoleUI from "../modules/console/module-ui.js";
import EcosystemUI from "../modules/ecosystem/module-ui.js";

export async function loadPortalModules() {
  window.Portal = window.Portal || {};
  window.Portal.modules = {};

  console.log("%cBooting Portal Modules...", "color:#fff;background:#000;padding:4px;");

  const identity = IdentityUI();
  const patterns = PatternsUI();
  const memory = MemoryUI();
  const sovereignty = SovereigntyUI();
  const consoleModule = ConsoleUI();
  const ecosystem = EcosystemUI();

  return {
    identity,
    patterns,
    memory,
    sovereignty,
    console: consoleModule,
    ecosystem
  };
}
