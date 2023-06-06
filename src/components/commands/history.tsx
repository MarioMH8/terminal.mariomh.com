import reverse from 'lodash/reverse';
import slice from 'lodash/slice';
import uniqueId from 'lodash/uniqueId';
import type { FC } from 'react';

import { useApplicationContext, useExecutedCommandContext } from '../../state';
import { TerminalLineHistorySm } from '../styled/terminal.styled';

const History: FC = () => {
	const {
		command: {
			history: [history],
		},
	} = useApplicationContext();
	const { index } = useExecutedCommandContext();
	const currentHistory = reverse(slice(history, index));

	return (
		<TerminalLineHistorySm data-testid='history'>
			{currentHistory.map(cmd => (
				<div key={uniqueId(`${cmd}_`)}>{cmd}</div>
			))}
		</TerminalLineHistorySm>
	);
};

export default History;
