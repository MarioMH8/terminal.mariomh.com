import type { FC } from 'react';

import { useApplicationContext } from '../state';
import { TerminalWrapper } from './styled/terminal.styled';
import TerminalHints from './terminal-hints';
import TerminalHistory from './terminal-history';
import TerminalPrompt from './terminal-prompt';

const Terminal: FC = () => {
	const {
		terminal: { terminalRef },
	} = useApplicationContext();

	return (
		<TerminalWrapper data-testid='terminal-wrapper' ref={terminalRef}>
			<TerminalHints />
			<TerminalPrompt />
			<TerminalHistory />
		</TerminalWrapper>
	);
};

export default Terminal;
