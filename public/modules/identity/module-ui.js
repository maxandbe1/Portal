// public/modules/identity/module-ui.js

import { loadIdentityModule } from "../../src/modules/identity/identity-engine.js";

export default function IdentityUI() {
  const state = loadIdentityModule();

  return {
    name: "Identity Module",
    state
  };
}
