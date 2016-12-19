module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
       { test: require.resolve("jquery"), loader: "expose-loader?jQuery" },
    ]
  }
};
