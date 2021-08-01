
module.exports ={
devServer:{
    host:"localhost",
    port:8080,
    proxy:{
      '/api':{
        target:'http://news-at.zhihu.com',
        changeOrigin: true,
        ws: true,
        pathRewrite:{
          '/api':'/api/3'
        }
      }
    }
  },
}