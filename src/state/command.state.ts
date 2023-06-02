import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

type Command = {
	cmd: string;
	desc: string;
	tab: number;
};

const commands: Command[] = [
	{ cmd: 'about', desc: 'about Sat Naing', tab: 8 },
	{ cmd: 'clear', desc: 'clear the terminal', tab: 8 },
	{ cmd: 'echo', desc: 'print out anything', tab: 9 },
	{ cmd: 'education', desc: 'my education background', tab: 4 },
	{ cmd: 'email', desc: 'send an email to me', tab: 8 },
	{ cmd: 'gui', desc: 'go to my portfolio in GUI', tab: 10 },
	{ cmd: 'help', desc: 'check available commands', tab: 9 },
	{ cmd: 'history', desc: 'view command history', tab: 6 },
	{ cmd: 'projects', desc: "view projects that I've coded", tab: 5 },
	{ cmd: 'pwd', desc: 'print current working directory', tab: 10 },
	{ cmd: 'socials', desc: 'check out my social accounts', tab: 6 },
	{ cmd: 'themes', desc: 'check available themes', tab: 7 },
	{ cmd: 'welcome', desc: 'display hero section', tab: 6 },
	{ cmd: 'whoami', desc: 'about current user', tab: 7 },
];

export interface CommandState {
	available: Command[];
	hints: [string[], Dispatch<SetStateAction<string[]>>];
	history: [string[], Dispatch<SetStateAction<string[]>>, () => void];
}

const useCommandState = (): CommandState => {
	const [hints, setHints] = useState<string[]>([]);
	const [history, setHistory] = useState<string[]>(['welcome']);

	const clearHistory = () => {
		setHistory([]);
		setHints([]);
	};

	return {
		available: commands,
		hints: [hints, setHints],
		history: [history, setHistory, clearHistory],
	};
};

export { useCommandState };
