import { useStore } from '@nanostores/preact';
import type { FunctionalComponent } from 'preact';

import { i18n } from './state/locale';

interface Props {
	cmd: 'locale' | 'projects' | 'socials' | 'themes';
	marginY?: boolean;
}

const argument = {
	locale: { example: 'es-ES', placeholder: 'locale' },
	projects: { example: '4', placeholder: 'project' },
	socials: { example: '1', placeholder: 'social' },
	themes: { example: 'ubuntu', placeholder: 'themes' },
};

const messages = i18n('usage', {
	command: 'Uso',
	eg: 'Ejemplo',
});

const Usage: FunctionalComponent<Props> = ({ cmd }) => {
	const t = useStore(messages);
	const action = cmd === 'themes' || cmd === 'locale' ? 'set' : 'go';
	const info = argument[cmd];

	return (
		<div
			className='terminal-line-history text-200'
			data-testid={`${cmd}-invalid-arg`}>
			<span>
				{t.command}: {cmd} {action} &#60;{info.placeholder}&#62;
			</span>
			<span>
				{t.eg}: {cmd} {action} {info.example}
			</span>
		</div>
	);
};

export default Usage;
