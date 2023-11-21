import { persistentAtom } from '@nanostores/persistent';

const SYSTEM_THEME = 'system';
const INTERNAL_AVAILABLE_THEMES = [
	'dark',
	'light',
	'dark-blue',
	'light-gray',
	'blue-matrix',
	'espresso',
	'green-goblin',
	'ubuntu',
];
const AVAILABLE_THEMES = [SYSTEM_THEME, ...INTERNAL_AVAILABLE_THEMES];
const theme = persistentAtom<string | undefined>('theme', undefined);

function updateTheme(v?: string) {
	if (!v || v === SYSTEM_THEME) {
		document.body.className = '';

		return;
	}

	document.body.className = v;
}

updateTheme(theme.get());

theme.listen(v => {
	updateTheme(v);
});

interface ThemeState {
	setTheme: (value: string) => void;
	theme?: string | undefined;
	themes: string[];
}

const useThemeState = (): ThemeState => {
	return {
		theme: theme.get(),
		themes: AVAILABLE_THEMES,
		setTheme: (value: string) => {
			theme.set(value === 'system' ? undefined : value);
		},
	};
};

export type { ThemeState };

export { AVAILABLE_THEMES };

export default useThemeState;
