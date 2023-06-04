import drop from 'lodash/drop';
import uniqueId from 'lodash/uniqueId';
import type { FC } from 'react';

import type { ExecutedCommandState } from '../state';
import { ExecutedCommandContext, useApplicationContext } from '../state';
import { TerminalLineHistory, TerminalLine } from './styled/terminal.styled';
import TerminalOutput from './terminal-output';
import TerminalPrompt from './terminal-prompt';

const TerminalHistory: FC = () => {
	const {
		command: {
			available,
			history: [history, , clearHistory],
		},
		terminal: { rerender },
	} = useApplicationContext();

	return (
		<>
			{history.map((cmd, index) => {
				const sanitize = cmd.trim();
				const commands = sanitize.split(' ');
				const command = available.find(c => c.cmd === commands[0]);
				const contextValue: ExecutedCommandState = {
					arg: drop(commands),
					history,
					rerender,
					index,
					clearHistory,
				};

				return (
					<TerminalLineHistory key={uniqueId(`${cmd}_`)}>
						<TerminalPrompt command={cmd} />
						{command && commands[0] ? (
							<ExecutedCommandContext.Provider value={contextValue}>
								<TerminalOutput index={index} command={commands[0]} />
							</ExecutedCommandContext.Provider>
						) : cmd === '' ? (
							<></>
						) : (
							<TerminalLine data-testid={`not-found-${index}`}>
								command not found: {cmd}
							</TerminalLine>
						)}
					</TerminalLineHistory>
				);
			})}
		</>
	);
};

export default TerminalHistory;
