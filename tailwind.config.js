/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        retro: 'retro',
        mabryRegular: 'mabryRegular',
        mabryMedium: 'mabryMedium',
        mabryLight: 'mabryLight',
        mabryBlack: 'mabryBlack',
        mabryBold: 'mabryBold',
      },
      animation: {
        'spin-slow': 'spin 9s linear infinite',
      },
    },
  },
  plugins: [],
}
