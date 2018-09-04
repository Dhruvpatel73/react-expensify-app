const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{ // this counter tell compiler to run babel whenever it found jsx code
      loader: 'babel-loader',
      test: /\.js$/, // we looking for any .js extension file
      exclude: /node_modules/
    }, {
      test: /\.s?css$/, // we looking for any .scss ext file
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }
  ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};
