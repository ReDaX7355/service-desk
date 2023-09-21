const { merge } = require("webpack-merge");
const path = require("path");
const webpackConfig = require("./webpack.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugins = [
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css",
  }),
];

module.exports = merge(webpackConfig, {
  mode: "development",
  devtool: "inline-source-map",
  plugins,
  output: {
    path: path.resolve(__dirname, "./../dist"),
    filename: "[name].[contenthash].js",
  },
});
