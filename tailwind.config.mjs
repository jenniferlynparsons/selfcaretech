/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Exact original colors to match screenshot
        'selfcare-blue': '#0080a7', // Main background color
        'selfcare-accent': '#37b4da', // Accent color for hover states
        'selfcare': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0080a7',
          600: '#0080a7',
          700: '#006b8a',
          800: '#075985',
          900: '#0c4a6e',
        },
        'accent': {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#37b4da',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
      },
      maxWidth: {
        'site': '960px', // Original site max width
      },
    },
  },
  plugins: [],
}