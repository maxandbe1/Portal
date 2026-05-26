export default function CreatorApp() {
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
        🐝 Creator App
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
        This app will eventually power your full creative engine:  
        writing, visuals, audio, sequences, artifacts, and Bee‑encoded output.
        <br />
        <br />
        For now, this confirms the Portal OS App Framework is loading  
        advanced creative apps cleanly and consistently.
      </div>
    </div>
  );
}
