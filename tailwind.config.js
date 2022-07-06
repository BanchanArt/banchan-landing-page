/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/*.css"],
  theme: {
    extend: {
      colors: {
        "banchan-green": "#96e9d3",
        "banchan-green-accent": "#359655"
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
}
