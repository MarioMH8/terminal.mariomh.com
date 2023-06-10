import { useStore } from '@nanostores/react';
import type { Dispatch, SetStateAction } from 'react';
import { useMemo, useState } from 'react';

import { i18n } from './locale.state';

type Command = {
	cmd: string;
	desc: string;
	hasArgs?: true;
};

const messages = i18n('commands', {
	about: 'sobre MarioMH',
	clear: 'limpiar la consola',
	echo: 'imprime algo por consola',
	education: 'mi educación',
	email: 'enviame un email',
	gui: 'ir a mi portfolio en formato web',
	help: 'lista de los comandos disponibles',
	history: 'mostrar el historial de comandos',
	projects: 'muestra todos mis proyectos',
	pwd: 'muestra el directorio actual',
	socials: 'muestra mis redes sociales',
	themes: 'muestra los temas disponibles',
	locale: 'muestra los idiomas disponibles',
	welcome: 'muestra el mensaje de bienvenida',
	whoami: 'información del usuario',
});

const commands: Command[] = [
	{ cmd: 'about', desc: 'about MarioMH' },
	{ cmd: 'clear', desc: 'clear the terminal' },
	{ cmd: 'echo', desc: 'print out anything', hasArgs: true },
	// { cmd: 'education', desc: 'my education background', tab: 4 },
	{ cmd: 'email', desc: 'send an email to me' },
	{ cmd: 'gui', desc: 'go to my portfolio in GUI' },
	{ cmd: 'help', desc: 'check available commands' },
	{ cmd: 'history', desc: 'view command history' },
	{ cmd: 'locale', desc: 'check available locales', hasArgs: true },
	// { cmd: 'projects', desc: "view projects that I've coded", hasArgs: true },
	{ cmd: 'pwd', desc: 'print current working directory' },
	// { cmd: 'socials', desc: 'check out my social accounts', hasArgs: true },
	{ cmd: 'themes', desc: 'check available themes', hasArgs: true },
	{ cmd: 'welcome', desc: 'display hero section' },
	{ cmd: 'whoami', desc: 'about current user' },
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
