import type { ActionCommand } from '@commands';
import useHistoryState from '@history';

const ClearCommand: ActionCommand = {
	action: () => {
		const { clearHistory } = useHistoryState();
		clearHistory();
	},
	alias: ['cls'],
	command: 'clear',
};

export default ClearCommand;
