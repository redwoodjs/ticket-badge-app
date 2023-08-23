/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        indianRed: '#CE5D50',
        sandyBrown: '#E2A86D',
        darkSlateGray: '#295B66',
        steelBlue: '#3C8193',
      },
      zIndex: {
        content: 50,
        badge: 40,
        clip: 30,
        card: 20,
        cord: 10,
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      condensed: ['Sherman', 'sans-serif'],
      wide: ['Eagle Sight', 'sans-serif'],
    },
  },
  plugins: [],
}
