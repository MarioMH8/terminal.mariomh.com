import { useStore } from '@nanostores/preact';
import { atom } from 'nanostores';

const $hints = atom<string[]>([]);

export interface HintsState {
	clearHints: () => void;
	hints: string[];
	setHints: (command: string[]) => void;
}

export default function useHintsState(): HintsState {
	const hints = useStore($hints);

	return {
		clearHints() {
			$hints.set([]);
		},
		hints,
		setHints(command: string[]) {
			$hints.set(command);
		},
	};
}
