import { getIdentityState, updateIdentityState } from "./identity-engine.js";

export default function IdentityUI() {
  let state = getIdentityState();

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
      state = getIdentityState();

      const el = document.getElementById("identity-state");
      if (el) el.textContent = JSON.stringify(state, null, 2);
    }
  };
}
