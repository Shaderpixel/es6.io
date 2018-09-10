const webpack = require('webpack');
const path = require('path');
const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
	mode: 'production',  //to minify, change mode from 'development' to 'production'
	devtool: 'source-map',
	entry: {
		filename: './app.js'
	},
	output: {
		path: path.resolve(__dirname, '_build'),
		filename:'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						query: {presets: ['env']}
					}
				]
			}
		]
	},
	plugins: [
			//env plugin
			new webpack.DefinePlugin({
				'process.env': { NODE_ENV: JSON.stringify(nodeEnv)}
			})
	]
}
