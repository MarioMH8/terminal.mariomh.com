import type { FunctionalComponent } from 'preact';

import uniqueId from './fn/unique-id';
import useHistoryState from './state/history';
import TerminalOutput from './terminal-output';
import TerminalPrompt from './terminal-prompt';

const TerminalHistory: FunctionalComponent = () => {
	const { sessionHistory } = useHistoryState();

	return (
		<>
			{sessionHistory.map((command, index) => {
				return (
					<div
						className='terminal-line-history'
						key={uniqueId(`${command}_`)}>
						<TerminalPrompt command={command} />
						<TerminalOutput
							command={command}
							index={index}
						/>
					</div>
				);
			})}
		</>
	);
};

export default TerminalHistory;
