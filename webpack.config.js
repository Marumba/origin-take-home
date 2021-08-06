const commonConfig = require('./configs/webpack/webpack.common');
const devConfig = require('./configs/webpack/webpack.dev');
const prdConfig = require('./configs/webpack/webpack.prd');

module.exports = env => {
	const { SELECTED } = env;
	const configMap = {
		dev: commonConfig(devConfig),
		prd: commonConfig(prdConfig)
	};

	return configMap[SELECTED];
};
