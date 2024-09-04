const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // or 'production' depending on your environment
  entry: './src/index.js', // Update this to your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devtool: 'inline-source-map', // Enable inline source maps
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Handle .css files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Handle image files
        type: 'asset/resource', // Use asset modules for images
        use: [
          {
            loader: 'image-webpack-loader', // Optimize images
            options: {
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // If you're using Babel for JS transpiling
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Your HTML template file
    }),
    new webpack.HotModuleReplacementPlugin(), // Enable HMR
  ],
};
