import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/projet2': 'https://api-univers-1rmkxnbib-clement4444s-projects.vercel.app', // Remplacez cette URL par l'URL de votre API
    },
  },
  base: '/',
});
