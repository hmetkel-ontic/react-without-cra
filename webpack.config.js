const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: "./src/index.js",

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  // defines where html file where bundle js files will be injected
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    open: true,
  },
};
