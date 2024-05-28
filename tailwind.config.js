/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {screens: {

      'xs' : '200px',
      
      'sm': '300px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '2000',
      // => @media (min-width: 1280px) { ... }

      '2xl': '4000px',
      // => @media (min-width: 1536px) { ... }
    }},
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://iili.io/HDh2O41.png')",
       
      }
    }
  },
  plugins: [],
}