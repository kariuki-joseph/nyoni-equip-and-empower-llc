/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary: '#C1207E',
        white: '#FFFFFF',
        text: {
          default: '#000000',
          primary: '#C1207E', // CTA for text
        }
      },
    },
  },
  plugins: [],
}

