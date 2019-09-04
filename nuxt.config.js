module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | Nitta.Studio🖕🏻',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,shrink-to-fit=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Produced by Soichiro Nitta.'
      },
      { name: 'keywords', content: 'Nitta Studio,新田 聡一郎,Soichiro,Nitta' },
      { property: 'fb:app_id', content: '654555221603303' },
      { property: 'og:description', content: 'Produced by Soichiro Nitta.' },
      { property: 'og:image', content: 'https://nitta.studio/ogp-0426.jpg' },
      { property: 'og:site_name', content: 'Nitta.Studio' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@soichiro_nitta' },
      { property: 'twitter:creator', content: '@soichiro_nitta' },
      {
        property: 'twitter:description',
        content: 'Produced by Soichiro Nitta.'
      },
      {
        property: 'twitter:image',
        content: 'https://nitta.studio/ogp-0905.jpg'
      }
    ],
    link: [
      { rel: 'icon', href: '/icon-0905.png' },
      { rel: 'apple-touch-icon', href: '/icon-0905.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Spectral|Noto+Serif+JP&display=swap'
      }
    ]
  },
  css: ['~/assets/css/default.css'],
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#444',
    height: '10px'
  },
  // loading: '~/components/TheLoading',
  /*
   ** Customize page transition
   */
  // transition: {
  //   appear: false,
  //   enter (el, done) {
  //   },
  //   leave (el, done) {
  // },
  /*
   ** nuxt-modules
   */
  modules: ['@nuxtjs/pwa', 'nuxt-device-detect', '@nuxtjs/style-resources'],
  styleResources: {
    // your settings here
    stylus: ['~/assets/stylus/variables.styl', '~/assets/stylus/mixins.styl']
  },
  /*
   ** Workbox
   */
  // workbox: {
  //   dev: true,
  // },
  /*
   ** Manifest
   */
  manifest: {
    name: 'Nitta.Studio',
    short_name: 'Nitta.Studio',
    title: 'Nitta.Studio',
    'og:title': 'Nitta.Studio',
    description: 'Produced by Soichiro Nitta.',
    'og:description': 'Produced by Soichiro Nitta.',
    lang: 'ja',
    theme_color: '#0f0f0f',
    background_color: '#0f0f0f',
    display: 'standalone',
    start_url: '/',
    icons: [
      {
        src: '/icon-0905.png',
        sizes: '48x48 96x96 128x128 256x256'
      }
    ]
  },
  /*
   ** Vue Router
   */
  router: {
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    linkPrefetchedClass: 'nuxt-link-prefetched'
  },
  /*
   ** Plugins
   */
  plugins: ['~/plugins/mixin'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
