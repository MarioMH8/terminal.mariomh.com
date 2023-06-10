import { useStore } from '@nanostores/react';
import drop from 'lodash/drop';
import uniqueId from 'lodash/uniqueId';
import type { FC } from 'react';

import type { ExecutedCommandState } from '../state';
import { ExecutedCommandContext, i18n, useApplicationContext } from '../state';
import TerminalOutput from './terminal-output';
import TerminalPrompt from './terminal-prompt';

const messages = i18n('not_found', {
	command: 'comando invalido',
});

const TerminalHistory: FC = () => {
	const t = useStore(messages);
	const {
		command: {
			available,
			history: [history],
		},
	} = useApplicationContext();

	return (
		<>
			{history.map((cmd, index) => {
				const sanitize = cmd.trim();
				const commands = sanitize.split(' ');
				const command = available.find(c => c.cmd === commands[0]);
				const contextValue: ExecutedCommandState = {
					arg: drop(commands),
					index,
				};

				return (
					<div className='terminal-line-history' key={uniqueId(`${cmd}_`)}>
						<TerminalPrompt command={cmd} />
						{command && commands[0] ? (
							<ExecutedCommandContext.Provider value={contextValue}>
								<TerminalOutput index={index} command={commands[0]} />
							</ExecutedCommandContext.Provider>
						) : cmd === '' ? (
							<></>
						) : (
							<div data-testid={`not-found-${index}`}>
								{t.command}: {cmd}
							</div>
						)}
					</div>
				);
			})}
		</>
	);
};

export default TerminalHistory;
