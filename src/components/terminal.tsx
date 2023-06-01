import React from 'react';
import styled from 'styled-components';

import { useApplicationState } from '../state/application.state';
import TerminalPrompt from './terminal-prompt';

const TerminalWrapper = styled.div`
	padding: 0.75rem 1.25rem 1.25rem;

	display: flex;
	flex-direction: column-reverse;
	max-height: calc(100vh - 2rem);
	overflow-y: auto;
`;

export default function Terminal(): React.JSX.Element {
	const {
		terminal: { terminalRef },
	} = useApplicationState();

	return (
		<TerminalWrapper data-testid='terminal-wrapper' ref={terminalRef}>
			<TerminalPrompt />
		</TerminalWrapper>
	);
}
