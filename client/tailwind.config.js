/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
      primary: "#f69050",
      light: "#F0FBFC",
      light: "#f0e4de",
      dark: "#181d38"

      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

