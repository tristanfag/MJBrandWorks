/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#fdf8f0',
          100: '#faefd9',
          200: '#f4ddb2',
          300: '#edc581',
          400: '#e4a54e',
          500: '#dc8c2b',
          600: '#c47221',
          700: '#a3571d',
          800: '#85461f',
          900: '#6d3b1d',
        },
        neutral: {
          950: '#0a0a0a',
        },
      },
    },
  },
  plugins: [],
};
