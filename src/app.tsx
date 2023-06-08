import './i18n';
import './main.css';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Terminal from './components/terminal';
import { useApplicationContext } from './state';

const App: FC = () => {
	const { t, ready } = useTranslation();
	const {
		theme: { loaded },
	} = useApplicationContext();

	return (
		<>
			<h1 className='sr-only' aria-label='Terminal Portfolio'>
				{t('title')}
			</h1>
			{loaded && ready && <Terminal />}
		</>
	);
};

export default App;
