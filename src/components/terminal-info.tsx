import type { JSX } from 'preact';

import useInfoState from './state/info';

const TerminalInfo = (): JSX.Element => {
	const { host, user, separator } = useInfoState();

	return (
		<span className='prompt-info'>
			<span className='prompt-user'>{user}</span>@
			<span className='terminal-host'>{host}</span>
			{separator}
		</span>
	);
};

export default TerminalInfo;
