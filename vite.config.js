import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.dylanqin.dev',
      routes: [
        '/', 
        '/skills',
        '/experience',
        '/education',
        '/projects', 
        '/contact',
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
