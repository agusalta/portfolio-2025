/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        buttonBg: "var(--button-bg)",
        buttonHover: "var(--button-hover)",
        buttonText: "var(--button-text)",
        link: "var(--link)",
        border: "var(--border)",
        icons: "var(--icons)",
      },
    },
  },
  plugins: [],
};
