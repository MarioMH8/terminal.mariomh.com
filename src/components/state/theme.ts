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
] as const;
const AVAILABLE_THEMES = [SYSTEM_THEME, ...INTERNAL_AVAILABLE_THEMES];

type RpaRequestStatuses = (typeof AVAILABLE_THEMES)[number];

const SYSTEM_THEME_COLORS: [string, string] = ['#fdfff5', '#001B16'];

const mainColorMap: Record<RpaRequestStatuses, [string, string]> = {
	[SYSTEM_THEME]: SYSTEM_THEME_COLORS,
	'blue-matrix': ['#101116', '#101116'],
	dark: ['#001B16', '#001B16'],
	'dark-blue': ['#1D2A35', '#1D2A35'],
	espresso: ['#323232', '#323232'],
	'green-goblin': ['#000000', '#000000'],
	light: ['#fdfff5', '#fdfff5'],
	'light-gray': ['#EFF3F3', '#EFF3F3'],
	ubuntu: ['#2D0922', '#2D0922'],
} as const;

const theme = persistentAtom<RpaRequestStatuses | undefined>('theme');

function updateTheme(v?: RpaRequestStatuses) {
	const [light, dark] = mainColorMap[v ?? SYSTEM_THEME] ?? SYSTEM_THEME_COLORS;
	document.querySelector('#meta-light')?.setAttribute('content', light);
	document.querySelector('#meta-dark')?.setAttribute('content', dark);
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
	setTheme: (value: RpaRequestStatuses) => void;
	theme?: RpaRequestStatuses | undefined;
	themes: RpaRequestStatuses[];
}

const useThemeState = (): ThemeState => {
	return {
		setTheme: (value: RpaRequestStatuses) => {
			theme.set(value === 'system' ? undefined : value);
		},
		theme: theme.get(),
		themes: AVAILABLE_THEMES,
	};
};

export type { RpaRequestStatuses, ThemeState };

export { AVAILABLE_THEMES };

export default useThemeState;
