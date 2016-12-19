module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
 module: {

        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style!css" },
            {test: /\.less/,loader: 'style-loader!css-loader!less-loader'},
        ]
    },
};

