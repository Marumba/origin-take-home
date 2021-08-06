const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');

const rootDir = '../../';

module.exports = options => {
	return {
		devtool: options.devtool,
		devServer: options.devServer,
		mode: options.mode,
		entry: {
			bundle: path.resolve(__dirname, rootDir, 'client', 'index'),
			...options.entry
		},
		module: {
			rules: [
				...options.modules.rules,
				{
					test: /\.svg$/,
					use: [
						{
							loader: '@svgr/webpack',
							options: {
								titleProp: true,
								memo: true
							}
						},
						{
							loader: 'url-loader',
							options: {
								limit: 10 * 1024,
								fallback: 'file-loader',
								name: '[path][name].[sha512:hash:base64:8].[ext]'
							}
						}
					]
				},
				{
					test: /\.(jpe?g|png|gif|webp)$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 10 * 1024,
								fallback: 'file-loader',
								name: '[path][name].[sha512:hash:base64:8].[ext]'
							}
						},
						{
							loader: 'image-webpack-loader',
							options: {
								disable: true,
								mozjpeg: {
									progressive: true,
									quality: 65
								},
								optipng: {
									optimizationLevel: 7
								},
								pngquant: {
									quality: [0.65, 0.9],
									speed: 4
								},
								gifsicle: {
									interlaced: false
								},
								webp: {
									quality: 75
								}
							}
						}
					]
				}
			]
		},
		optimization: options.optimization,
		output: options.output,
		resolve: {
			extensions: ['.js', '.jsx'],
			alias: {
				'~': path.resolve(__dirname, rootDir, 'client')
			}
		},
		plugins: [
			new WebpackBar(),
			new HtmlWebpackPlugin({
				favicon: './public/favicon.png',
				filename: 'index.html',
				template: path.resolve(__dirname, rootDir, 'client', 'template.ejs')
			}),
			...options.plugins
		],
		target: options.target,
		performance: options.performance || {}
	};
};
