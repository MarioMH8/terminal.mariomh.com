import './terminal.css';

import type { JSX } from 'preact';

import TerminalHints from './terminal-hints';
import TerminalPrompt from './terminal-prompt';

const Terminal = (): JSX.Element => {
	return (
		<section className='terminal-wrapper' data-testid='terminal-wrapper'>
			<TerminalHints />
			<TerminalPrompt />
		</section>
	);
};

export default Terminal;
