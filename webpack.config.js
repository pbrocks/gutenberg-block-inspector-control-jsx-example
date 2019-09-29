module.exports = {
	entry: './js/index.js',
	output: {
		path: __dirname,
		filename: 'js/block.build.js',
	},
	module: {
		loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
};
