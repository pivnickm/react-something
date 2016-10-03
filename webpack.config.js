module.exports = {
	entry: './src/client.js',
	output: {
		path: './public',
		filename: 'bundle.js'
	},
	module: {
		preLoaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "eslint-loader" }
		],
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.less$/, exclude: /node_modules/, loader: "style!css!less" }
		]
	},
	resolve: {
		extensions: ['', '.js', '.json']
	}
};