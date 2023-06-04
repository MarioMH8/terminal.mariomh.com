import type { FC } from 'react';

import { useApplicationContext, useExecutedCommandContext } from '../state';
import Clear from './commands/clear';
import Echo from './commands/echo';
import GeneralOutput from './commands/general-output';
import Help from './commands/help';
import History from './commands/history';
import Welcome from './commands/welcome';
import { TerminalLine } from './styled/terminal.styled';

interface TerminalOutputProps {
	command: string;
	index: number;
}

const TerminalOutput: FC<TerminalOutputProps> = ({ command, index }: TerminalOutputProps) => {
	const {
		info: { user },
	} = useApplicationContext();
	const { arg } = useExecutedCommandContext();

	const especialCommands = ['projects', 'socials', 'themes', 'echo'];

	// return 'Usage: <command>' if command arg is not valid
	if (!especialCommands.includes(command) && arg.length > 0) {
		return <TerminalLine data-testid='usage-output'>Usage: {command}</TerminalLine>;
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
					pwd: <GeneralOutput>{home}</GeneralOutput>,
					welcome: <Welcome />,
					whoami: <GeneralOutput>{user}</GeneralOutput>,
				}[command]
			}
		</div>
	);
};

export default TerminalOutput;
