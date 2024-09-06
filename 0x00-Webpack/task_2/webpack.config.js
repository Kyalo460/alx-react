const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js', // The name of the output JS file
    path: path.resolve(__dirname, 'public'), // Output folder (./public)
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use the HTML file as a template
      filename: 'index.html',       // Output filename for the HTML file in ./public
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'images/',
              publicPath: 'images/',
            }
          }
        ]
      }
    ]
  }
};
