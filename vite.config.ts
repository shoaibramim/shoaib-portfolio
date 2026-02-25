import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ isSsrBuild }) => ({
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  build: {
    // Client build → dist/   SSR build → dist/server/
    outDir: isSsrBuild ? "dist/server" : "dist",
    target: isSsrBuild ? "node18" : "es2019",
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
}));
