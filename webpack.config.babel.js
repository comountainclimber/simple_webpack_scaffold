import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
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
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=10000'
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
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: false,
      filename: 'index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: 'assets',
        to: 'assets',
        context: `${__dirname}/src`
      }
    ]),
    // new UglifyJSPlugin({ uglifyOptions: {
    //   compress: true,
    //   minimize: true
    // }}),
    // new webpack.DefinePlugin({WP_ENVIRONMENT: JSON.stringify(process.env.NODE_ENV)}),
  ]
};
