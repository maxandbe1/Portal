
// src/runtime/module-loader.js

// Fetch the module registry JSON
async function fetchModuleRegistry() {
  const res = await fetch("/modules/module-index.json");

  if (!res.ok) {
    throw new Error(`Failed to fetch module-index.json: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

// Safely load a single module
async function loadSingleModule(key, moduleInfo) {
  if (!moduleInfo || !moduleInfo.path) {
    console.warn(`[Portal] Module '${key}' missing or invalid in registry`);
    return;
  }

  try {
    const mod = await import(moduleInfo.path);

    // Optional: identity / init hook
    if (typeof mod.loadIdentityModule === "function") {
      mod.loadIdentityModule(window.Portal);
    }

    // Store reference if needed
    window.Portal.modules[key] = mod;

    console.log(`[Portal] Module loaded: ${moduleInfo.name || key}`);
  } catch (err) {
    console.error(`[Portal] Failed to load module '${key}' from '${moduleInfo.path}':`, err);
  }
}

export async function loadModules() {
  try {
    const registry = await fetchModuleRegistry();

    if (!registry || !Array.isArray(registry.order) || !registry.modules) {
      throw new Error("Invalid module registry format");
    }

    for (const key of registry.order) {
      const moduleInfo = registry.modules[key];
      await loadSingleModule(key, moduleInfo);
    }

    console.log("%c[Portal] All modules loaded", "color:#0f0;font-weight:bold;");
  } catch (err) {
    console.error("[Portal] Error during module loading:", err);
    throw err; // let caller decide what to do
  }
}
