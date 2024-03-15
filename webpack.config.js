const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const DotenvWebpackPlugin = require("dotenv-webpack");
const webpack = require("webpack");

module.exports = (env) => {
  const isProduction = env.NODE_ENV === "production";
  const envFile = isProduction ? ".env.production" : ".env.development";
  const envPath = path.resolve(__dirname, envFile);
  const envVars = require("dotenv").config({ path: envPath }).parsed || {};

  return {
    entry: "./src/index.tsx",

    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"],
          },
          use: "ts-loader",
        },
        {
          test: /\.css$/,
          use: [MiniCSSExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(png|jpg|gif|mp3)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "./assets/audio/[name].[ext]",
              },
            },
          ],
        },
      ],
    },

    // devtool: prod ? undefined : "source-map",

    // defines where html file where bundle js files will be injected
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "public", "assets"),
            to: path.resolve(__dirname, "dist", "assets"),
          },
        ],
      }),
      new MiniCSSExtractPlugin(),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(envVars),
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
};
