let patterns = [];

export function getPatternState() {
  return {
    patterns,
    updatedAt: Date.now()
  };
}

export function addPattern(text) {
  patterns.push({
    text,
    createdAt: Date.now()
  });

  const state = getPatternState();

  if (window.Portal?.bus) {
    window.Portal.bus.emit("patterns:update", state);
  }

  return state;
}
