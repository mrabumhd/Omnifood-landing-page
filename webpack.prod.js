// const HtmlWebpackPlugin = require("html-webpack-plugin"); // for HTML bundling
// const path = require("path"); // for js bundling

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
});
