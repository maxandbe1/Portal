import React, { useEffect, useState } from "react";
import { getPatternState } from "../../engines/pattern-engine.js";

export default function Patterns() {
  const [state, setState] = useState(getPatternState());
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!window.Portal?.bus) return;

    window.Portal.bus.on("patterns:update", updated => {
      setState(updated);
    });
  }, []);

  function add() {
    if (input.trim() === "") return;
    window.Portal.modules.patterns.add(input.trim());
    setInput("");
  }

  return (
    <section style={{ marginTop: "2rem" }}>
      <h2>Patterns Module</h2>
      <p>Track patterns dynamically through the Portal runtime.</p>

      <div style={{ marginBottom: "1rem" }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter a pattern"
          style={{ padding: "0.5rem", width: "200px" }}
        />
        <button onClick={add} style={{ marginLeft: "0.5rem" }}>
          Add
        </button>
      </div>

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
