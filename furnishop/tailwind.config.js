/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-transparent-40': 'rgba(255, 255, 255, 0.4)',
        'white-transparent-50': 'rgba(255, 255, 255, 0.5)',
      },
    },
  },
  // ...
};