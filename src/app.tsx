import './i18n';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';

import Terminal from './components/terminal';
import { useApplicationContext } from './state';
import GlobalStyle from './style';

const App: FC = () => {
	const { t, ready } = useTranslation();
	const {
		theme: { loaded, theme },
	} = useApplicationContext();

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<h1 className='sr-only' aria-label='Terminal Portfolio'>
				{t('title')}
			</h1>
			{loaded && ready && <Terminal />}
		</ThemeProvider>
	);
};

export default App;
