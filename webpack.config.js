'use strict'

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
  entry: {
    bundle: './src/app',
  },

  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },

  watch: true,

  watchOption: {
    aggregateTimeout: 100
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplate: ['*-loader'],
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      { test: /\.js$/, include: path.resolve(__dirname, "src"), loader: 'babel' },
      { test: /\.html/, include: path.resolve(__dirname, "src"), loader: 'html' },
      { test: /\.sass$/, include: path.resolve(__dirname, "src"), loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap') },
      { test: /\.(jpe?g|png|gif|svg)$/i, include: path.resolve(__dirname, "src"), loader: 'file?name=/assets/[name].[ext]' }
    ]
  },

  plugins: [
    new ExtractTextPlugin('main.css', {
      allChunks:true
    })
  ]
}