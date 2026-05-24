import React from "react";
import Identity from "./pages/Identity.jsx";

export default function App() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Portal</h1>
      <p>Full application mode activated.</p>

      {/* First dynamic module */}
      <Identity />
    </main>
  );
}
