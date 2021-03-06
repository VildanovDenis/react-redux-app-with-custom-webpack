const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ]
};
