/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sansis': ['https://fonts.google.com/specimen/Barlow'],
      'fraunces':[ 'https://fonts.google.com/specimen/Fraunces']
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../images/bg-sidebar-desktop.svg')",
        'hero-section': "url('../images/mobile/image-header.jpg')",
      }
    },
  },
  plugins: [],
}