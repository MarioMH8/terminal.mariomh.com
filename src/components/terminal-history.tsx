import TerminalOutput from '@components/terminal-output';
import TerminalPrompt from '@components/terminal-prompt';
import uniqueId from '@fn/unique-id';
import useHistoryState from '@history';
import type { FunctionalComponent } from 'preact';

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
