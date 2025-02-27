import type { ComponentCommand } from '@commands';
import useHistoryState from '@history';
import { i18n } from '@locale';
import { useStore } from '@nanostores/preact';
import useRerenderState from '@rerender';
import split from 'lodash/split';
import type { FunctionalComponent } from 'preact';

const messages = i18n('resume', {
	link: 'Enlace a mi curriculum vitae en formato web',
});

const Resume: FunctionalComponent = () => {
	const { rerender } = useRerenderState();
	const { history } = useHistoryState();

	const t = useStore(messages);

	/* ===== get current command ===== */
	const currentCommand = split(history[0], ' ');

	/* ===== check current command makes redirect ===== */
	if (rerender && currentCommand[0] === 'resume') {
		window.open('https://resume.mariomh.com/', '_blank');
	}

	return (
		<span>
			{t.link}{' '}
			<a
				className='link'
				href='https://resume.mariomh.com'
				target='_blank'>
				resume.mariomh.com
			</a>
			.
		</span>
	);
};

const ResumeCommand: ComponentCommand = {
	command: 'resume',
	component: Resume,
};

export default ResumeCommand;
