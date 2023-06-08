import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

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

const TerminalOutput: FC<TerminalOutputProps> = ({ command, index }: TerminalOutputProps) => {
	const {
		info: { user },
		command: { commandsWithArgs },
	} = useApplicationContext();
	const { arg } = useExecutedCommandContext();
	const { t } = useTranslation();

	// return 'Usage: <command>' if command arg is not valid
	if (!commandsWithArgs.includes(command) && arg.length > 0) {
		return (
			<div data-testid='usage-output'>
				{t('usage')}: {command}
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
