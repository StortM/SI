/* eslint-disable no-undef */
module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	'overrides': [
		{
			// enable the rule specifically for TypeScript files
			'files': ['*.ts', '*.mts', '*.cts', '*.tsx'],
			'rules': {
				'@typescript-eslint/explicit-function-return-type': 'error'
			}
		}
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		// disable the rule for all files
		'@typescript-eslint/explicit-function-return-type': 'off'
	},
}
