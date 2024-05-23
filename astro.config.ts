import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import pwa from '@vite-pwa/astro';
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';
import webmanifest from 'astro-webmanifest';

export default defineConfig({
	integrations: [
		preact(),
		sitemap(),
		robotsTxt(),
		webmanifest({
			background_color: '#FDFFF5',

			config: {
				insertAppleTouchLinks: true,
				insertThemeColorMeta: false,
			},

			description: 'Portfolio de MarioMH en línea de comandos.',
			display: 'standalone',
			icon: 'public/favicon.svg',
			name: 'MarioMH | Línea de comandos',
			short_name: 'MarioMH',
			start_url: '/',

			theme_color: '#C6F118',
		}),
		pwa({
			includeAssets: ['fonts/**/*.otf', 'translations/**/*.json', 'fonts/**/*.woff2', '**/*.svg', '**/*.png'],
			registerType: 'autoUpdate',
			workbox: {
				globPatterns: ['**/*.{js,css,html,svg,png}'],
			},
		}),
		compress(),
	],
	site: 'https://terminal.mariomh.com',
});
