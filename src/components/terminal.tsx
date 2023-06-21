import './terminal.css';

import type { JSX } from 'preact';

import TerminalHints from './terminal-hints';
import TerminalHistory from './terminal-history';
import TerminalPrompt from './terminal-prompt';

const Terminal = (): JSX.Element => {
	return (
		<section className='terminal-wrapper' data-testid='terminal-wrapper'>
			<TerminalHints />
			<TerminalPrompt />
			<TerminalHistory />
		</section>
	);
};

export default Terminal;
