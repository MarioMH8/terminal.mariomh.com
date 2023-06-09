import { useStore } from '@nanostores/react';
import type { Dispatch, SetStateAction } from 'react';
import { useMemo, useState } from 'react';

import { i18n } from '../i18n';

type Command = {
	cmd: string;
	desc: string;
	hasArgs?: true;
	tab: number;
};

const messages = i18n('commands', {
	about: 'about MarioMH',
	clear: 'clear the terminal',
	echo: 'print out anything',
	education: 'my education background',
	email: 'send an email to me',
	gui: 'go to my portfolio in GUI',
	help: 'check available commands',
	history: 'view command history',
	projects: "view projects that I've coded",
	pwd: 'print current working directory',
	socials: 'check out my social accounts',
	themes: 'check available themes',
	welcome: 'display hero section',
	whoami: 'about current user',
});

const commands: Command[] = [
	{ cmd: 'about', desc: 'about MarioMH', tab: 8 },
	{ cmd: 'clear', desc: 'clear the terminal', tab: 8 },
	{ cmd: 'echo', desc: 'print out anything', tab: 9, hasArgs: true },
	{ cmd: 'education', desc: 'my education background', tab: 4 },
	{ cmd: 'email', desc: 'send an email to me', tab: 8 },
	{ cmd: 'gui', desc: 'go to my portfolio in GUI', tab: 10 },
	{ cmd: 'help', desc: 'check available commands', tab: 9 },
	{ cmd: 'history', desc: 'view command history', tab: 6 },
	{ cmd: 'projects', desc: "view projects that I've coded", tab: 5, hasArgs: true },
	{ cmd: 'pwd', desc: 'print current working directory', tab: 10 },
	{ cmd: 'socials', desc: 'check out my social accounts', tab: 6, hasArgs: true },
	{ cmd: 'themes', desc: 'check available themes', tab: 7, hasArgs: true },
	{ cmd: 'welcome', desc: 'display hero section', tab: 6 },
	{ cmd: 'whoami', desc: 'about current user', tab: 7 },
];

export interface CommandState {
	available: Command[];
	commandsWithArgs: string[];
	hints: [string[], Dispatch<SetStateAction<string[]>>];
	history: [string[], Dispatch<SetStateAction<string[]>>, () => void];
}

const useCommandState = (): CommandState => {
	const t = useStore(messages);
	const [hints, setHints] = useState<string[]>([]);
	const [history, setHistory] = useState<string[]>(['welcome']);
	const available: Command[] = useMemo(
		() =>
			commands.map(c => ({
				...c,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				desc: t[c.cmd] as string,
			})),
		[t]
	);
	const commandsWithArgs: string[] = useMemo(
		() => available.filter(c => c.hasArgs).map(c => c.cmd),
		[available]
	);

	const clearHistory = () => {
		setHistory([]);
		setHints([]);
	};

	return {
		available,
		hints: [hints, setHints],
		history: [history, setHistory, clearHistory],
		commandsWithArgs,
	};
};

export { useCommandState };
