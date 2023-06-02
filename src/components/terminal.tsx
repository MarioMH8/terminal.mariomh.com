import type { FC } from 'react';
import styled from 'styled-components';

import { useApplicationContext } from '../state';
import TerminalHints from './terminal-hints';
import TerminalHistory from './terminal-history';
import TerminalPrompt from './terminal-prompt';

const TerminalWrapper = styled.div`
	padding: 0.75rem 1.25rem 1.25rem;

	display: flex;
	flex-direction: column-reverse;
	max-height: calc(100vh - 2rem);
	overflow-y: auto;
`;

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
