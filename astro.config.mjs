import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind"; // Importación actualizada
import react from "@astrojs/react";
import netlify from "@astrojs/netlify/static"; // Adaptador para Netlify

export default defineConfig({
  site: "https://shiny-gnome-1c4059.netlify.app/",
  experimental: {
    svg: true,
  },
  prefetch: true,
  integrations: [react(), tailwind()], // Añadir la integración tailwind
  output: "static", // Cambiar a static para Netlify
  adapter: netlify(), // Usar el adaptador de Netlify
});
