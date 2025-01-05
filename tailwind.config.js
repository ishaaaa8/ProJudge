/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'monocode': ['Roboto Mono', 'monospace']
    },
    extend: {
      textColor: {
        'gold': '#FFD700', 
      },
    },
  },
  plugins: [],
}

