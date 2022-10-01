const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/flexlanguage-playground',
  configureWebpack: {
    experiments: {
      asyncWebAssembly: true,
    }
  }
})
