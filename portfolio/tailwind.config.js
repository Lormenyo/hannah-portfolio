/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'appBackground': '#23283E',
      'appBlue': '#28E0F8',
      'appGray': '#B7B7B7',
      'appAltBg': '#2A304C',
      gray: colors.gray,
      red: colors.red,
      indigo: colors.indigo,
      yellow: colors.yellow,
    }
  },
  plugins: [],
}

