import { useStore } from '@nanostores/preact';
import split from 'lodash/split';
import type { FunctionalComponent } from 'preact';

import type { ComponentCommand } from '../state/commands';
import useHistoryState from '../state/history';
import { i18n } from '../state/locale';
import useRerenderState from '../state/rerender';

const messages = i18n('gui', {
	link: 'Enlace a mi portfolio web',
});

const Gui: FunctionalComponent = () => {
	const { rerender } = useRerenderState();
	const { history } = useHistoryState();

	const t = useStore(messages);

	/* ===== get current command ===== */
	const currentCommand = split(history[0], ' ');

	/* ===== check current command makes redirect ===== */
	if (rerender && currentCommand[0] === 'gui') {
		window.open('https://mariomh.com/', '_blank');
	}

	return (
		<span>
			{t.link}{' '}
			<a className='link' target='_blank' href='https://mariomh.com'>
				mariomh.com
			</a>
			.
		</span>
	);
};

const GuiCommand: ComponentCommand = {
	command: 'gui',
	component: Gui,
};

export default GuiCommand;
