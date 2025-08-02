import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
  server: {
    proxy: {
      "/kpi": "http://localhost:1337",
      "/product": "http://localhost:1337",
      "/transaction": "http://localhost:1337",
    },
  },
});
