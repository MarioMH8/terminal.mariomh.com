import '@components/terminal.css';

import TerminalHints from '@components/terminal-hints';
import TerminalHistory from '@components/terminal-history';
import TerminalPrompt from '@components/terminal-prompt';
import useThemeState from '@theme';
import type { JSX } from 'preact';

const Terminal = (): JSX.Element => {
	useThemeState();

	return (
		<section
			className='terminal-wrapper'
			data-testid='terminal-wrapper'>
			<TerminalHints />
			<TerminalPrompt />
			<TerminalHistory />
		</section>
	);
};

export default Terminal;
