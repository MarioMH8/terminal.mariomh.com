import type { FC } from 'react';

import { useApplicationContext } from '../state';

const TerminalInfo: FC = () => {
	const {
		info: { host, user, separator },
	} = useApplicationContext();

	return (
		<span className='prompt-info'>
			<span className='prompt-user'>{user}</span>@
			<span className='terminal-host'>{host}</span>
			{separator}
		</span>
	);
};

export default TerminalInfo;
