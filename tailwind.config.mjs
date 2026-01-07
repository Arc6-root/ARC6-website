/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
  theme: {
    extend: {
      colors: {
        'arc6-blue': '#abb2ca',
        'arc6-dark-gray': '#484848',
      },
      fontFamily: {
        'sans': ['Padauk', 'sans-serif'],
        'lexend': ['Lexend Deca', 'sans-serif'],
        'arvo': ['Arvo', 'serif'],
      },
    },
  },
  plugins: [],
};
