import split from 'lodash/split';
import type { FC } from 'react';

import { useApplicationContext } from '../../state';

const EMAIL = 'contacto@mariomh.com';

const Email: FC = () => {
	const {
		command: {
			history: [history],
		},
		terminal: { rerender },
	} = useApplicationContext();

	/* ===== get current command ===== */
	const currentCommand = split(history[0], ' ');

	if (rerender && currentCommand[0] === 'email' && currentCommand.length <= 1) {
		window.open(`mailto:${EMAIL}`, '_self');
	}

	return (
		<div>
			<span>{EMAIL}</span>
		</div>
	);
};

export default Email;
