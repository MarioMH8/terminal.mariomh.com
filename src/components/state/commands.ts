import commands from '@components/commands';
import { useStore } from '@nanostores/preact';
import { atom } from 'nanostores';
import type { FunctionalComponent } from 'preact';

interface CommandComponentProps {
	args?: string[];
	index: number;
}

interface BaseCommand {
	alias?: string[];
	command: string;
}

interface ComponentCommand extends BaseCommand {
	component: FunctionalComponent<CommandComponentProps>;
}

interface ActionCommand extends BaseCommand {
	action: () => void;
}

type WebCommand = ActionCommand | ComponentCommand;

interface CommandsState {
	available: string[];
	commands: Map<string, WebCommand>;
	list: WebCommand[];
}

const $commands = atom<WebCommand[]>(commands);

export type { ActionCommand, CommandComponentProps, CommandsState, ComponentCommand, WebCommand };

export default function useCommandsState(): CommandsState {
	const commands = useStore($commands);

	return {
		available: commands.flatMap(c => {
			const array = [c.command];
			if (c.alias) {
				if (typeof c.alias === 'string') {
					array.push(c.alias);
				} else {
					array.push(...c.alias);
				}
			}

			return array;
		}),
		commands: commands.reduce((previous, c) => {
			if (c.alias) {
				if (typeof c.alias === 'string') {
					previous.set(c.alias, c);
				} else {
					for (const alias of c.alias) {
						previous.set(alias, c);
					}
				}
			}

			previous.set(c.command, c);

			return previous;
		}, new Map<string, WebCommand>()),
		list: commands,
	};
}
