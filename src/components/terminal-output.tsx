import { useStore } from '@nanostores/react';
import type { FC } from 'react';

import { i18n } from '../i18n';
import { useApplicationContext, useExecutedCommandContext } from '../state';
import Clear from './commands/clear';
import Echo from './commands/echo';
import Help from './commands/help';
import History from './commands/history';
import Welcome from './commands/welcome';

interface TerminalOutputProps {
	command: string;
	index: number;
}

const messages = i18n('usage', {
	command: 'Usage',
});

const TerminalOutput: FC<TerminalOutputProps> = ({ command, index }: TerminalOutputProps) => {
	const {
		info: { user },
		command: { commandsWithArgs },
	} = useApplicationContext();
	const { arg } = useExecutedCommandContext();
	const t = useStore(messages);

	// return 'Usage: <command>' if command arg is not valid
	if (!commandsWithArgs.includes(command) && arg.length > 0) {
		return (
			<div data-testid='usage-output'>
				{t.command}: {command}
			</div>
		);
	}

	const home = `/home/${user}`;

	return (
		<div data-testid={index === 0 ? 'latest-output' : null}>
			{
				{
					clear: <Clear />,
					echo: <Echo />,
					help: <Help />,
					history: <History />,
					pwd: <div>{home}</div>,
					welcome: <Welcome />,
					whoami: <div>{user}</div>,
				}[command]
			}
		</div>
	);
};

export default TerminalOutput;
