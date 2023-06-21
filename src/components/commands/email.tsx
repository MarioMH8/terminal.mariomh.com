import split from 'lodash/split';
import type { FunctionalComponent } from 'preact';

import type { ComponentCommand } from '../state/commands';
import useHistoryState from '../state/history';
import useRerenderState from '../state/rerender';
import { i18n } from '../state/locale';
import { useStore } from '@nanostores/preact';

const EMAIL = 'hola@mariomh.com';
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
			<a className='link' href={MAIL_TO} target='_self'>
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
