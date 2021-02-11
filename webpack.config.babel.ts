import webpack from "webpack";
import path from "path";

export default {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].[hash].bundle.js",
  },
  devServer: {
    open: true,
    port: 3000,
    contentBase: path.resolve(__dirname, "public"),
  },
};
