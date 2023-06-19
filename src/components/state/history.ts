import { useStore } from '@nanostores/preact';
import { atom } from 'nanostores';

export interface HistoryState {
	addHistory: (command: string) => void;
	clearHistory: () => void;
	decrementPointer: () => void;
	history: string[];
	incrementPointer: () => void;
	pointer: number;
	setPointer: (value: number) => void;
}

const $history = atom<string[]>([]);
const $pointer = atom<number>(-1);

export default function useHistoryState(): HistoryState {
	const history = useStore($history);
	const pointer = useStore($pointer);

	return {
		pointer,
		history,
		clearHistory() {
			$history.set([]);
		},
		addHistory(command: string) {
			$history.set([...$history.get(), command]);
		},
		setPointer(value: number) {
			$pointer.set(value);
		},
		incrementPointer() {
			$pointer.set($pointer.get() + 1);
		},
		decrementPointer() {
			$pointer.set($pointer.get() - 1);
		},
	};
}
