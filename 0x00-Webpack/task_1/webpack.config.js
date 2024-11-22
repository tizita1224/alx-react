const path = require('path');

module.exports = {
  mode: 'production', // Mode for Webpack
  entry: './js/dashboard_main.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Name of the output file
    path: path.resolve(__dirname, 'public'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Matches JavaScript files
        exclude: /node_modules/, // Excludes node_modules from processing
        use: {
          loader: 'babel-loader', // If using Babel for transpiling (optional)
        },
      },
    ],
  },
};
