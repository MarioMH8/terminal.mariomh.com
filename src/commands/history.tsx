import reverse from 'lodash/reverse';
import slice from 'lodash/slice';
import uniqueId from 'lodash/uniqueId';
import type { FC } from 'react';

import { useExecutedCommandContext } from '../state';
import { Wrapper } from './general-output';

const History: FC = () => {
	const { history, index } = useExecutedCommandContext();
	const currentHistory = reverse(slice(history, index));

	return (
		<Wrapper data-testid='history'>
			{currentHistory.map(cmd => (
				<div key={uniqueId(`${cmd}_`)}>{cmd}</div>
			))}
		</Wrapper>
	);
};

export default History;
