const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

export default {
  devtool: 'source-map',
  entry: './client/app/app.js',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: "app.bundle.js"
  },
  resolve: {
    alias: {
      'handlebars' : 'handlebars/dist/handlebars.js'
    }
  },
  module : {
    rules : [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              failOnWarning: false,
              failOnError: false
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: [
         'style-loader',
         'css-loader',
         'sass-loader',
        ]
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'index',
      template: path.resolve(process.cwd(), './client/index.html'),
      hash: true
    })
  ]
};
