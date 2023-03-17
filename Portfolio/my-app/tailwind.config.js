/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    gradientColorStops: theme => ({
     ...theme('colors'),
     'primary': '#1A736D',
     'secondary': '#23608B',
    
    }),
    extend: {},
  },
  plugins: [],
}