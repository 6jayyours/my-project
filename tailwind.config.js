/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: '#D0CFC8', 
          text: '#2e3944',       
        },
        dark: {
          background: '#212a31', 
          text: '#D748d92',       
        },
      },
      fontFamily: {
        sans: ['Rubik', 'ui-sans-serif', 'system-ui'],
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
