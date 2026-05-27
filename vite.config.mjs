import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],

  root: ".",

  publicDir: "public",

  build: {
    outDir: "dist",

    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),

        // Force Vite to treat public modules as entry points
        identity: resolve(__dirname, "public/modules/identity/module-ui.js"),
        patterns: resolve(__dirname, "public/modules/patterns/module-ui.js"),
        memory: resolve(__dirname, "public/modules/memory/module-ui.js"),
        sovereignty: resolve(__dirname, "public/modules/sovereignty/module-ui.js"),
        console: resolve(__dirname, "public/modules/console/module-ui.js"),
        ecosystem: resolve(__dirname, "public/modules/ecosystem/module-ui.js")
      }
    }
  }
});
