const commonConfig = require('./configs/webpack.common');
const devConfig = require('./configs/webpack.dev');
const prdConfig = require('./configs/webpack.prd');

module.exports = env => {
	const { SELECTED } = env;
	const configMap = {
		dev: commonConfig(devConfig),
		prd: commonConfig(prdConfig)
	};

	return configMap[SELECTED];
};
