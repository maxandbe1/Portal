// Global Portal OS theme system
// Centralized colors, spacing, radii, shadows, and transitions.

export const PortalTheme = {
  colors: {
    text: "#e5e7eb",
    textDim: "rgba(229,231,235,0.6)",
    surface: "rgba(255,255,255,0.03)",
    surfaceDeep: "rgba(255,255,255,0.015)",
    border: "rgba(255,255,255,0.06)",
    borderStrong: "rgba(255,255,255,0.12)",
    accent: "#facc15",
    accentSoft: "rgba(250,204,21,0.15)",
    danger: "#f87171",
  },

  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },

  radius: {
    sm: 4,
    md: 6,
    lg: 8,
  },

  shadow: {
    soft: "0 2px 6px rgba(0,0,0,0.15)",
    medium: "0 4px 12px rgba(0,0,0,0.2)",
  },

  transition: {
    fast: "120ms ease",
    normal: "200ms ease",
    slow: "320ms ease",
  },
};

// Primitive container used across Portal OS
export function Surface({ children, padding = "md", style = {} }) {
  return (
    <div
      style={{
        background: PortalTheme.colors.surface,
        border: `1px solid ${PortalTheme.colors.border}`,
        borderRadius: PortalTheme.radius.lg,
        padding: PortalTheme.spacing[padding],
        color: PortalTheme.colors.text,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
