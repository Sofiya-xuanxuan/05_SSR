const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // 路由配置
  router: {
    middleware: ['index-redirect']
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src:'@/plugins/element-ui',ssr:false},
    '@/plugins/api-inject',
    //{src:'@/plugins/axios', mode: 'client'},//只运行于客户端，但是用户在访问首屏的时候，是没办法正确拿到cookie的
    '@/plugins/axios'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    "cookie-universal-nuxt"
  ],

  axios: {
    proxy: true
  },
  proxy: {
    "/api": "http://localhost:8080"//此处写服务器的地址
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
