import { useStore } from '@nanostores/react';
import type { FC } from 'react';
import { useEffect } from 'react';

import { i18n, useApplicationContext, useExecutedCommandContext } from '../../state';

const messages = i18n('usage', {
	command: 'Uso',
	eg: 'Ejemplo',
});

const Clear: FC = () => {
	const t = useStore(messages);
	const {
		command: {
			history: [, , clearHistory],
		},
	} = useApplicationContext();
	const { arg } = useExecutedCommandContext();
	useEffect(() => {
		if (arg.length < 1) {
			clearHistory();
		}
	}, []);

	return arg.length > 0 ? <div>{t.command}: clear</div> : <></>;
};

export default Clear;
