const path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/dashboard_main.js', 
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'public'), 
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', 
        },
      },
    ],
  },
};
