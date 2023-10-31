// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    ['@nuxtjs/robots', {rules:{UserAgent: '*', Disallow: ''}}],
    '@nuxt/image',
    '@nuxtjs/sitemap',
    
  ],
  sitemap: {
    hostname: 'https://www.frohn-steuerberate.de',
    gzip: true,
    routes: ['/', '/datenschutz', '/impressum']
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
