const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'production',
	modules: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							configFile: path.resolve(__dirname, 'babel.config.js')
						}
					}
				]
			}
		]
	},
	output: {
		filename: 'assets/js/origin.[name].[contenthash].js',
		chunkFilename: 'assets/js/origin.[name].[id].[contenthash].js',
		path: path.resolve(__dirname, '../dist'),
		clean: true
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					parse: {
						ecma: 8
					},
					compress: {
						warnings: false,
						comparisons: false,
						inline: 2
					},
					output: {
						comments: false,
						ecma: 5,
						ascii_only: true
					}
				}
			})
		],
		emitOnErrors: true,
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				defaultVendors: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					priority: -20,
					chunks: 'all'
				}
			}
		}
	},
	plugins: [],
	target: 'browserslist'
};
