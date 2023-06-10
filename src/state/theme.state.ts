import { useEffect, useState } from 'react';

import { getLocalStorage, setLocalStorage } from '../storage';

export interface ThemeState {
	loaded: boolean;
	setTheme: (mode: string) => void;
	theme?: string | undefined;
	themes: string[];
}

export const AVAILABLE_THEMES = ['dark', 'light'];

const metaThemeColor = document.querySelector("meta[name='theme-color']");
const maskIcon = document.querySelector("link[rel='mask-icon']");
const metaMsTileColor = document.querySelector("meta[name='msapplication-TileColor']");

const useThemeState = (): ThemeState => {
	const [theme, setInternalTheme] = useState<string | undefined>();
	const [loaded, setLoaded] = useState(false);

	const setTheme = (name: string) => {
		setLocalStorage('theme', name);
		setInternalTheme(name);
	};

	useEffect(() => {
		const localThemeName = getLocalStorage<string>('theme');
		localThemeName ? setInternalTheme(localThemeName) : undefined;
		setLoaded(true);
	}, []);

	// Update meta tag colors when switching themes
	useEffect(() => {
		if (!loaded) {
			return;
		}
		const themeColor = '#1D2A35';

		metaThemeColor?.setAttribute('content', themeColor);
		metaMsTileColor?.setAttribute('content', themeColor);
		maskIcon?.setAttribute('color', themeColor);
	}, [theme, loaded]);

	return {
		theme,
		setTheme,
		loaded,
		themes: AVAILABLE_THEMES,
	};
};

export { useThemeState };
