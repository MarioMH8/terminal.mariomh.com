import { persistentAtom } from '@nanostores/persistent';

export interface ThemeState {
	setTheme: (value: string) => void;
	theme?: string | undefined;
	themes: string[];
}

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
export const AVAILABLE_THEMES = [SYSTEM_THEME, ...INTERNAL_AVAILABLE_THEMES];
const theme = persistentAtom<string | undefined>('theme', undefined);

updateTheme(theme.get());

function updateTheme(v?: string) {
	if (!v || v === SYSTEM_THEME) {
		document.body.className = '';

		return;
	}

	document.body.className = v;
}

theme.listen(v => {
	updateTheme(v);
});

const useThemeState = (): ThemeState => {
	return {
		theme: theme.get(),
		themes: AVAILABLE_THEMES,
		setTheme: (value: string) => {
			theme.set(value === 'system' ? undefined : value);
		},
	};
};

export default useThemeState;
