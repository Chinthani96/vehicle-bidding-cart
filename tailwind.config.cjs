/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'text-color':'#ACA9BB',
      'header-color':'#ACA9BB',
      'bg':'#474747',
      'teal':'#25766E',
      'backdrop':'rgba(0, 0, 0, 0.75)',
      'badge':'#CE4A50'
    },
  },
  plugins: [],
};
