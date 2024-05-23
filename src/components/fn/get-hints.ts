import type { WebCommand } from '../state/commands';

export default function getHints(value: string[], commands: Map<string, WebCommand>): string[] {
	const baseCommand = value[0];
	if (!baseCommand) {
		return [];
	}
	const command = commands.get(baseCommand);
	if (command) {
		return [];
	}
	const availableBaseCommands = [...commands.keys()];

	return availableBaseCommands.filter(a => a.startsWith(baseCommand));
}
