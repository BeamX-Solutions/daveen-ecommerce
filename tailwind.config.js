/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A4D2E', // Deep green (main color)
        secondary: '#388E3C', // Medium green
        accent: '#FFD93D', // Bright yellow
        offwhite: '#F6F6F6',
        lightgray: '#F2F2F2',
      },
      gradientColorStops: {
        primary: '#1A4D2E',
        secondary: '#388E3C',
        accent: '#FFD93D',
        offwhite: '#F6F6F6',
        lightgray: '#F2F2F2',
      },
      gradientColorStops: {
        primary: '#1A4D2E',
        secondary: '#FFB200',
        accent: '#FFD93D',
        offwhite: '#F6F6F6',
        lightgray: '#F2F2F2',
      },
    },
  },
  plugins: [],
};
