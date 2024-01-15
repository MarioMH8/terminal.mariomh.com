import { persistentAtom } from '@nanostores/persistent';

const SYSTEM_THEME = 'system' as const;
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
export type RpaRequestStatuses = (typeof AVAILABLE_THEMES)[number];
const mainColorMap: Record<RpaRequestStatuses, [string, string]> = {
	[SYSTEM_THEME]: ['#fdfff5', '#001B16'],
	dark: ['#001B16', '#001B16'],
	light: ['#fdfff5', '#fdfff5'],
	'dark-blue': ['#1D2A35', '#1D2A35'],
	'light-gray': ['#EFF3F3', '#EFF3F3'],
	'blue-matrix': ['#101116', '#101116'],
	espresso: ['#323232', '#323232'],
	'green-goblin': ['#000000', '#000000'],
	ubuntu: ['#2D0922', '#2D0922'],
} as const;

const theme = persistentAtom<RpaRequestStatuses | undefined>('theme', undefined);

function updateTheme(v?: RpaRequestStatuses) {
	const [light, dark] = mainColorMap[v ?? SYSTEM_THEME]
	document.getElementById('meta-light')?.setAttribute('content', light);
	document.getElementById('meta-dark')?.setAttribute('content', dark);
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
		theme: theme.get(),
		themes: AVAILABLE_THEMES,
		setTheme: (value: RpaRequestStatuses) => {
			theme.set(value === 'system' ? undefined : value);
		},
	};
};

export type { ThemeState };

export { AVAILABLE_THEMES };

export default useThemeState;
