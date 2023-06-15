import './main.css';

import { useStore } from '@nanostores/react';
import type { FC } from 'react';

import Terminal from './components/terminal';
import { useApplicationContext, i18n } from './state';

const messages = i18n('app', {
	title: 'Portfolio en linea de comandos',
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
