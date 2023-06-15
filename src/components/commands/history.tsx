import reverse from 'lodash/reverse';
import slice from 'lodash/slice';
import uniqueId from 'lodash/uniqueId';
import type { FC } from 'react';

import { useApplicationContext, useExecutedCommandContext } from '../../state';

const History: FC = () => {
	const {
		command: {
			history: [history],
		},
	} = useApplicationContext();
	const { index } = useExecutedCommandContext();
	const currentHistory = reverse(slice(history, index));

	return (
		<div className='terminal-line-history sm' data-testid='history'>
			{currentHistory.map(cmd => (
				<div key={uniqueId(`${cmd}_`)}>{cmd}</div>
			))}
		</div>
	);
};

export default History;
