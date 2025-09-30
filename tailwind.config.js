/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A4D2E', // Deep green
        secondary: '#FFB200', // Warm orange
        accent: '#FFD93D', // Bright yellow
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
