import { useState } from "react";
import AppFramework from "./AppFramework";
import ModuleHost from "./ModuleHost";

export default function WindowSystem() {
  const [windows, setWindows] = useState([]);
  const [activeId, setActiveId] = useState(null);

  function openApp(appName) {
    const id = crypto.randomUUID();
    const win = { id, type: "app", name: appName };
    setWindows((w) => [...w, win]);
    setActiveId(id);
  }

  function openModule(moduleName) {
    const id = crypto.randomUUID();
    const win = { id, type: "module", name: moduleName };
    setWindows((w) => [...w, win]);
    setActiveId(id);
  }

  function closeWindow(id) {
    setWindows((w) => w.filter((x) => x.id !== id));
    if (activeId === id) {
      const remaining = windows.filter((x) => x.id !== id);
      setActiveId(remaining.length ? remaining[0].id : null);
    }
  }

  const activeWindow = windows.find((w) => w.id === activeId);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        color: "#e5e7eb",
        fontFamily: "system-ui",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          padding: "0.5rem",
          background: "rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {windows.map((win) => (
          <div
            key={win.id}
            onClick={() => setActiveId(win.id)}
            style={{
              padding: "0.4rem 0.7rem",
              borderRadius: 6,
              cursor: "pointer",
              background:
                win.id === activeId
                  ? "rgba(255,255,255,0.12)"
                  : "rgba(255,255,255,0.04)",
              border:
                win.id === activeId
                  ? "1px solid rgba(255,255,255,0.18)"
                  : "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.85rem",
            }}
          >
            <span>{win.type === "app" ? "📱" : "📦"}</span>
            <span>{win.name}</span>
            <span
              onClick={(e) => {
                e.stopPropagation();
                closeWindow(win.id);
              }}
              style={{
                marginLeft: "0.5rem",
                cursor: "pointer",
                opacity: 0.7,
              }}
            >
              ✕
            </span>
          </div>
        ))}
      </div>

      <div style={{ flex: 1, padding: "1rem", overflow: "auto" }}>
        {!activeWindow && (
          <div style={{ opacity: 0.6, fontSize: "0.9rem" }}>
            No windows open.
          </div>
        )}

        {activeWindow && activeWindow.type === "app" && (
          <AppFramework activeApp={activeWindow.name} />
        )}

        {activeWindow && activeWindow.type === "module" && (
          <ModuleHost moduleName={activeWindow.name} />
        )}
      </div>

      <div
        style={{
          padding: "0.5rem",
          background: "rgba(255,255,255,0.03)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          gap: "0.5rem",
        }}
      >
        <button
          onClick={() => openApp("journal")}
          style={buttonStyle}
        >
          Open Journal
        </button>

        <button
          onClick={() => openApp("dashboard")}
          style={buttonStyle}
        >
          Open Dashboard
        </button>

        <button
          onClick={() => openModule("identity")}
          style={buttonStyle}
        >
          Open Identity
        </button>

        <button
          onClick={() => openModule("patterns")}
          style={buttonStyle}
        >
          Open Patterns
        </button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "0.4rem 0.7rem",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 6,
  color: "#e5e7eb",
  cursor: "pointer",
  fontSize: "0.8rem",
};
