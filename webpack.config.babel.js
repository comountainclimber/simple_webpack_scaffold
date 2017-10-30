import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[hash].js'
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [require('autoprefixer')({ browsers: ['> 5%'] })]
              }
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        loader: 'file-loader?limit=10000&name=[name].[ext]'
      },
      {
        test: /\.woff|\.woff2|\.svg|\.eot|\.ttf/,
        loader: 'file-loader?prefix=font/&limit=10000&name=[name].[ext]'
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new ExtractTextPlugin('styles.[hash].css'),
    new CleanPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'head',
      filename: 'index.html',
      favicon: 'src/favicon.ico'
    })
  ]
};
