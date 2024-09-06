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
        test: /\.css$/i, // For handling .css files
        use: ['style-loader', 'css-loader'], // Processes CSS files and injects them into the DOM
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // For handling image files
        type: 'asset/resource', // Asset Modules for images
      },
    ]
  }
};
