import type { FC } from 'react';

import { useApplicationContext } from '../state';
import { TerminalLine } from './styled/terminal.styled';
import { Hints } from './styled/terminal-hints.styled';

const TerminalHints: FC = () => {
	const {
		command: {
			hints: [hints],
		},
	} = useApplicationContext();

	return (
		<>
			{hints.length > 1 && (
				<TerminalLine>
					{hints.map(hint => (
						<Hints key={hint}>{hint}</Hints>
					))}
				</TerminalLine>
			)}
		</>
	);
};

export default TerminalHints;
