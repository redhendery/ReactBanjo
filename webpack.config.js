var webpack = require("webpack");
var path = require("path");

var DEV = path.resolve(__dirname, "Dev");
var OUTPUT = path.resolve(__dirname, "output");

var config = {
  entry: DEV + "/index.jsx",
  output: {
    path: OUTPUT,
    filename: "bundle.js"
  }
};

module.exports = config;
