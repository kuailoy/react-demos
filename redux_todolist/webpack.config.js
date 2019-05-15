var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var devServerRouter = require('./stub');

module.exports = {
  mode: 'development',
  entry: {
    index: path.join(__dirname, './src/index')
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].min.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './index.html'),
      chunks: ['index']
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'actions': path.resolve(__dirname, './src/actions'),
      'components': path.resolve(__dirname, './src/components'),
      'containers': path.resolve(__dirname, './src/containers'),
      'reducers': path.resolve(__dirname, './src/reducers')
    }
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  devServer: {
    before: function(app) {
      for (var route in devServerRouter) {
        app.get(route, function(req, res) {
          res.json(devServerRouter[route])
        });
      }
    }
  }
}