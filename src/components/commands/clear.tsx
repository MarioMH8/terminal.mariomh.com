import type { ActionCommand } from '../state/commands';
import useHistoryState from '../state/history';

const ClearCommand: ActionCommand = {
	command: 'clear',
	alias: 'cls',
	action: () => {
		const { clearHistory } = useHistoryState();
		clearHistory();
	},
};

export default ClearCommand;
