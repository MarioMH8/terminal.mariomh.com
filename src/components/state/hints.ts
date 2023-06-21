import { useStore } from '@nanostores/preact';
import { atom } from 'nanostores';

export interface HintsState {
	clearHints: () => void;
	hints: string[];
	setHints: (command: string[]) => void;
}

const $hints = atom<string[]>([]);

export default function useHintsState(): HintsState {
	const hints = useStore($hints);

	return {
		hints,
		clearHints() {
			$hints.set([]);
		},
		setHints(command: string[]) {
			$hints.set(command);
		},
	};
}
