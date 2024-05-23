import type { ActionCommand } from '../state/commands';
import useHistoryState from '../state/history';

const ClearCommand: ActionCommand = {
	action: () => {
		const { clearHistory } = useHistoryState();
		clearHistory();
	},
	alias: ['cls'],
	command: 'clear',
};

export default ClearCommand;
