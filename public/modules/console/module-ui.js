export default function ConsoleModule() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        fontFamily: "system-ui",
        color: "#e5e7eb",
      }}
    >
      <div
        style={{
          fontSize: "1rem",
          fontWeight: 600,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          opacity: 0.9,
        }}
      >
        🐝 Console Module
      </div>

      <div
        style={{
          padding: "1rem",
          background: "rgba(255,255,255,0.03)",
          borderRadius: 8,
          border: "1px solid rgba(255,255,255,0.06)",
          fontSize: "0.9rem",
          lineHeight: 1.5,
        }}
      >
        This module will eventually display your live system logs,  
        module events, runtime messages, and Bee System diagnostics.
        <br />
        <br />
        For now, this confirms the Portal OS shell and ModuleHost are correctly
        loading dynamic module surfaces across the full stack.
      </div>
    </div>
  );
}
