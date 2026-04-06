/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        breathe: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.75', transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.9' },
          '50%': { opacity: '0.4' },
        },
        shimmer02: {
          '0%, 100%': { opacity: '0.9' },
          '50%': { opacity: '0.7' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        breathe: 'breathe 4s ease-in-out infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
        shimmer02: 'shimmer02 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
