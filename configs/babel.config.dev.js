module.exports = api => {
	api.cache(true);
	const presets = [
		[
			'@babel/env',
			{
				useBuiltIns: 'entry',
				corejs: 3
			}
		],
		'@babel/react'
	];
	const plugins = ['@emotion', '@babel/plugin-syntax-dynamic-import'];

	return {
		presets,
		plugins
	};
};
