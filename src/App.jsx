import { useEffect, useState } from "react";

function App() {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    async function loadModules() {
      try {
        const response = await fetch("/modules/module-index.json");
        const moduleIndex = await response.json();

        const loadedModules = Object.keys(moduleIndex);
        setModules(loadedModules);

        console.log("🐝 Portal: Modules loaded:", loadedModules);
      } catch (err) {
        console.error("🐝 Portal: Failed to load modules", err);
      }
    }

    loadModules();
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>🐝 Portal</h1>
      <p>Modules loaded:</p>
      <ul>
        {modules.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
