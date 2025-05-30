import type { CommandComponentProps, ComponentCommand } from '@commands';
import useHistoryState from '@history';
import reverse from 'lodash/reverse';
import slice from 'lodash/slice';
import uniqueId from 'lodash/uniqueId';
import type { FunctionalComponent } from 'preact';

const History: FunctionalComponent<CommandComponentProps> = ({ index }) => {
	const { history } = useHistoryState();
	const currentHistory = reverse(slice(history, index));

	return (
		<div
			className='terminal-line-history sm'
			data-testid='history'>
			{currentHistory.map(cmd => (
				<div key={uniqueId(`${cmd}_`)}>{cmd}</div>
			))}
		</div>
	);
};

const HistoryCommand: ComponentCommand = {
	command: 'history',
	component: History,
};

export default HistoryCommand;
