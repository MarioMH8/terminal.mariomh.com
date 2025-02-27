import type { ComponentCommand } from '@commands';
import useHistoryState from '@history';
import { i18n } from '@locale';
import resume from '@mariomh/resume';
import { useStore } from '@nanostores/preact';
import useRerenderState from '@rerender';
import split from 'lodash/split';
import type { FunctionalComponent } from 'preact';

const EMAIL = resume.basics?.email ?? '';
const MAIL_TO = `mailto:${EMAIL}`;

const messages = i18n('email', {
	caption: 'Escríbeme algo bonito a ',
});

const Email: FunctionalComponent = () => {
	const { rerender } = useRerenderState();
	const { history } = useHistoryState();
	const t = useStore(messages);

	/* ===== get current command ===== */
	const currentCommand = split(history[0], ' ');

	if (rerender && currentCommand[0] === 'email' && currentCommand.length <= 1) {
		window.open(MAIL_TO, '_self');
	}

	return (
		<span>
			{t.caption}
			<a
				className='link'
				href={MAIL_TO}
				target='_self'>
				{EMAIL}
			</a>
			.
		</span>
	);
};

const EmailCommand: ComponentCommand = {
	command: 'email',
	component: Email,
};

export default EmailCommand;
