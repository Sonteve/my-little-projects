/* const webpack = require("webpack");
const path = require("path"); */
const path = require("path");
module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: {
    piano_app: path.join(__dirname, "/src/app.ts"),
  },
  devServer: {
    contentBase: path.join(__dirname, "/"),
    hot: true,
    host: "localhost",
    port: 3000,
  },
  output: {
    path: path.join(__dirname, "/"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  /* plugins: [],
  optimization: {}, */
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
};
