import type { FC } from 'react';
import styled from 'styled-components';

import { useApplicationContext } from '../state';

const Hints = styled.span`
	margin-right: 0.875rem;
`;

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
						<Hints key={hint}>{hint}</Hints>
					))}
				</div>
			)}
		</>
	);
};

export default TerminalHints;
