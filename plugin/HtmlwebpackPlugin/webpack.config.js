var HtmlwebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './main.js',
  output: {
    filename: '[name].[chunkhash:8].js'
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Webpack-demos',
      filename: 'index.html'
    })
  ]
};
