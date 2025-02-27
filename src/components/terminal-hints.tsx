import '@components/terminal-hints.css';

import useHintsState from '@hints';
import type { JSX } from 'preact';

const TerminalHints = (): JSX.Element => {
	const { hints } = useHintsState();

	return (
		<>
			{hints.length > 1 && (
				<div>
					{hints.map(hint => (
						<span
							className='hints'
							key={hint}>
							{hint}
						</span>
					))}
				</div>
			)}
		</>
	);
};

export default TerminalHints;
