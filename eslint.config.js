import { default as hexadrop } from '@hexadrop/eslint-config';

export default hexadrop(
	{
		rules: {
			'import/no-cycle': 'off',
			'import/no-unresolved': 'off',
		},
	},
	{
		files: ['public/translations/**/*.json'],
		rules: {
			'unicorn/filename-case': 'off',
		},
	}
);
