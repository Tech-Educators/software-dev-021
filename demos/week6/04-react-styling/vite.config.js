import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//import tailwind plugin
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
//add the tailwindcss() plugin
