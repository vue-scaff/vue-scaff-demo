// Use Path
const path = require("path");

// Get Name From Package
const { name } = require("./package.json");

// Resolve Path
const resolve = dir => path.join(__dirname, dir);

// Exports
module.exports = {
  // publicPath is be set in `injection`
  publicPath: process.injection.publicPath,
  productionSourceMap: false,
  lintOnSave: true,
  // Lan Access
  devServer: {
    host: "0.0.0.0"
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/sheet/variables.scss";
        `
      }
    }
  },
  transpileDependencies: [],
  configureWebpack: {
    name,
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  }
};
