import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// vite.config.ts
export default defineConfig({
  server: {
    port: 8002,
  },
  plugins: [
    react(),
    federation({
      name: "app2",
      filename: "remoteEntryReact.js",
      // Modules to expose
      exposes: {
        "./Counter": "./src/Counter",
        "./ToDoList": "./src/ToDoList",
      },
      // Важно: те же singleton-реакты, что и в хосте
      shared: {
        "react": { singleton: true, requiredVersion: "18.2.0" },
        "react-dom": { singleton: true, requiredVersion: "18.2.0" },
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
