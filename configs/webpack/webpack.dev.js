const CircularDependencyPlugin = require('circular-dependency-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'eval-cheap-module-source-map',
	mode: 'development',
	modules: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							configFile: path.resolve(__dirname, '../babel', 'babel.dev.js'),
							plugins: ['react-refresh/babel']
						}
					}
				]
			}
		]
	},
	output: {
		filename: 'origin.[name].js',
		chunkFilename: 'origin.[name].chunk.js',
		pathinfo: true,
		devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
		publicPath: '/'
	},
	plugins: [
		new CircularDependencyPlugin({
			exclude: /a\.js|node_modules/,
			failOnError: false
		}),
		new ESLintPlugin({
			fix: true,
			extensions: ['js', 'jsx']
		}),
		new webpack.HotModuleReplacementPlugin(),
		new ReactRefreshWebpackPlugin()
	],
	target: 'web',
	performance: {
		hints: false
	},
	devServer: {
		bonjour: false,
		clientLogLevel: 'none',
		compress: false,
		contentBase: '/public',
		historyApiFallback: true,
		hot: true,
		inline: true,
		open: true,
		port: 8080,
		stats: 'normal'
	}
};
