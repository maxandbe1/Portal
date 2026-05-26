import { useEffect, useState } from "react";
import { loadModules } from "./runtime/loadModules";

function App() {
  const [modules, setModules] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      try {
        const loaded = await loadModules();
        if (!cancelled) {
          setModules(loaded);
        }
      } catch (err) {
        console.error("[Portal] App init failed:", err);
        if (!cancelled) {
          setError(err.message || "Unknown error");
        }
      }
    }

    init();

    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <div style={{ padding: "2rem", color: "#f55", fontFamily: "system-ui" }}>
        <h1>Portal Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  if (!modules) {
    return (
      <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
        <h1>Loading Portal…</h1>
        <p>Please wait while modules initialize.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui" }}
      <h1>Portal</h1>
      <p>Modules loaded:</p>
      <ul>
        {Object.keys(modules).map((key) => (
          <li key={key}>{key}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
