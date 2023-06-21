import { useStore } from '@nanostores/preact';
import type { FunctionalComponent } from 'preact';

import { i18n } from '../state/locale';

const messages = i18n('not_found', {
	command: 'comando invalido',
});

const NotFound: FunctionalComponent<{ command?: string | undefined; index: number }> = ({
	command,
	index,
}) => {
	const t = useStore(messages);

	return (
		<div data-testid={`not-found-${index}`}>
			{t.command}: {command}
		</div>
	);
};

export default NotFound;
