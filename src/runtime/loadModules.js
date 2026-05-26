export async function loadModules() {
  try {
    // Fetch the module index
    const response = await fetch("/modules/module-index.json");

    if (!response.ok) {
      throw new Error(`Failed to load module index: ${response.status}`);
    }

    const registry = await response.json();

    if (!registry || !registry.order || !registry.modules) {
      throw new Error("Invalid module-index.json structure");
    }

    const loaded = {};

    // Load modules in order
    for (const key of registry.order) {
      const moduleInfo = registry.modules[key];

      if (!moduleInfo || !moduleInfo.path) {
        console.warn(`Module entry missing for key: ${key}`);
        continue;
      }

      const mod = await import(moduleInfo.path);

      if (!mod || !mod.default) {
        console.warn(`Module missing default export: ${key}`);
        continue;
      }

      // Initialize module if it has an init()
      if (typeof mod.default.init === "function") {
        mod.default.init();
      }

      loaded[key] = mod.default;
    }

    console.log("[Portal] Modules loaded:", Object.keys(loaded));
    return loaded;

  } catch (err) {
    console.error("[Portal] Module loading failed:", err);
    return {};
  }
}
