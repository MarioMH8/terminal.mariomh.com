/// <reference types="vitest" />
/// <reference types="vite/client" />

import preact from '@preact/preset-vite';
import paths from 'vite-tsconfig-paths';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		preact(),
		paths(),
		VitePWA({
			registerType: 'autoUpdate',
		}),
		splitVendorChunkPlugin(),
	],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/test/setup.ts',
	},
	server: {
		host: 'local.terminal.mariomh.com',
		port: 8000,
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					nanostores: ['nanostores', '@nanostores/react', '@nanostores/i18n'],
					lodash: ['lodash/keys', 'lodash/split', 'lodash/startsWith', 'lodash/join', 'lodash/trim', 'lodash/reverse', 'lodash/slice', 'lodash/uniqueId', 'lodash/drop'],
					preact: ['preact'],
				},
			},
		},
	},
});
