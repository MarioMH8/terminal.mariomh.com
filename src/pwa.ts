// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { registerSW } from 'virtual:pwa-register';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
registerSW({
	immediate: true,
});
