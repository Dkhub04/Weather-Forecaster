/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        boxShadow: {
          'custom': '10px -2px 20px 2px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}