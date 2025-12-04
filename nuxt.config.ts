// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['../assets/styles/main.scss'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  router: {
    scrollBehavior (to, from, savedPosition) {
      if (to.hash) {
        const el = document.querySelector(to.hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      } else if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0 }
      }
    }
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils'
  ],
  icon: {
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './assets/icons'
      }
    ]
  },
  vite: {
    plugins: [svgLoader()]
  }
})
