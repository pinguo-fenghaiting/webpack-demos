var webpack = require('webpack');
process.env.NODE_ENV = ''; 

module.exports = {
  entry: {
    app: './main.js',
    vendor: ['jquery','react'],
  },
  output: {
    filename: 'bundle.[chunkhash:8].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
       name : 'vendor',
       filename : 'vendor.[chunkhash:8].js'
    })
  ]
};
