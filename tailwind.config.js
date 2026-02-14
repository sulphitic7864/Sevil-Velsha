/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         primary: "#F54800",
        'text-color': '#333333',
        'text-color-secondary': '#888888',
        'bg-color': '#CBCBCB',
        
        
      },
      
    },
  },
  plugins: [],
};
