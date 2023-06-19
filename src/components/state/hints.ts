import { useStore } from '@nanostores/preact';
import { atom } from 'nanostores';

export interface HintsState {
	addHints: (command: string) => void;
	clearHints: () => void;
	hints: string[];
}

const $hints = atom<string[]>([]);

export default function useHintsState(): HintsState {
	const hints = useStore($hints);

	return {
		hints,
		clearHints() {
			$hints.set([]);
		},
		addHints(command: string) {
			$hints.set([...$hints.get(), command]);
		},
	};
}
