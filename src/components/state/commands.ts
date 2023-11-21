import { useStore } from '@nanostores/preact';
import { atom } from 'nanostores';
import type { FunctionalComponent } from 'preact';

import commands from '../commands';

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
		available: commands
			.map(c => {
				const arr = [c.command];
				if (c.alias) {
					if (typeof c.alias === 'string') {
						arr.push(c.alias);
					} else {
						arr.push(...c.alias);
					}
				}

				return arr;
			})
			.flat(),
		commands: commands.reduce((prev, c) => {
			if (c.alias) {
				if (typeof c.alias === 'string') {
					prev.set(c.alias, c);
				} else {
					c.alias.forEach(alias => {
						prev.set(alias, c);
					});
				}
			}

			prev.set(c.command, c);

			return prev;
		}, new Map<string, WebCommand>()),
		list: commands,
	};
}
