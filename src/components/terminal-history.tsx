import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';

import type { ExecutedCommandState } from '../state';
import { ExecutedCommandContext, useApplicationContext } from '../state';
import TerminalInfo from './terminal-info';
import { MobileBr, MobileSpan } from './terminal-mobile';
import TerminalOutput from './terminal-output';

export const CommandNotFound = styled.div`
	margin-top: 0.25rem;
	margin-bottom: 1rem;
`;

export const EmptyCommand = styled.div`
	margin-bottom: 0.25rem;
`;

export default function TerminalHistory(): React.JSX.Element {
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
					arg: _.drop(commands),
					history,
					rerender,
					index,
					clearHistory,
				};

				return (
					<div key={_.uniqueId(`${cmd}_`)}>
						<div>
							<TerminalInfo />
							<MobileBr />
							<MobileSpan />
							<span data-testid='input-command'>{cmd}</span>
						</div>
						{command && commands[0] ? (
							<ExecutedCommandContext.Provider value={contextValue}>
								<TerminalOutput index={index} command={commands[0]} />
							</ExecutedCommandContext.Provider>
						) : cmd === '' ? (
							<EmptyCommand />
						) : (
							<CommandNotFound data-testid={`not-found-${index}`}>
								command not found: {cmd}
							</CommandNotFound>
						)}
					</div>
				);
			})}
		</>
	);
}
