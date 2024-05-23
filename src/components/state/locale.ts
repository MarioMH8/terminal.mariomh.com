import type { ComponentsJSON } from '@nanostores/i18n';
import { browser, createI18n, localeFrom } from '@nanostores/i18n';
import { persistentAtom } from '@nanostores/persistent';

interface LocaleState {
	locale?: string;
	locales: string[];
	setLocale: (value: string) => void;
}

const SYSTEM_LOCALE = 'system';
const DEFAULT_LOCALES = 'es-ES';
const INTERNAL_AVAILABLE_LOCALES = [DEFAULT_LOCALES, 'en-EN'];
const AVAILABLE_LOCALES = [SYSTEM_LOCALE, ...INTERNAL_AVAILABLE_LOCALES];
const setting = persistentAtom<string | undefined>('locale');

const locale = localeFrom(
	setting,
	browser({
		available: INTERNAL_AVAILABLE_LOCALES,
		fallback: DEFAULT_LOCALES,
	})
);

function updateLocale(v?: string) {
	if (!v || v === SYSTEM_LOCALE) {
		document.documentElement.setAttribute('lang', navigator.language);

		return;
	}

	document.documentElement.setAttribute('lang', v);
}

updateLocale(locale.get());

locale.listen(v => {
	updateLocale(v);
});

const i18n = createI18n(locale, {
	baseLocale: DEFAULT_LOCALES,
	async get(code) {
		const response = await fetch(`/translations/${code}.json`);
		if (response.ok) {
			const jsonData = (await response.json()) as ComponentsJSON;

			return jsonData;
		}

		return {};
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

export type { LocaleState };

export { AVAILABLE_LOCALES, i18n };

export default useLocaleState;
