module.exports = {
  devServer : {
    proxy : {
      '/api' : {
        target : 'http://localhost:4000',
        ws : true, // websockets
        changeOrigin : true,
      }
    }
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5  // 37.5是为了兼容mintUI
          })
        ]
      }
    }
  },
}