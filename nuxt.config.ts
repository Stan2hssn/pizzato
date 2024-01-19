import { resolve } from "path"
export default defineNuxtConfig({
  css: ["styles/tailwind.css"],
  modules: ["@nuxtjs/tailwindcss"],
  devtools: { enabled: true },
  alias: {
    images: resolve(__dirname, "./static/img"),
    styles: resolve(__dirname, "./assets/css"),
    gif: resolve(__dirname, "./static/gif"),
  },
  imports: {
    dirs: ["utils"],
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  pages: true,
})
