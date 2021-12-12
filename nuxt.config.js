export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '河南大学软件学院交流论坛',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '河南大学软件学院学习生活交流问答网站' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/bitbug_favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/asserts/theme/index.css',
    '~/asserts/css/global.css',
    {src:'element-ui/lib/theme-chalk/display.css',ssr:false}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugin/vuePlugin/test.js',
    '~/plugin/element-plugin.js',
    '~/plugin/axiosInterceptor.js',
    '~/plugin/vue-mavon-editor.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt'
  ],
  axios: {
    proxy: true // Can be also an object with default options
  },
  proxy: {
    '/api/': 'https://mock.mengxuegu.com/mock/61925633f126df7bfd5b7a1a',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
