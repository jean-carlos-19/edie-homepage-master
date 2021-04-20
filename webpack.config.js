const path = require("path");

module.exports = {
  entry: path.join(__dirname, "js/App.js"),
  output: {
    path: path.resolve(__dirname, "src/js"),
    filename: "App.js",
  },
};
