// public/modules/memory/module-bridge.js

export function memoryBridge() {
  return {
    name: "Memory Bridge",
    status: "connected",

    ping() {
      return "memory-bridge-ok";
    }
  };
}
