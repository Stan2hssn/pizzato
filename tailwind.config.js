/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f2f1e4',
        secondary : '#184dc4',
        filter : '#85a6ea',
      },      
    },
  },
  corePlugins: {
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    ringOpacity: false,
  },
  plugins: [],
}

