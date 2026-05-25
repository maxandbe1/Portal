import React from "react";
import Identity from "./pages/Identity.jsx";
import Patterns from "./pages/Patterns.jsx";

export default function App() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Portal</h1>
      <p>Full application mode activated.</p>

      <Identity />
      <Patterns />
    </main>
  );
}
