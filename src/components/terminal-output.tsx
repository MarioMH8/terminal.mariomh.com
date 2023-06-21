import type { FunctionalComponent } from 'preact';

import NotFound from './commands/not-found';
import useCommandsState from './state/commands';

interface TerminalOutputProps {
	command?: string | undefined;
	index: number;
}

const TerminalOutput: FunctionalComponent<TerminalOutputProps> = ({
	command,
	index,
}: TerminalOutputProps) => {
	if (!command) {
		return <></>;
	}

	const { commands } = useCommandsState();

	const sanitize = command.trim();
	const splitCommands = sanitize.split(' ');
	const first = splitCommands[0] ?? '';
	const args = splitCommands.slice(1);

	const found = commands.get(first);
	if (found) {
		if ('component' in found) {
			return found.component({ args });
		}
		if ('action' in found) {
			found.action();

			return <></>;
		}
	}

	return <NotFound index={index} command={command} />;
};

export default TerminalOutput;
