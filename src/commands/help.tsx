import React from 'react';
import styled from 'styled-components';

import { generateTabs } from '../fn';
import { useApplicationContext } from '../state';

const HelpWrapper = styled.div`
	margin-top: 0.25rem;
	margin-bottom: 0.75rem;
`;

const CmdList = styled.div`
	margin-bottom: 0.25rem;
`;

const Cmd = styled.span`
	color: ${({ theme }) => theme.colors.primary};
`;

const CmdDesc = styled.span`
	color: ${({ theme }) => theme.colors.text[200]};
	margin-bottom: 0.75rem;

	@media (max-width: 550px) {
		display: block;
	}
`;

const KeyContainer = styled.div`
	font-size: 0.875rem;
	margin-top: 1rem;

	@media (max-width: 550px) {
		display: none;
	}

	div {
		margin-top: 0.25rem;
	}
`;

const Help: React.FC = () => {
	const {
		command: { available },
	} = useApplicationContext();

	return (
		<HelpWrapper data-testid='help'>
			{available.map(({ cmd, desc, tab }) => (
				<CmdList key={cmd}>
					<Cmd>{cmd}</Cmd>
					{generateTabs(tab)}
					<CmdDesc>- {desc}</CmdDesc>
				</CmdList>
			))}
			<KeyContainer>
				<div>Tab or Ctrl + i&nbsp; =&gt; autocompletes the command</div>
				<div>Up Arrow {generateTabs(5)} =&gt; go back to previous command</div>
				<div>Ctrl + l {generateTabs(5)} =&gt; clear the terminal</div>
			</KeyContainer>
		</HelpWrapper>
	);
};

export default Help;
