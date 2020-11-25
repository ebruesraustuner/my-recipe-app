const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  css: {

    loaderOptions: {
      
      scss: {
        additionalData: `
        @import "@/styles/_variables.scss"; 
        @import "@/styles/_navbar.scss";
        `
      },
    }
  },
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin({analyzerMode: 'disabled'}),
    ],
  },
  productionSourceMap: false,
};