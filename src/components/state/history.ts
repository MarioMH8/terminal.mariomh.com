import { persistentAtom } from '@nanostores/persistent';
import { useStore } from '@nanostores/preact';
import { atom } from 'nanostores';

import WelcomeCommand from '../commands/welcome';

const $sessionHistory = atom<string[]>([WelcomeCommand.command]);
const $history = persistentAtom<string[]>('history', [], {
	decode: JSON.parse,
	encode: JSON.stringify,
});
const actualHistory = $history.get();
const lastActualHistory = actualHistory.at(0);
if (lastActualHistory !== WelcomeCommand.command) {
	$history.set([WelcomeCommand.command, ...actualHistory]);
}

const $pointer = atom<number>(-1);

export interface HistoryState {
	addHistory: (command: string) => void;
	clearHistory: () => void;
	decrementPointer: () => void;
	history: string[];
	incrementPointer: () => void;
	pointer: number;
	sessionHistory: string[];
	setPointer: (value: number) => void;
}

export default function useHistoryState(): HistoryState {
	const history = useStore($history);
	const sessionHistory = useStore($sessionHistory);
	const pointer = useStore($pointer);

	return {
		addHistory(command: string) {
			$history.set([command, ...$history.get()]);
			$sessionHistory.set([command, ...$sessionHistory.get()]);
		},
		clearHistory() {
			$history.set([]);
			$sessionHistory.set([]);
		},
		decrementPointer() {
			$pointer.set($pointer.get() - 1);
		},
		history,
		incrementPointer() {
			$pointer.set($pointer.get() + 1);
		},
		pointer,
		sessionHistory,
		setPointer(value: number) {
			$pointer.set(value);
		},
	};
}
