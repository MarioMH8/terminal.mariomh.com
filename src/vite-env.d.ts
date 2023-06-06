/// <reference types="vite/client" />

import 'styled-components';

import { resources } from './i18n';

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

declare module 'i18next' {
	interface CustomTypeOptions {
		resources: (typeof resources)['en'];
		// if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
		// set returnNull to false (and also in the i18next init options)
		// returnNull: false;
	}
}
