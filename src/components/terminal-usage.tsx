import { useStore } from '@nanostores/react';
import type { FC } from 'react';

import { i18n } from '../state';

type Props = {
	cmd: 'locale' | 'projects' | 'socials' | 'themes';
	marginY?: boolean;
};

const arg = {
	locale: { placeholder: 'locale', example: 'es-ES' },
	themes: { placeholder: 'theme', example: 'ubuntu' },
	projects: { placeholder: 'project', example: '4' },
	socials: { placeholder: 'social', example: '1' },
};

const messages = i18n('usage', {
	command: 'Uso',
	eg: 'Ejemplo',
});

const Usage: FC<Props> = ({ cmd }) => {
	const t = useStore(messages);
	const action = cmd === 'themes' || cmd === 'locale' ? 'set' : 'go';
	const info = arg[cmd];

	return (
		<div className='terminal-line-history sm' data-testid={`${cmd}-invalid-arg`}>
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
