import { browser, createI18n, localeFrom } from '@nanostores/i18n';
import type { ComponentsJSON } from '@nanostores/i18n/create-i18n';
import { persistentAtom } from '@nanostores/persistent';

export interface LocaleState {
	locale?: string;
	locales: string[];
	setLocale: (value: string) => void;
}

const DEFAULT_LOCALES = 'es-ES';
const INTERNAL_AVAILABLE_LOCALES = [DEFAULT_LOCALES, 'en-EN'];
export const AVAILABLE_LOCALES = ['system', ...INTERNAL_AVAILABLE_LOCALES];
const setting = persistentAtom<string | undefined>('locale', undefined);

const locale = localeFrom(
	setting,
	browser({
		available: INTERNAL_AVAILABLE_LOCALES,
		fallback: DEFAULT_LOCALES,
	})
);

export const i18n = createI18n(locale, {
	baseLocale: DEFAULT_LOCALES,
	async get(code) {
		const response = await fetch(`/translations/${code}.json`);
		if (response.ok) {
			const jsonData = (await response.json()) as ComponentsJSON;

			return Promise.resolve(jsonData);
		}

		return Promise.resolve({});
	},
});

const useLocaleState = (): LocaleState => {
	return {
		locale: locale.get(),
		locales: AVAILABLE_LOCALES,
		setLocale: (value: string) => {
			setting.set(value === 'system' ? undefined : value);
		},
	};
};

export { useLocaleState };
