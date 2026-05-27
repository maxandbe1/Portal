// public/modules/identity/module-ui.js

import { loadIdentityEngine } from "../../src/modules/identity/identity-engine.js";
import { identityBridge } from "./module-bridge.js";

export default function IdentityUI() {
  const engine = loadIdentityEngine();
  const bridge = identityBridge();

  return {
    name: "Identity Module",
    engine,
    bridge,
    init() {
      console.log("%c[Identity] UI initialized", "color:#0ff");
    }
  };
}
