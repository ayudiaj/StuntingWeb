/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      'primary100' : '#FFF9D9',
      'primary200' : '#FFF1B4',
      'primary300' : '#FFE68F',
      'primary400' : '#FEDB73',
      'primary500' : '#FFCB44',
      'primary600' : '#DBA632',
      'primary700' : '#B78522',
      'primary800' : '#8C5A05',
      'green800' : '#25834E',
      'green700' : '#3BA25D',
      'green600' : '#56C16F',
      'green500' : '#75E285'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

