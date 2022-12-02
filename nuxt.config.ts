import VueMacros from 'unplugin-vue-macros/vite'

export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@vueuse/nuxt'],
  vite: {
    plugins: [VueMacros()]
  },
  typescript: {
    shim: false
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
})
