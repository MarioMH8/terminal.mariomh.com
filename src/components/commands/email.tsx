import split from 'lodash/split';
import type { FunctionalComponent } from 'preact';

import type { ComponentCommand } from '../state/commands';
import useHistoryState from '../state/history';
import useRerenderState from '../state/rerender';

const EMAIL = 'contacto@mariomh.com';

const Email: FunctionalComponent = () => {
	const { rerender } = useRerenderState();
	const { history } = useHistoryState();

	/* ===== get current command ===== */
	const currentCommand = split(history[0], ' ');

	if (rerender && currentCommand[0] === 'email' && currentCommand.length <= 1) {
		window.open(`mailto:${EMAIL}`, '_self');
	}

	return <span className='terminal-line-history'>{EMAIL}</span>;
};

const EmailCommand: ComponentCommand = {
	command: 'email',
	component: Email,
};

export default EmailCommand;
