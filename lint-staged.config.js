/**
 * @type {import('lint-staged').Configuration}
 */
const config = {
	'**/*.test.{ts,tsx}': 'bun test',
	'**/*.{astro,css,js,json,jsonc,md,mdx,ts,tsx}': 'eslint --cache --fix',
};

export default config;
