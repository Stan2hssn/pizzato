import plugin from 'nuxt/dist/pages/runtime/plugins/router';

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
      backgroundColor:{
        primary: '#f2f1e4',
      }, 
      fontFamily: {
        sans: ['NeueMontreal-Regular', 'sans-serif'],
        pd: ['Pizzato-D', 'serif'],
      },
      fontSize: {
        'menu': 'calc(1.14583vw + 3px)',
        'slogan': 'calc(.10417vw + 13px)',
        '3xs': '.4rem',
        'body': 'calc(1.45833vw + 28px)',
      },
      transitionTimingFunction: {
      "in-out": "cubic-bezier(.19,1,.22,1)",
      },
      transitionDuration: {
        600: "600ms",
      },
      padding: {
        'offset': 'calc(50vw - 94vw/2)',
        'sp990': 'calc(3.125vw + 30px)',

      },
      spacing: {
        'offset': 'calc(50vw - 94vw/2)',
        'sp90': 'calc(3.125vw + 30px)',
      },
    },
  },
  plugins: [
    require('tailwindcss/plugin')(function({ addBase, theme }) {
      addBase({
        'html': { 
          backgroundColor: theme('backgroundColor.primary'), 
          '-webkit-font-smoothing': 'antialiased'
        },
        'body': {
          'overflow': 'hidden', 
        },
      });
    })
  ],
  
}

