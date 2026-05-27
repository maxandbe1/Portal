import { loadPortalModulesDynamic } from "./dynamic-module-loader.js";
import { startHotReload } from "./hot-reload.js";

(async () => {
  console.log(
    "%cPORTAL RUNTIME ONLINE (dynamic)",
    "color:#0f0;font-weight:bold;"
  );

  await loadPortalModulesDynamic();

  // 🔥 enable hot reload
  startHotReload();
})();
