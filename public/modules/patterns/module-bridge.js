// public/modules/patterns/module-bridge.js

export function patternsBridge() {
  return {
    name: "Patterns Bridge",
    status: "connected",

    ping() {
      return "patterns-bridge-ok";
    }
  };
}
