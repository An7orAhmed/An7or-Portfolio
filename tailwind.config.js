import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6B3280',
        secondary: '#E040FB',
        background: '#0A1D32',
      },
    },
  },
  plugins: [daisyui],
}

