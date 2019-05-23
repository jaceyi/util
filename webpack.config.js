const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  mode: 'production',

  entry: './src',

  output: {
    path: path.resolve('', 'build'),
    filename: 'static/js/[name].[hash:8].js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.(scss)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(css)$/,
        include: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader'
          ]
        })
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('', 'src/index.html')
    }),
    new ExtractTextPlugin({
      filename: '[name].[hash:8].css'
    }),
    new FriendlyErrorsPlugin()
  ],

  devServer: {
    inline: true,
    historyApiFallback: true,
    contentBase: './src',
    progress: true,
    overlay: {
      warnings: true,
      errors: true
    },
    port: 9000
  }
};
