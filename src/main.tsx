import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app';
import { ApplicationProvider } from './state';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<ApplicationProvider>
			<App />
		</ApplicationProvider>
	</React.StrictMode>
);
