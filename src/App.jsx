import { useEffect, useState } from "react";

function App() {
  const [modules, setModules] = useState([]);
  const [activeModule, setActiveModule] = useState(null);

  useEffect(() => {
    async function loadModules() {
      try {
        const response = await fetch("/modules/module-index.json");
        const moduleIndex = await response.json();

        const loadedModules = Object.keys(moduleIndex);
        setModules(loadedModules);
        setActiveModule(loadedModules[0] || null);

        console.log("🐝 Portal: Modules loaded:", loadedModules);
      } catch (err) {
        console.error("🐝 Portal: Failed to load modules", err);
      }
    }

    loadModules();
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "system-ui",
        background: "#050509",
        color: "#f5f5f5",
      }}
    >
      {/* Top bar */}
      <header
        style={{
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1.5rem",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(5,5,12,0.96)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "1.4rem" }}>🐝</span>
          <span style={{ fontWeight: 600, letterSpacing: "0.06em" }}>
            PORTAL
          </span>
        </div>
        <div
          style={{
            fontSize: "0.8rem",
            opacity: 0.8,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "999px",
              background: "#22c55e",
            }}
          />
          <span>Runtime online</span>
        </div>
      </header>

      {/* Body: sidebar + main */}
      <div style={{ flex: 1, display: "flex", minHeight: 0 }}>
        {/* Sidebar */}
        <aside
          style={{
            width: "220px",
            borderRight: "1px solid rgba(255,255,255,0.08)",
            padding: "1rem",
            background: "radial-gradient(circle at top, #111827 0, #020617 55%)",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                opacity: 0.6,
                marginBottom: "0.5rem",
              }}
            >
              Modules
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {modules.length === 0 && (
                <div style={{ fontSize: "0.8rem", opacity: 0.6 }}>
                  Loading modules…
                </div>
              )}
              {modules.map((m) => {
                const isActive = m === activeModule;
                return (
                  <button
                    key={m}
                    onClick={() => setActiveModule(m)}
                    style={{
                      textAlign: "left",
                      padding: "0.4rem 0.6rem",
                      borderRadius: 6,
                      border: "none",
                      cursor: "pointer",
                      fontSize: "0.85rem",
                      background: isActive
                        ? "rgba(148, 163, 253, 0.18)"
                        : "transparent",
                      color: isActive ? "#e5e7eb" : "#9ca3af",
                    }}
                  >
                    {m}
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ marginTop: "auto", fontSize: "0.75rem", opacity: 0.55 }}>
            <div>Bee System · v0.1</div>
            <div>Portal Ecosystem</div>
          </div>
        </aside>

        {/* Main module view */}
        <main
          style={{
            flex: 1,
            padding: "1.5rem 2rem",
            overflow: "auto",
          }}
        >
          {!activeModule && (
            <div style={{ opacity: 0.7, fontSize: "0.9rem" }}>
              No modules loaded yet.
            </div>
          )}

          {activeModule && (
            <div>
              <h2
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "0.5rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  opacity: 0.9,
                }}
              >
                {activeModule}
              </h2>
              <p style={{ fontSize: "0.9rem", opacity: 0.75 }}>
                Module surface for <strong>{activeModule}</strong> will render
                here. This is the Portal UI shell — modules plug into this
                viewport.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
