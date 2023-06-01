import React from 'react';
import styled from 'styled-components';

import { useApplicationState } from '../state/application.state';

const Hints = styled.span`
	margin-right: 0.875rem;
`;

export default function TerminalHints(): React.JSX.Element {
	const {
		terminal: {
			hints: [hints],
		},
	} = useApplicationState();

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
}
