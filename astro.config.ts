import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import resume from '@mariomh/resume';
import compress from '@playform/compress';
import pwa from '@vite-pwa/astro';
import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import type { WebmanifestOptions } from 'astro-webmanifest';
import manifest from 'astro-webmanifest';

const { name = '', nameShort, summary } = resume.basics ?? {};

export default defineConfig({
	integrations: [
		preact(),
		sitemap(),
		robotsTxt(),
		manifest({
			background_color: '#FDFFF5',

			config: {
				insertAppleTouchLinks: true,
				insertThemeColorMeta: false,
			},

			description: summary,
			display: 'standalone',
			icon: 'public/favicon.svg',
			name,
			short_name: typeof nameShort === 'string' ? nameShort : undefined,
			start_url: '/',

			theme_color: '#C6F118',
		} as WebmanifestOptions),
		pwa({
			registerType: 'autoUpdate',
			workbox: {
				globPatterns: ['**/*.{js,css,html,svg,png,otf,json,woff2}'],
			},
		}),
		compress(),
	],
	site: 'https://terminal.mariomh.com',
});
