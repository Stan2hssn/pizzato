import plugin from "nuxt/dist/pages/runtime/plugins/router"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.{js,vue,ts}", "./pages/**/*.vue", "./plugins/**/*.{js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#f2f1e4",
        secondary: "#184dc4",
        filter: "#85a6ea",
      },
      backgroundColor: {
        primary: "#f2f1e4",
      },
      fontFamily: {
        sans: ["NeueMontreal-Regular", "sans-serif"],
        pd: ["Pizzato-D", "serif"],
      },
      fontSize: {
        menu: "calc(1.14583vw + 3px)",
        xs: ".4rem",
        h2: "clamp(60px,14vw,280px)",
        h3: "calc(.10417vw + 13px)",
        "h3-lg": "calc(.34188vw + 10.71795px)",

        body: ["calc(1.45833vw + 28px)", { lineHeight: "3rem" }],
        "body-lg": ["calc(2.90598vw + 14.10256px)", { lineHeight: "3rem" }],

        details: "calc(.10417vw + 13px)",
        "details-lg": "calc(.34188vw + 10.71795px)",
      },
      transitionTimingFunction: {
        "in-out": "cubic-bezier(.19,1,.22,1)",
      },
      transitionDuration: {
        600: "600ms",
      },
      padding: {
        offset: "calc(50vw - 94vw/2)",
        sp990: "calc(3.125vw + 30px)",
      },
      spacing: {
        offset: "calc(50vw - 94vw/2)",
        sp90: "calc(3.125vw + 30px)",
      },
      screens: {
        md: "960px",
        lg: "1380px",
      },
      animation: {
        title: "title 20s linear infinite",
      },
      keyframes: {
        title: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-200%)" },
        },
      },
      gridTemplateColumns: {
        footerInner: `var(--col-3) var(--col-4) var(--col-5)`,
      },
    },
  },
  plugins: [
    require("tailwindcss/plugin")(function ({ addBase, theme }) {
      addBase({
        html: {
          backgroundColor: theme("backgroundColor.primary"),
          "-webkit-font-smoothing": "antialiased",
        },
        body: {
          overflow: "hidden",
        },
        hr: {
          "box-sizing": "content-box",
          border: "none",
          margin: "0",
          padding: "0",
        },
      })
    }),
  ],
}
