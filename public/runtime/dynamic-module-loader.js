// public/runtime/dynamic-module-loader.js

const moduleLoaders = {
  identity: () => import("../modules/identity/module-ui.js"),
  patterns: () => import("../modules/patterns/module-ui.js"),
  memory: () => import("../modules/memory/module-ui.js"),
  sovereignty: () => import("../modules/sovereignty/module-ui.js"),
  console: () => import("../modules/console/module-ui.js"),
  ecosystem: () => import("../modules/ecosystem/module-ui.js")
};

async function loadModuleIndex() {
  const res = await fetch("/modules/module-index.json");

  if (!res.ok) {
    throw new Error(`Failed to load module-index.json: ${res.status}`);
  }
  const json = await res.json();
  return json.modules || [];
}

export async function loadPortalModulesDynamic() {
  window.Portal = window.Portal || {};
  window.Portal.modules = window.Portal.modules || {};

  console.log(
    "%cBooting Portal Modules (dynamic)...",
    "color:#fff;background:#000;padding:4px;"
  );

  const index = await loadModuleIndex();

  // sort by order if present
  const sorted = [...index].sort((a, b) => (a.order || 0) - (b.order || 0));

  const loaded = {};

  for (const entry of sorted) {
    const { name } = entry;
    const loader = moduleLoaders[name];

    if (!loader) {
      console.warn(`No loader registered for module: ${name}`);
      continue;
    }

    try {
      const mod = await loader();
      const UI = mod.default;

      if (typeof UI !== "function") {
        console.warn(`Module UI is not a function for: ${name}`);
        continue;
      }

      const instance = UI();

      window.Portal.modules[name] = instance;
      loaded[name] = instance;

      console.log(
        `%cModule loaded: ${name}`,
        "color:#0f0;font-weight:bold;"
      );
    } catch (err) {
      console.error(`Failed to load module: ${name}`, err);
    }
  }

  return loaded;
}
