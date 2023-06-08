import './terminal.css';

import type { FC } from 'react';

import { useApplicationContext } from '../state';
import TerminalHints from './terminal-hints';
import TerminalHistory from './terminal-history';
import TerminalPrompt from './terminal-prompt';

const Terminal: FC = () => {
	const {
		terminal: { terminalRef },
	} = useApplicationContext();

	return (
		<div className='terminal-wrapper' data-testid='terminal-wrapper' ref={terminalRef}>
			<TerminalHints />
			<TerminalPrompt />
			<TerminalHistory />
		</div>
	);
};

export default Terminal;
