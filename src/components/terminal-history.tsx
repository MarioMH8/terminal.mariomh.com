import React from 'react';
import styled from 'styled-components';

import { uniqueId } from '../fn';
import { useApplicationContext } from '../state';
import TerminalInfo from './terminal-info';
import { MobileBr, MobileSpan } from './terminal-mobile';

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
			// available,
			history: [history],
		},
	} = useApplicationContext();

	return (
		<>
			{history.map((cmd, index) => {
				// const sanitize = cmd.trim();
				// const commands = sanitize.split(' ');
				// const command = available.find(c => c.cmd === commands[0]);
				return (
					<div key={uniqueId(`${cmd}_`)}>
						<div>
							<TerminalInfo />
							<MobileBr />
							<MobileSpan />
							<span data-testid='input-command'>{cmd}</span>
						</div>
						{cmd === '' ? (
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
