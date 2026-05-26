export default function IdentityModule() {
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
        🐝 Identity Module
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
        This module will eventually display your identity state, signature
        geometry, AO line, and coherence metrics.  
        <br />
        <br />
        For now, it is a live module surface proving that the Portal OS shell and
        ModuleHost are working correctly.
      </div>
    </div>
  );
}
