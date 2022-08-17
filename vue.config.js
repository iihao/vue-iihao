const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  configureWebpack: (config) => {
    config.plugins.push(
      AutoImport({
        resolvers: [ElementPlusResolver()]
      })
    )
    config.plugins.push(
      Components({
        resolvers: [ElementPlusResolver()]
      })
    )
  },
  
  devServer:{

    https:false,
    host: '0.0.0.0',
    port:8080,
    client: {
      /*解决控制台一直报错：WebSocket connection to 'ws://192.168.0.106:8080/ws' failed: */
      webSocketURL: 'ws://0.0.0.0:8080/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  
    proxy:{     
      '/api':{
        target:'https://lianghj.top:8888/api/private/v1/',
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }, 
  //全局css样式
  css: {
    loaderOptions: {
      sass: {
        additionalData:    // 8版本用prependData: 
        `
          @import "@/styles/variables.scss";  // scss文件地址
          @import "@/styles/mixin.scss";     // scss文件地址
        `
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('vue-i18n', 'vue-i18n/dist/vue-i18n.cjs.js')
},
  lintOnSave: false
};
