module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: '',
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
