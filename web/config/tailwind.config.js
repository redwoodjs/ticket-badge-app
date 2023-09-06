/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
      },
      colors: {
        chestnutRose: '#CE5D50',
        darkGray: '#9D9D9D',
        sandyBrown: '#E2A86D',
        darkSlateGray: '#295B66',
        steelBlue: '#3C8193',
        gainsboro: '#E2E2E2',
      },
      zIndex: {
        mobileNav: 935,
        modal: 930,
        overlayContent: 902,
        overlaySlideout: 901,
        overlay: 900,
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
      mono: ['Roboto Mono', 'monospace'],
    },
  },
  plugins: [],
  safelist: ['arrow--right', 'arrow--left', 'arrow--top', 'arrow--bottom'],
}
