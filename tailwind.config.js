/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1400px',
        '3xl': '2000px',
      },
      colors: {
        'light-color-01': '#fbfbf9',
        'light-color-02': '#EEECE3',
        'dark-color-01': '#1F2225',
        'dark-color-02': '#292A2D',
        'beje-color': '#73726C',
      }
    },
  },
  plugins: [],
}

