export function getIdentityState() {
  return {
    traits: [],
    updatedAt: Date.now()
  };
}

export function updateIdentityState(traits) {
  const state = {
    traits,
    updatedAt: Date.now()
  };

  // Broadcast the update to all subscribers (React pages, modules, etc.)
  if (window.Portal?.bus) {
    window.Portal.bus.emit("identity:update", state);
  }

  return state;
}
