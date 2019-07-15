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
      // setup for TYPESCRIPT
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader"
      },
      // setup loader for CSS
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      // setup loader for SCSS
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
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
