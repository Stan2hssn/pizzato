import { resolve } from "path"
export default defineNuxtConfig({
  css: ["styles/tailwind.css"],
  modules: ["@nuxtjs/tailwindcss"],
  devtools: { enabled: true },
  alias: {
    images: resolve(__dirname, "/static/img"),
    media: resolve(__dirname, "/static/media"),
    styles: resolve(__dirname, "/assets/css"),
    gif: resolve(__dirname, "/static/gif"),
    content: resolve(__dirname, "/static/content"),
  },
  imports: {
    dirs: ["utils", "store"],
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  pages: true,
  ssr: false,
})
