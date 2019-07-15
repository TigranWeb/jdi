/*  ----- webpack common configurations  -----  */

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./src"],
  // Add resolvable extensions.
  resolve: {
    modules: ["src", "node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader"
      },

      {
        test: /\.jsx$/,
        loader: "babel-loader",
        options: { presets: ["es2015"] }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
  // TODO:  ?????????????
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM"
  // }
};
