// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  components: [ 
    {
    path: '~/components',
    pathPrefix: false,
  }],
  pages: true,
})
