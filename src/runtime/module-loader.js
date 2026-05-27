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

  const moduleDefs = {
    identity: IdentityUI,
    patterns: PatternsUI,
    memory: MemoryUI,
    sovereignty: SovereigntyUI,
    console: ConsoleUI,
    ecosystem: EcosystemUI
  };

  for (const [name, Module] of Object.entries(moduleDefs)) {
    const instance = Module();

    const container = document.createElement("div");
    container.id = `portal-module-${name}`;
    container.style.display = "none";
    document.body.appendChild(container);

    if (typeof instance.mount === "function") instance.mount(container);
    if (typeof instance.init === "function") instance.init();

    window.Portal.modules[name] = { instance, container };

    console.log(`%cModule loaded: ${name}`, "color:#0f0;font-weight:bold;");
  }

  return window.Portal.modules;
}
