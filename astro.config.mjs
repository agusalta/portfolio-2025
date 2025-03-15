import { defineConfig } from "astro/config";
<<<<<<< HEAD
import tailwind from "@astrojs/tailwind"; // Importación actualizada
=======
import tailwind from "@astrojs/tailwind";
>>>>>>> main
import react from "@astrojs/react";
import netlify from "@astrojs/netlify/static"; // Adaptador para Netlify

export default defineConfig({
<<<<<<< HEAD
  site: "https://shiny-gnome-1c4059.netlify.app/",
=======
  base: "/",
>>>>>>> main
  experimental: {
    svg: true,
  },
  prefetch: true,
<<<<<<< HEAD
  integrations: [react(), tailwind()], // Añadir la integración tailwind
  output: "static", // Cambiar a static para Netlify
  adapter: netlify(), // Usar el adaptador de Netlify
=======
  integrations: [tailwind(), react()],
>>>>>>> main
});
