var webpack = require('webpack');

module.exports = {
  entry: { 
      a: "./a", 
      b: "./b"
  },
  devtool: 'source-map',
  output: {
    filename:  "./build/[name].js",
    sourceMapFilename: '[file].map',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("init.js")
  ],
  module: {
    loaders:[
       { test: require.resolve("jquery"), loader: "expose-loader?jQuery" },
    ]
  }
};
