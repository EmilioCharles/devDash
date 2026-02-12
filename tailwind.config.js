import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#36e27b",
        "background-light": "#f6f8f7",
        "background-dark": "#112117",
        "surface-dark": "#1a2c22", // A slightly lighter dark for cards
        "surface-border": "#254632", // Border color
        "surface-input": "#0e1b13", // Darker for inputs
      },
      fontFamily: {
        "display": ["Be Vietnam Pro", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
    },
  },
  plugins: [
    forms,
    containerQueries,
  ],
}
