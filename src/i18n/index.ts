import { browser, createI18n, localeFrom } from '@nanostores/i18n';
import type { ComponentsJSON } from '@nanostores/i18n/create-i18n';
import { persistentAtom } from '@nanostores/persistent';

export const setting = persistentAtom<string | undefined>('locale', undefined);

export const locale = localeFrom(
	setting,
	browser({
		available: ['en', 'es-ES'],
		fallback: 'en',
	})
);

export const i18n = createI18n(locale, {
	async get(code) {
		const response = await fetch(`/translations/${code}.json`);
		if (response.ok) {
			const jsonData = (await response.json()) as ComponentsJSON;

			return Promise.resolve(jsonData);
		}

		return Promise.resolve({});
	},
});
