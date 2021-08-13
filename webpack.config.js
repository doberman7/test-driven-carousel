// webpack.config.js
module.exports = {
  mode: "development", // good defaults to run locally
  entry: {
    carousel: "./src/Carousel.js", // telling webpack to build a bundle called carousel.js that contains src/Carousel.js and its dependencies.
  },
  module: {
    // 3
    rules: [
      {
        test: /\.js$/,
        loader: require.resolve("babel-loader"), // This rule says, “Use babel-loader for all .js files.” The loader will run each script through Babel with the config found in the root of our project.
      },
    ],
  },
};
