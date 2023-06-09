import './main.css';

import { useStore } from '@nanostores/react';
import type { FC } from 'react';

import Terminal from './components/terminal';
import { i18n } from './i18n';
import { useApplicationContext } from './state';

const messages = i18n('app', {
	title: 'Terminal portfolio',
});

const App: FC = () => {
	const {
		theme: { loaded },
	} = useApplicationContext();
	const t = useStore(messages);

	return loaded && !i18n.loading.get() ? (
		<>
			<h1 className='sr-only' aria-label='Terminal Portfolio'>
				{t.title}
			</h1>
			<Terminal />
		</>
	) : (
		<></>
	);
};

export default App;
