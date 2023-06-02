import { useEffect, useState } from 'react';
import type { DefaultTheme } from 'styled-components';

import { getLocalStorage, setLocalStorage } from '../storage';
import type { AvailableApplicationThemes } from '../style/themes';
import themes from '../style/themes';

export interface ThemeState {
	loaded: boolean;
	setTheme: (mode: DefaultTheme) => void;
	theme: DefaultTheme;
}

const metaThemeColor = document.querySelector("meta[name='theme-color']");
const maskIcon = document.querySelector("link[rel='mask-icon']");
const metaMsTileColor = document.querySelector("meta[name='msapplication-TileColor']");

const useThemeState = (): ThemeState => {
	const [theme, setInternalTheme] = useState<DefaultTheme>(themes.dark);
	const [loaded, setLoaded] = useState(false);

	const setTheme = (mode: DefaultTheme) => {
		setLocalStorage('theme', mode.name);
		setInternalTheme(mode);
	};

	useEffect(() => {
		const localThemeName = getLocalStorage<AvailableApplicationThemes>('tsn-theme');
		localThemeName ? setInternalTheme(themes[localThemeName]) : setInternalTheme(themes.dark);
		setLoaded(true);
	}, []);

	// Update meta tag colors when switching themes
	useEffect(() => {
		if (!loaded) {
			return;
		}
		const themeColor = theme.colors.body;

		metaThemeColor?.setAttribute('content', themeColor);
		metaMsTileColor?.setAttribute('content', themeColor);
		maskIcon?.setAttribute('color', themeColor);
	}, [theme, loaded]);

	return {
		theme,
		setTheme,
		loaded,
	};
};

export { useThemeState };
