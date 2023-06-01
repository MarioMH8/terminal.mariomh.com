/// <reference types="vite/client" />

import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			body: string;
			primary: string;
			scrollHandle: string;
			scrollHandleHover: string;
			secondary: string;
			text: {
				100: string;
				200: string;
				300: string;
			};
		};
		id: string;
		name: string;
	}
}
