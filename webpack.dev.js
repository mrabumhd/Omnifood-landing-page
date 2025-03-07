const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  // Source map
  devtool: "eval-source-map",
  // Webpack Dev Server
  devServer: {
    watchFiles: ["./src/template.html"],
  },
});
