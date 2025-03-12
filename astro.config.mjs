import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  base: "/",
  experimental: {
    svg: true,
  },
  prefetch: true,
  integrations: [tailwind(), react()],
});
