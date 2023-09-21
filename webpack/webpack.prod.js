const { merge } = require("webpack-merge");
const path = require("path");
const webpackConfig = require("./webpack.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const plugins = [
  new MiniCssExtractPlugin({
    filename: "[contenthash].css",
  }),
  new CssMinimizerPlugin(),
];

module.exports = merge(webpackConfig, {
  mode: "production",
  devtool: false,
  plugins,
  optimization: {
    usedExports: false,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: false,
          compress: true,
          output: {
            // beautify: true,
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  output: {
    path: path.resolve(__dirname, "./../dist"),
    filename: "[fullhash].js",
  },
});
