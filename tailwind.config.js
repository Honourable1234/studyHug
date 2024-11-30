/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'xs': '320px',
        'rs': '420px',
      },
      fontFamily: {
        rethink: ['Rethink Sans', 'sans-serif'],
        instrument: ['instrument serif', 'serif']
      },

    },
  },
  plugins: [],
};
