/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      '100': '28rem',
    },
  },

  keyframes: {
    fadeInOut: {
      '0%, 45%': { opacity: '1' },
      '50%, 100%': { opacity: '0' },
    },
  },
  animation: {
    fadeInOut: 'fadeInOut 6s infinite',
  },
  fontFamily: {
    jost: ['Jost', 'sans-serif'],
  },
  
  plugins: [],
}