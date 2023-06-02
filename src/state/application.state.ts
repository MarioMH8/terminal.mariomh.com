import type { CommandState } from './command.state';
import { useCommandState } from './command.state';
import type { InfoState } from './info.state';
import { useInfoState } from './info.state';
import type { TerminalState } from './terminal.state';
import { useTerminalState } from './terminal.state';
import type { ThemeState } from './theme.state';
import { useThemeState } from './theme.state';

export interface ApplicationState {
	command: CommandState;
	info: InfoState;
	terminal: TerminalState;
	theme: ThemeState;
}

const useApplicationState = (): ApplicationState => {
	const command = useCommandState();
	const info = useInfoState();
	const theme = useThemeState();
	const terminal = useTerminalState(command);

	return {
		command,
		info,
		terminal,
		theme,
	};
};

export { useApplicationState };
