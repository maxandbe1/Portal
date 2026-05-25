export async function loadModules() {
  const registry = await fetch("/modules/module-index.json").then(r => r.json());

  for (const key of registry.order) {
    const moduleInfo = registry.modules[key];

    if (!moduleInfo) {
      console.warn(`Module '${key}' not found in registry`);
      continue;
    }

    // Dynamically import the module bridge
    const mod = await import(moduleInfo.path);

    if (typeof mod.loadIdentityModule === "function") {
      mod.loadIdentityModule();
    }

    console.log(`Module loaded: ${moduleInfo.name}`);
  }

  console.log("%cAll modules loaded", "color:#0f0;font-weight:bold;");
}
