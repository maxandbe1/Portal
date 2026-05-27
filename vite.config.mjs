import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  root: ".",
  publicDir: "public",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        identity: "public/modules/identity/module-ui.js",
        patterns: "public/modules/patterns/module-ui.js",
        memory: "public/modules/memory/module-ui.js",
        sovereignty: "public/modules/sovereignty/module-ui.js",
        console: "public/modules/console/module-ui.js",
        ecosystem: "public/modules/ecosystem/module-ui.js"
      }
    }
  }
});

export default defineConfig({
  plugins: [react()],
  root: ".",
  build: {
    outDir: "dist"
  }
});
