module.exports = {
  devServer:{
    host:"localhost",
    port:8080,
    proxy:{
      '/api':{
        target:'https://news-at.zhihu.com',
        changeOrigin: true,
        pathRewrite:{
          '/api':'/api/3'
        }
      }
    }
  },
  presets: [
    '@vue/cli-plugin-babel/preset',
    
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
