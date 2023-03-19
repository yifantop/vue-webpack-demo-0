const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  context: path.join(__dirname, "./src"),
  entry: {
    index: "./index.js",
    // lib: "./lib.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].bundle.js",
    publicPath: "/",
  },
  devServer: {
    devMiddleware: {
      publicPath: "/",
    },
    port: 8081,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "img/",
            name: "[name]_[hash].[ext]",
          },
        },
      },
      {
        test: /\.jpeg$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]_[hash].[ext]",
            outputPath: "img/",
            limit: 1024, // 低于1KB则以base64格式放在js文件中
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "手动搭建webpack5 + vue3",
      template: path.resolve(__dirname, "./index.html"),
      filename: "index.html",
      chunks: ["index"],
    }),
    //
    new VueLoaderPlugin(),
  ],
};
