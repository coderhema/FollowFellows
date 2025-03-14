/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
            overusedGrotesk: ["Overused Grotesk", "sans-serif"],
            sans: ["var(--font-geist-sans)", "sans-serif"],
            mono: ["var(--font-geist-mono)", "monospace"],
        },
      },
    },
    plugins: [],
  }