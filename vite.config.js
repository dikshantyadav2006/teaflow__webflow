import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import glsl from "vite-plugin-glsl";

export default defineConfig({
  plugins: [
    react(),
    glsl() // Add GLSL plugin
  ],
  resolve: {
    alias: {
      "@": "/src", // Optional: Use this for clean imports
    },
  },
});
