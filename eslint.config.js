import { default as hexadrop } from '@hexadrop/eslint-config';

export default hexadrop(
	{
		module: {
			ignore: ['astro-seo'],
		},
		rules: {
			'import/no-cycle': 'off',
		},
	},
	{
		files: ['public/translations/**/*.json'],
		rules: {
			'unicorn/filename-case': 'off',
		},
	}
);
