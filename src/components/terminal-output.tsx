import React from 'react';
import styled from 'styled-components';

import Clear from '../commands/clear';
import Echo from '../commands/echo';
import GeneralOutput from '../commands/general-output';
import Help from '../commands/help';
import History from '../commands/history';
import { useApplicationContext, useExecutedCommandContext } from '../state';
import { TerminalUsage } from './terminal-usage';

const TerminalOutputContainer = styled.div`
	padding-bottom: 0.25rem;
`;

interface TerminalOutputProps {
	command: string;
	index: number;
}

export default function TerminalOutput({ command, index }: TerminalOutputProps): React.JSX.Element {
	const {
		info: { user },
	} = useApplicationContext();
	const { arg } = useExecutedCommandContext();

	const especialCommands = ['projects', 'socials', 'themes', 'echo'];

	// return 'Usage: <command>' if command arg is not valid
	if (!especialCommands.includes(command) && arg.length > 0) {
		return <TerminalUsage data-testid='usage-output'>Usage: {command}</TerminalUsage>;
	}

	const home = `/home/${user}`;

	return (
		<TerminalOutputContainer data-testid={index === 0 ? 'latest-output' : null}>
			{
				{
					clear: <Clear />,
					echo: <Echo />,
					help: <Help />,
					history: <History />,
					pwd: <GeneralOutput>${home}</GeneralOutput>,
					whoami: <GeneralOutput>${user}</GeneralOutput>,
				}[command]
			}
		</TerminalOutputContainer>
	);
}
