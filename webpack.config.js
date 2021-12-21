// eslint-disable-next-line no-undef
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line no-undef
const path = require('path');

// eslint-disable-next-line no-undef
module.exports = {
  mode: 'development',
  entry: {
      index: './src/index.js',
  },
  output: {
    filename: 'main.js',
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
      static: './dist',
  },
  plugins: [
      new HtmlWebpackPlugin({
          title: 'Development',
          template: './src/index.html',
          filename: 'index.html'
      }),
  ],

  module: {
      rules: [
          {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource',
          },
          {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
          }
      ],
  },

};