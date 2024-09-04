/** @type {import('tailwindcss').Config} */
// import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./src/**/**/*.{js,ts,jsx,tsx,html,mdx}', './src/**/*.{js,ts,jsx,tsx,html,mdx}'],
  theme: {
    // screens: { md: { max: '1050px' }, sm: { max: '550px' } },
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      // => @media (max-width: 767px) { ... }


      'md': { max: '1024px' },

      'tablet': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'phone-md': { 'max': '767px' },
      
      'phone': { 'max': '639px' },

      'sm': { max: '550px' },
      // ...defaultTheme.screens
    },
    extend: {
      colors: {
        black: { 900: '#000000' },
        blue_gray: { '600': '#5d5988', '700': '#374c76', '900': '#242535', '700_4c': '#374c764c' },
        light_blue: { 700: '#029dd0' },
        gray: {
          '200': '#e8e8ea',
          '500': '#97989f',
          '600': '#696a75',
          '700': '#666666',
          '900': '#101431',
          '900_01': '#181a2a',
        },
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
