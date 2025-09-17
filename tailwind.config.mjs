/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserratAlt: ['"Montserrat Alternates"', 'sans-serif'],
      },
      colors: {
        background: '#E6E5E1',
        foreground: '#141414',
        accent: '#FF5339',
        secondary: '#E6E5E1',
      },
      keyframes: {
        fadeInBounce: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '60%': { opacity: '1', transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeOutScale: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.5)' },
        },
      },
      animation: {
        fadeInBounce: 'fadeInBounce 0.5s ease-out',
        fadeOutScale: 'fadeOutScale 0.3s ease-in forwards',
      },
    },
  },
  plugins: [],
};
