const defaultConfig = require('./babel.common');

module.exports = api => {
	api.cache(true);
	const { presets } = defaultConfig;
	const plugins = ['@emotion/babel-plugin', '@babel/plugin-syntax-dynamic-import'];

	return {
		presets,
		plugins
	};
};
