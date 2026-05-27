// public/modules/identity/module-ui.js

import { getIdentityState, updateIdentityState } from "../../src/modules/identity/identity-engine.js";

export default function IdentityUI() {
  const state = getIdentityState();

  return {
    name: "identity",

    init() {
      console.log("%cIdentity Module Initialized", "color:#0ff;font-weight:bold;");
    },

    mount(root) {
      root.innerHTML = `
        <div style="padding:20px;color:white;">
          <h1>Identity Module</h1>
          <pre id="identity-state">${JSON.stringify(state, null, 2)}</pre>
        </div>
      `;
    },

    update(newState) {
      updateIdentityState(newState);

      const el = document.getElementById("identity-state");
      if (el) {
        el.textContent = JSON.stringify(getIdentityState(), null, 2);
      }
    }
  };
}
