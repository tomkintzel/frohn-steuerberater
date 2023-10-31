// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    ['@nuxtjs/robots', {rules:{UserAgent: '*', Disallow: ''}}],
    '@nuxt/image',
    'nuxt-simple-sitemap'
  ],
  content: {
    documentDriven: true
  },
  site: {
    url: "https://www.frohn-steuerberater.de",
    strictNuxtContentPaths: true
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
       htmlAttrs: {
        lang: 'de',
      },
    }
  }
})
