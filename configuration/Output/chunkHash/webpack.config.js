module.exports = {
  entry: {
    bundle1: './main1.js',
    bundle2: './main2.js'
  },
  output: {
    filename: '[name].[chunkhash:8].js',
    path: __dirname + '/build'
  }
};
