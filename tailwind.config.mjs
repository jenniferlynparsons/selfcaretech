/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Exact original colors to match screenshot
        'selfcare-blue': '#0080a7', // Main background color
        'selfcare-accent': '#37b4da', // Accent color for hover states
      },
      maxWidth: {
        'site': '960px', // Original site max width
      },
    },
  },
  plugins: [],
}