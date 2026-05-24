import React, { useEffect, useState } from "react";
import { getIdentityState } from "../../engines/identity-engine.js";

export default function Identity() {
  // Load initial identity state from the engine
  const [state, setState] = useState(getIdentityState());

  // Subscribe to identity updates through the Portal event bus
  useEffect(() => {
    if (!window.Portal?.bus) return;

    window.Portal.bus.on("identity:update", updated => {
      setState(updated);
    });
  }, []);

  return (
    <section style={{ marginTop: "2rem" }}>
      <h2>Identity Module</h2>
      <p>This module is fully dynamic and connected to the Portal runtime.</p>

      <pre
        style={{
          background: "#111",
          color: "#0f0",
          padding: "1rem",
          borderRadius: "8px",
          overflowX: "auto"
        }}
      >
        {JSON.stringify(state, null, 2)}
      </pre>
    </section>
  );
}
