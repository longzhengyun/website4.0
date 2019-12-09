
module.exports = {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        htmlAttrs: {
            lang: 'zh-Hant',
        },
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-status-bar-style', content: 'white' },
            { name: 'format-detection', content: 'email=no, telephone=no' },
            { name: 'renderer', content: 'webkit' },
            { name: 'full-screen', content: 'yes' },
            { name: 'x5-fullscreen', content: 'true' },
            { name: 'x5-page-mode', content: 'app' },
            { name: 'browsermode', content: 'application' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'apple-touch-icon', sizes: '512x512', href: '/img/icon.png' }
        ],
        script: [
            { innerHTML: '(function(d,c){var e=d.documentElement,b="orientationchange" in window?"orientationchange":"resize",a=function(){var f=e.clientWidth;if(!f){return}e.style.fontSize=100*(f/750)+"px"};if(!d.addEventListener){return}c.addEventListener(b,a,false);d.addEventListener("DOMContentLoaded",a,false)})(document,window);', type: 'text/javascript', charset: 'utf-8' },
        ],
        __dangerouslyDisableSanitizers: ['script']
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#2fa879' },
    /*
    ** Global CSS
    */
    css: ['~assets/main'],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        { src: '~plugins/axios.js' },
        { src: '~plugins/utils.js' },
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        '@nuxtjs/toast',
    ],
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {
        proxy: true, // 代理
        retry: true // 重试
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    },
    render: {
        http2: {
            push: true
        },
        resourceHints: false // 禁用预加载渲染，解决多项目加载不相干js问题
    },
    cache: true,
    toast: {
        position: 'center',
        duration: '1000'
    }
}
