import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro'
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import zip from 'astro-compressor';
import robotsTxt from 'astro-robots-txt';
import webmanifest from 'astro-webmanifest';

export default defineConfig({
	site: 'https://mariomh.com',
	integrations: [
		sitemap(),
		robotsTxt(),
		webmanifest({
			/**
			 * required
			 **/
			name: 'MarioMH | Desarrollador JavaScript',

			/**
			 * optional
			 **/
			icon: 'public/favicon.svg',

			short_name: 'MarioMH',
			description: 'MarioMH es un desarrollador Full Stack especializado en JavaScript.',
			start_url: '/',
			theme_color: '#C6F118',
			background_color: '#FDFFF5',
			display: 'standalone',

			config: {
				insertAppleTouchLinks: true,
				insertThemeColorMeta: false,
			},
		}),
		prefetch(),
		AstroPWA({
			includeAssets: ['fonts/**/*.otf', '**/*.svg', '**/*.png'],
			registerType: 'autoUpdate',
			workbox: {
				globPatterns: ['**/*.{js,css,html,svg,png}'],
			}
		}),
		compress(),
		zip(),
	],
});
