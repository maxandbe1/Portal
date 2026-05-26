import { useEffect, useState } from "react";

export default function ModuleHost({ moduleName }) {
  const [Component, setComponent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!moduleName) return;

    setComponent(null);
    setError(null);

    import(`../modules/${moduleName}/module-ui.js`)
      .then((mod) => {
        if (mod.default) {
          setComponent(() => mod.default);
        } else {
          setError(`Module ${moduleName} has no default export.`);
        }
      })
      .catch((err) => {
        console.error(`🐝 Portal: Failed to load module ${moduleName}`, err);
        setError(`Failed to load module: ${moduleName}`);
      });
  }, [moduleName]);

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
        Loading {moduleName}…
      </div>
    );
  }

  return <Component />;
}
