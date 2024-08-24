/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./src/**/**/*.{js,ts,jsx,tsx,html,mdx}', './src/**/*.{js,ts,jsx,tsx,html,mdx}'],
  theme: {
    screens: { md: { max: '1050px' }, sm: { max: '550px' } },
    extend: {
      // fontFamily: {
      //   primary: ['var(--font-primary)'],
      // },
      colors: {
        black: { 900: '#000000' },
        blue_gray: { '600': '#5d5988', '700': '#374c76', '900': '#242535', '700_4c': '#374c764c' },
        gray: { 700: '#666666', 900: '#101431' },
        indigo: { 900: '#1d285e' },
        white: { a700: '#ffffff' },
      },
      boxShadow: {},
      fontFamily: {
        inter: 'Inter',
        dmsans: 'DM Sans',
        worksans: 'Work Sans',
        plusjakartasans: 'Plus Jakarta Sans',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar'), require('@tailwindcss/forms')],
};
