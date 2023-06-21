import { useStore } from '@nanostores/preact';
import { atom } from 'nanostores';
import type { FunctionalComponent } from 'preact';

import commands from '../commands';

export interface CommandComponentProps {
	args?: string[];
}

interface BaseCommand {
	alias?: string[] | string;
	command: string;
}

export interface ComponentCommand extends BaseCommand {
	component: FunctionalComponent<CommandComponentProps>;
}

export interface ActionCommand extends BaseCommand {
	action: () => void;
}

export type WebCommand = ActionCommand | ComponentCommand;

export interface CommandsState {
	available: string[];
	commands: Map<string, WebCommand>;
	list: WebCommand[];
}

const $commands = atom<WebCommand[]>(commands);

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
