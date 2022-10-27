const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";
module.exports = {
  entry: {
    app: ["babel-polyfill", "./src/index.tsx"]
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.bundle.js",
    publicPath: "/"
  },
  mode,
  resolve: {
    alias: {
      "@Components": path.resolve(__dirname, "src/components/"),
      "@Assets": path.resolve(__dirname, "src/assets/"),
      "@Redux": path.resolve(__dirname, "src/redux/"),
      "@Services": path.resolve(__dirname, "src/services/"),
      "@Utils": path.resolve(__dirname, "src/utils/"),
      "@Constants": path.resolve(__dirname, "src/constants/"),
      "@Theme": path.resolve(__dirname, "src/utils/theme/"),
      "@Hooks": path.resolve(__dirname, "src/hooks/"),
      "@Pages": path.resolve(__dirname, "src/pages/"),
      "@Styles": path.resolve(__dirname, "src/styles/"),
      "@Types": path.resolve(__dirname, "src/types/"),
      "@Helpers": path.resolve(__dirname, "src/helpers/"),
      "@Models": path.resolve(__dirname, "src/models")
    },
    extensions: [".tsx", ".ts", ".js"],
    fallback: {
      os: false,
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      assert: false,
      util: false,
      crypto: require.resolve("crypto-browserify")
    }
  },
  devServer: {
    static: path.join(__dirname, "public"),
    hot: true,
    port: 3000,
    historyApiFallback: true
  },
  performance: {
    hints: process.env.NODE_ENV === "production" ? "warning" : false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          prod ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg|pdf|mp4)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/public/index.html",
      favicon: __dirname + "/public/favicon.png",
      filename: "index.html",
      inject: "body"
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: false // Enable to remove warnings about conflicting order
    }),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"]
    }),
    new Dotenv({
      path: `./.env`
    })
  ]
};
