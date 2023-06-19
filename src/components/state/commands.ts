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
	description: string;
}

export interface WebCommand extends BaseCommand {
	component: FunctionalComponent<CommandComponentProps>;
}

export interface CommandsState {
	available: string[];
	commands: WebCommand[];
}

const $commands = atom<WebCommand[]>(commands);

export default function useCommandsState(): CommandsState {
	const commands = useStore($commands);

	return {
		available: commands.map(c => c.command),
		commands,
	};
}
