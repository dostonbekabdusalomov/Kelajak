// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  (module.exports = {
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  })
)
