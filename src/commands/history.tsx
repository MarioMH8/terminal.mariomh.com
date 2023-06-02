import _ from 'lodash';

import { useExecutedCommandContext } from '../state';
import { Wrapper } from './general-output';

const History: React.FC = () => {
	const { history, index } = useExecutedCommandContext();
	const currentHistory = _.reverse(_.slice(history, index));

	return (
		<Wrapper data-testid='history'>
			{currentHistory.map(cmd => (
				<div key={_.uniqueId(`${cmd}_`)}>{cmd}</div>
			))}
		</Wrapper>
	);
};

export default History;
