import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './app';
import { ApplicationProvider } from './state';

const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(
	<StrictMode>
		<ApplicationProvider>
			<App />
		</ApplicationProvider>
	</StrictMode>
);
