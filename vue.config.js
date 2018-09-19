module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://www.jary8.com/static/data/db_config.php',
        ws: true,
        changeOrigin: true
      }
    }
  },
  pwa: {
    name: '佳瑞网',
    themeColor: '#fff',
    msTileColor: '#c00',
    appleMobileWebAppCapable: 'yes',
    assetsVersion: '0.0.1',
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest'
  }
}
