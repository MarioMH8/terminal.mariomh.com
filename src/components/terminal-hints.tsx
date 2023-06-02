import React from 'react';
import styled from 'styled-components';
import { useApplicationContext } from '../state';

const Hints = styled.span`
	margin-right: 0.875rem;
`;

export default function TerminalHints(): React.JSX.Element {
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
}
