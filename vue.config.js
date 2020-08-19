module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://user-server.xubei.com/',
        ws: true,
        changeOrigin: true,
        pathRewrite: { // 重写路径: 去掉路径中开头的'/api'
          '^/api': ''
        }
      },
      '/zzx': {
        target: 'http://localhost:3000/',
        ws: true,
        changeOrigin: true,
        pathRewrite: { // 重写路径: 去掉路径中开头的'/zzx'
          '^/zzx': ''
        }
      }
    }
  }
}