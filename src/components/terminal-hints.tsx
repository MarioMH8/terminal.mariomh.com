import './terminal-hints.css';

import type { FC } from 'react';

import { useApplicationContext } from '../state';

const TerminalHints: FC = () => {
	const {
		command: {
			hints: [hints],
		},
	} = useApplicationContext();

	return (
		<>
			{hints.length > 1 && (
				<div>
					{hints.map(hint => (
						<span className='hints' key={hint}>
							{hint}
						</span>
					))}
				</div>
			)}
		</>
	);
};

export default TerminalHints;
