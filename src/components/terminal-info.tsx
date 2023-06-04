import type { FC } from 'react';

import { useApplicationContext } from '../state';
import { PromptInfo, PromptUser, TerminalHost } from './styled/terminal-prompt.styled';

const TerminalInfo: FC = () => {
	const {
		info: { host, user, separator },
	} = useApplicationContext();

	return (
		<PromptInfo>
			<PromptUser>{user}</PromptUser>@<TerminalHost>{host}</TerminalHost>
			{separator}
		</PromptInfo>
	);
};

export default TerminalInfo;
