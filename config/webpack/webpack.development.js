/*  ----- webpack development configurations  -----  */
const path = require("path");

module.exports = {
  // Enable sourcemaps for debugging webpack output.
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "build.js"
  },
  module: {
    rules: [
      // typescript loader
      
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  }
};
