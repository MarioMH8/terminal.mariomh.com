import type { FC } from 'react';
import styled from 'styled-components';

import { useApplicationContext } from '../state';

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

const TerminalInfo: FC = () => {
	const {
		info: { domain, user, separator },
	} = useApplicationContext();

	return (
		<Wrapper>
			<User>{user}</User>@<WebsiteName>{domain}</WebsiteName>
			{separator}
		</Wrapper>
	);
};

export default TerminalInfo;
