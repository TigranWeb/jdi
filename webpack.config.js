require("dotenv").config();
const merge = require("webpack-merge");
const path = require("path");
// ------------ webpack common configurations ------------------
const commonConfig = require("./config/webpack/webpack.common");

module.exports = (env, { mode }) => {
  // ------------ webpack mode configurations ------------------
  const modeConfig = require(`./config/webpack/webpack.${mode}.js`);
  // ------------ webpack merge common and mode configurations ------------------
  return merge({ mode }, commonConfig, modeConfig);
};
