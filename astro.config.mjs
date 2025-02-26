import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import vercel from "@astrojs/vercel";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    svg: true,
  },

  prefetch: true,
  integrations: [react()],
  adapter: vercel(),
});