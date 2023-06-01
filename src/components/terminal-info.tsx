import React from 'react';
import styled from 'styled-components';

import { useApplicationState } from '../state/application.state';

const Wrapper = styled.span`
	display: inline-block;
	margin-right: 0.75rem;
`;

const WebsiteName = styled.span`
	color: ${({ theme }) => theme.colors.primary};
`;

const User = styled.span`
	color: ${({ theme }) => theme.colors.secondary};
`;

export default function TerminalInfo(): React.JSX.Element {
	const {
		info: { domain, user, separator },
	} = useApplicationState();

	return (
		<Wrapper>
			<User>{user}</User>@<WebsiteName>{domain}</WebsiteName>
			{separator}
		</Wrapper>
	);
}
