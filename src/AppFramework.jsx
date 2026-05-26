import { useEffect, useState } from "react";

export default function AppFramework({ activeApp }) {
  const [Component, setComponent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!activeApp) return;

    setComponent(null);
    setError(null);

    import(`/apps/${activeApp}/app-ui.js`)
      .then((mod) => {
        if (mod.default) {
          setComponent(() => mod.default);
        } else {
          setError(`App ${activeApp} has no default export.`);
        }
      })
      .catch((err) => {
        console.error(`🐝 Portal: Failed to load app ${activeApp}`, err);
        setError(`Failed to load app: ${activeApp}`);
      });
  }, [activeApp]);

  if (error) {
    return (
      <div style={{ color: "#f87171", fontSize: "0.9rem" }}>
        {error}
      </div>
    );
  }

  if (!Component) {
    return (
      <div style={{ opacity: 0.6, fontSize: "0.9rem" }}>
        Loading {activeApp}…
      </div>
    );
  }

  return <Component />;
}
