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
        primary: {
          DEFAULT: '#124e66',
          50: '#212a31',
          100: '#2e3944',
          200: '#748d92',
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
