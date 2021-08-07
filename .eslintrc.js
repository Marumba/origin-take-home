const error = 2;
const warn = 1;
const ignore = 0;

module.exports = {
	parser: 'babel-eslint',
	extends: [
		'airbnb',
		'plugin:sonarjs/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended'
	],
	env: {
		browser: true,
		es2020: true,
		node: true,
		jest: true
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		sourceType: 'module'
	},
	plugins: ['import', 'jsx-a11y', 'react', 'sonarjs', 'prettier'],
	settings: {
		importextensions: ['.js', '.jsx'],
		importresolver: {
			node: {},
			webpack: {
				config: 'configs/webpack/webpack.dev.js',
				env: 'development'
			}
		}
	},
	rules: {
		'prettier/prettier': error,
		'arrow-parens': [warn, 'as-needed'],
		'comma-dangle': [error, 'never'],
		'import/extensions': ignore,
		'import/newline-after-import': ignore,
		'import/no-dynamic-require': ignore,
		'import/no-unresolved': ignore,
		'import/no-useless-path-segments': ignore,
		'import/prefer-default-export': ignore,
		'import/no-extraneous-dependencies': ignore,
		'jsx-a11y/click-events-have-key-events': ignore,
		'linebreak-style': [error, 'windows'],
		'no-param-reassign': [error, { props: false }],
		'no-plusplus': ignore,
		'no-nested-ternary': ignore,
		'no-restricted-globals': [error, 'event', 'fdescribe'],
		'no-use-before-define': [error, { functions: true, classes: true, variables: false }],
		'object-curly-newline': [error, { consistent: true }],
		'react/destructuring-assignment': [warn, 'always'],
		'react/jsx-fragments': ignore,
		'react/jsx-indent': ignore,
		'react/jsx-indent-props': ignore,
		'react/jsx-one-expression-per-line': ignore,
		'react/jsx-props-no-spreading': [warn, { custom: 'ignore' }],
		'react/prefer-stateless-function': ignore,
		'react/react-in-jsx-scope': ignore
	}
};
