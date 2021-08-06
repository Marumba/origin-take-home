const defaultConfig = require('./babel.common');

module.exports = api => {
	api.cache(true);
	const { presets } = defaultConfig;
	const plugins = [
		'@emotion/babel-plugin',
		'@babel/plugin-syntax-dynamic-import',
		[
			'babel-plugin-jsx-remove-data-test-id',
			{
				attributes: 'data-testid'
			}
		]
	];

	return {
		presets,
		plugins
	};
};
