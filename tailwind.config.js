/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode with class strategy ('media' is also an option)
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neutralLight: '#F8F9FA',
        softBlue: '#90E0EF',
        mediumBlue: '#00B4D8',
        darkBlue: '#0077B6',
        navyBlue: '#03045E',
        warmAccent: '#FF6B6B',
      },
    },
  },
  plugins: [],
};
