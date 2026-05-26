// Simple global event bridge for Portal OS
// Apps and modules can subscribe, publish, and listen to each other.

const listeners = {};

export const ModuleBridge = {
  publish(event, payload) {
    if (listeners[event]) {
      for (const fn of listeners[event]) {
        try {
          fn(payload);
        } catch (err) {
          console.error("🐝 ModuleBridge listener error:", err);
        }
      }
    }
  },

  subscribe(event, fn) {
    if (!listeners[event]) {
      listeners[event] = [];
    }
    listeners[event].push(fn);

    return () => {
      listeners[event] = listeners[event].filter((x) => x !== fn);
    };
  },
};
