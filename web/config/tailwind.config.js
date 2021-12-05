const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    ...defaultTheme,
    ...{
      extend: {},
      colors: {
        ...colors,
        primary: colors.red[100],
        secondary: colors.red[900],
      },
      spacing: {
        ...defaultTheme.spacing,
        '2/3': '66.666667%',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
