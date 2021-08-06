module.exports = {
	presets: [
		[
			'@babel/env',
			{
				useBuiltIns: 'entry',
				corejs: 3
			}
		],
		['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }]
	]
};
