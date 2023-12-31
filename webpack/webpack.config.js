/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const tailwindcss = require('tailwindcss');

const rules = [
  {
    test: /\.[jt]sx?$/i,
    exclude: '/node_modules/',
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
      },
    },
  },
  {
    test: /\.(s[ac]|c)ss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [['postcss-preset-env', {}], tailwindcss],
          },
        },
      },
    ],
  },
  {
    test: /\.(s[ac])ss$/i,
    use: ['sass-loader'],
  },
  {
    test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/images/[hash][ext]',
    },
  },
  {
    test: /\.(woff2?|eot|ttf|otf)$/i,
    exclude: '/node_modules/',
    type: 'asset/resource',
    generator: {
      filename: 'assets/fonts/[hash][ext]',
    },
  },
];

module.exports = {
  entry: {
    index: {
      import: path.resolve(__dirname, './../src/index.tsx'),
    },
  },
  devtool: 'inline-source-map',
  performance: {
    hints: false,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Caching',
      minify: false,
      hash: true,
      template: path.resolve(__dirname, './../src/index.html'),
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
  output: {
    clean: true,
  },
  module: {
    rules,
  },
};
