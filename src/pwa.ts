// @ts-expect-error TS2307: Cannot find module virtual:pwa-register or its corresponding type declarations.

import { registerSW } from 'virtual:pwa-register';

// eslint-disable-next-line typescript/no-unsafe-call
registerSW({
	immediate: true,
});
