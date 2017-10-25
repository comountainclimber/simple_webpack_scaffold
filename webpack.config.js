var path = require('path');
// var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'motili-widget.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.woff|\.woff2|\.svg|\.eot|\.ttf/,
        loader: 'url-loader?prefix=font/&limit=10000'
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanPlugin(['dist']),
    // new UglifyJSPlugin({ uglifyOptions: {
    //   compress: true,
    //   minimize: true
    // }}),
    // new webpack.DefinePlugin({WP_ENVIRONMENT: JSON.stringify(process.env.NODE_ENV)}),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: false,
      filename: 'index.html'
    })
  ]
};
