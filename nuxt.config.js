export default {
  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/tailwindcss',
  ],
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  srcDir: 'src',
  head: {
    title: 'QAZED.tech - Promoting IoT-based Blended Learning in Qazaqstan',
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'description',
        name: 'description',
        content: 'QAZED.tech - Promoting IoT and Blended Learning in Qazaqstan'
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge,chrome=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '~/assets/css/favicon.ico' }
    ],
    htmlAttrs: {
      lang: 'en'
    }
  },
  css: ['~/assets/css/main.css'],
  modules: [
    'tailwindcss',
    'nuxt-purgecss',
    '@nuxtjs/pwa',
    'nuxt-lazy-load',
    '@nuxtjs/sitemap',
    'postcss-hexrgba'
  
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: 'tailwind.config.js',
        'postcss-url': false,
        'postcss-nested': {},
        'postcss-hexrgba': {}
      }
    }
  },
  purgeCSS: {
    mode: 'postcss'
  },

  sitemap: {
    hostname: 'https://qazed.tech',
    gzip: true
  }
}
