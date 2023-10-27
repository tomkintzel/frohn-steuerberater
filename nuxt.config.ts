// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    ['@nuxtjs/robots', {rules:{UserAgent: '*', Disallow: ''}}]
    
  ],
  css: ['~/assets/css/main.css'],
})
