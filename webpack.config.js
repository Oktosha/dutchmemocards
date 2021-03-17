const path = require("path");

module.exports = {
  mode: "production",
  entry: "./front-src/study.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "study.js",
    path: path.resolve(__dirname, "front-dist"),
  },
};
