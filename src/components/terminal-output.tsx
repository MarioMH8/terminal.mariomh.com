import { useStore } from '@nanostores/react';
import type { FC } from 'react';

import { i18n, useApplicationContext, useExecutedCommandContext } from '../state';
import About from './commands/about';
import Clear from './commands/clear';
import Echo from './commands/echo';
import Email from './commands/email';
import Gui from './commands/gui';
import Help from './commands/help';
import History from './commands/history';
import Locale from './commands/locale';
import Themes from './commands/themes';
import Welcome from './commands/welcome';

interface TerminalOutputProps {
	command: string;
	index: number;
}

const messages = i18n('usage', {
	command: 'Uso',
	eg: 'Ejemplo',
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
					about: <About />,
					clear: <Clear />,
					echo: <Echo />,
					email: <Email />,
					gui: <Gui />,
					help: <Help />,
					history: <History />,
					locale: <Locale />,
					pwd: <div>{home}</div>,
					themes: <Themes />,
					welcome: <Welcome />,
					whoami: <div>{user}</div>,
				}[command]
			}
		</div>
	);
};

export default TerminalOutput;
