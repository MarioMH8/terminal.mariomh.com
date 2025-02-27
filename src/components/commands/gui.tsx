import type { ComponentCommand } from '@commands';
import useHistoryState from '@history';
import { i18n } from '@locale';
import { useStore } from '@nanostores/preact';
import useRerenderState from '@rerender';
import split from 'lodash/split';
import type { FunctionalComponent } from 'preact';

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
			<a
				className='link'
				href='https://mariomh.com'
				target='_blank'>
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
