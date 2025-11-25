// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['../assets/styles/main.scss'],

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
