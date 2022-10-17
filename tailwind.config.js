/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js, ts, tsx, jsx}',
    './components/**/*.{js, ts, jsx, tsx}',
  ],
  theme: {
    extend: {
      screens: {
        container: '73.75rem',
        wrapper: '71.375rem',
      },
      colors: {
        primary: '#0052ff',
        line: '#eceff1',
        navlinks: 'rgb(5,15,25)',
      },
      keyframes: {
        slidein: {
          '0%': {
            transform: 'translateY(-24rem)',
            opacity: '0',
          },
          '100%': {
            transform: 'none',
            opacity: '1',
          },
        },
      },
      animation: {
        slidein:
          'slidein .5s cubic-bezier(0.6, 0, 0.15, 1) 0s 1 normal forwards running',
      },
      zIndex: {
        1: '1',
        2: '2',
      },
      spacing: {
        nav: 'cal(-4rem + 100vh)',
        4.5: '1.125rem',
        25: '6.25rem',
      },
      fontSize: {
        title: ['3.875rem', { lineHeight: '1.15' }],
        subtitle: ['1.25rem', { lineHeight: '1.4' }],
      },
    },
  },
  plugins: [],
};
