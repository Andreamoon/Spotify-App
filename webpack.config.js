const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env) => {
  return {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: "/",
    },
    mode: "development",
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          use: ["babel-loader"],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
          type: "asset/inline",
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./src/index.html"),
      }),
      new CleanWebpackPlugin(),
      new Dotenv({
        path: "./.env",
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, "src"),
      },
      compress: true,
      port: 8080,
      historyApiFallback: true,
    },
  };
};
