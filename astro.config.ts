import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';
import webmanifest from 'astro-webmanifest';

export default defineConfig({
	site: 'https://terminal.mariomh.com',
	integrations: [
		preact(),
		sitemap(),
		robotsTxt(),
		webmanifest({
			name: 'MarioMH | Línea de comandos',

			icon: 'public/favicon.svg',

			short_name: 'MarioMH',
			description: 'Portfolio de MarioMH en línea de comandos.',
			start_url: '/',
			theme_color: '#C6F118',
			background_color: '#FDFFF5',
			display: 'standalone',

			config: {
				insertAppleTouchLinks: true,
				insertThemeColorMeta: false,
			},
		}),
		AstroPWA({
			includeAssets: ['fonts/**/*.otf', 'translations/**/*.json', 'fonts/**/*.woff2', '**/*.svg', '**/*.png'],
			registerType: 'autoUpdate',
			workbox: {
				globPatterns: ['**/*.{js,css,html,svg,png}'],
			},
		}),
		compress(),
	],
});
