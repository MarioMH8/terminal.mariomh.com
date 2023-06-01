import type { FC } from 'react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import Terminal from './components/terminal';
import { useApplicationState } from './state/application.state';
import GlobalStyle from './style';

const App: FC = (): React.JSX.Element => {
	const {
		theme: { loaded, theme },
	} = useApplicationState();

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<h1 className='sr-only' aria-label='Terminal Portfolio'>
				Terminal Portfolio
			</h1>
			{loaded && <Terminal />}
		</ThemeProvider>
	);
};

export default App;
