// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@unocss/nuxt'],
  css: ['~/assets/css/main.css']
})
