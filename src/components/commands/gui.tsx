import { useStore } from '@nanostores/react';
import split from 'lodash/split';
import type { FC } from 'react';

import { i18n, useApplicationContext } from '../../state';

const messages = i18n('gui', {
	link: 'Enlace a mi portfolio web',
});

const Gui: FC = () => {
	const {
		command: {
			history: [history],
		},
		terminal: { rerender },
	} = useApplicationContext();

	const t = useStore(messages);

	/* ===== get current command ===== */
	const currentCommand = split(history[0], ' ');

	/* ===== check current command makes redirect ===== */
	if (rerender && currentCommand[0] === 'gui') {
		window.open('https://mariomh.com/', '_blank');
	}

	return (
		<span>
			{t.link}
			{': '}
			<a className='link' target='_blank' href='https://mariomh.com'>
				mariomh.com
			</a>
		</span>
	);
};

export default Gui;
