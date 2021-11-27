const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	output: {clean: true},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			title: "SnakeAttack",
			template: './src/index.html',
			filename: 'index.html',
			inject: 'body'
		})
	],
	devServer: {
		open: true
	},
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			}
		]
	}
};
