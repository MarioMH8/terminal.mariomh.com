import { i18n } from '@locale';
import { useStore } from '@nanostores/preact';
import type { FunctionalComponent } from 'preact';

const messages = i18n('not_found', {
	command: 'comando invalido',
});

const NotFound: FunctionalComponent<{ command?: string | undefined; index: number }> = ({ command, index }) => {
	const t = useStore(messages);

	return (
		<div data-testid={`not-found-${index.toFixed(0)}`}>
			{t.command}: {command}
		</div>
	);
};

export default NotFound;
