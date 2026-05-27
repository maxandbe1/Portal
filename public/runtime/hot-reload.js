// public/runtime/hot-reload.js

export function startHotReload() {
  if (window.PortalHotReload) return; // prevent double init
  window.PortalHotReload = true;

  console.log(
    "%cPortal Hot Reload Active",
    "color:#ff0;background:#000;padding:4px;"
  );

  let lastHash = null;

  async function check() {
    try {
      const res = await fetch(`/__vite_ping__?t=${Date.now()}`);
      const text = await res.text();

      if (!lastHash) {
        lastHash = text;
        return;
      }

      if (text !== lastHash) {
        lastHash = text;
        await reloadModules();
      }
    } catch (err) {
      console.warn("Hot reload ping failed", err);
    }
  }

  setInterval(check, 1000);
}

async function reloadModules() {
  console.log(
    "%cHot Reload Triggered — Reloading Modules...",
    "color:#0ff;background:#000;padding:4px;"
  );

  if (!window.Portal || !window.Portal.reloadModules) {
    console.warn("Portal.reloadModules not found");
    return;
  }

  await window.Portal.reloadModules();

  console.log(
    "%cModules Reloaded",
    "color:#0f0;background:#000;padding:4px;"
  );
}
