
module.exports = {
	
	entry: './index.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders:[
			{ 
				test: /\.css$/, 
				loader: 'style-loader!css-loader?modules' 
			},
			{
				test: /\.less$/,
				loader: "style-loader!css-loader!less-loader?strictMath&noIeCompat"
			}
		],
		// preLoaders: [ 
		// 	{
		// 	    test: /\/app\/page\/.+index\.js$/,
		// 	    loader: 'baggage?index.html=template&style.css'
		// 	} 
		// ]
	}
};
