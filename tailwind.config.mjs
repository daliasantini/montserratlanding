import { transform } from 'next/dist/build/swc/generated-native';

export default {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserratAlt: ['"Montserrat Alternates"', 'sans-serif'],
      },
      keyframes: {
        fadeInBounce: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '60%': { opacity: '1', transform: 'scale(1.1)' },
          '100%': { transform: 'sacle(1)' },
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
