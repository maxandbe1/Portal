// src/modules/memory/memory-engine.js

export function loadMemoryEngine() {
  return {
    name: "Memory Engine",
    version: "1.0.0",

    state: {
      initialized: true,
      timestamp: Date.now(),
      entries: []
    },

    getState() {
      return this.state;
    },

    addEntry(entry) {
      this.state.entries = [...this.state.entries, {
        id: crypto.randomUUID(),
        timestamp: Date.now(),
        ...entry
      }];
      return this.state;
    },

    removeEntry(id) {
      this.state.entries = this.state.entries.filter(e => e.id !== id);
      return this.state;
    },

    update(patch) {
      this.state = { ...this.state, ...patch };
      return this.state;
    }
  };
}
