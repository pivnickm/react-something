module.exports = {
	entry: './src/client.js',
	output: {
		path: './public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.less$/, exclude: /node_modules/, loader: "style!css!less" }
		]
	},
	resolve: {
		extensions: ['', '.js', '.json']
	}
};