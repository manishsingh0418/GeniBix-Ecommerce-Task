import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Vite-E-commerce/",
  // base: './', // ✅ This tells Vite to use relative asset paths
});
