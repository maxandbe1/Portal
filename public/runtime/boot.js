// public/runtime/boot.js

import { loadPortalModules } from "./module-loader.js";

(async () => {
  console.log("%cPORTAL RUNTIME ONLINE", "color:#0f0;font-weight:bold;");

  const modules = await loadPortalModules();

  console.log("%cAll modules loaded:", "color:#0f0;font-weight:bold;");
  console.table(modules);
})();
