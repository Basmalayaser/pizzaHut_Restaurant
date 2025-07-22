/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Match Vite structure
    './node_modules/flowbite/**/*.{js,jsx,ts,tsx}', // Flowbite components
  ],
  theme: {
    extend: {
      fontFamily: {
         serif: ['"PT Serif"', 'serif'],
         oleo: ['"Oleo Script"', 'system-ui'], // Correct font family definition
      },
    },
    
  },
  darkMode: 'class', // For Flowbite's dark mode support
  plugins: [],
};

