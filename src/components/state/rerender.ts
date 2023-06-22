import { useStore } from '@nanostores/preact';
import { atom } from 'nanostores';

export interface RerenderState {
	rerender: boolean;
	setRerender: (rerender: boolean) => void;
}

const $rerender = atom<boolean>(false);

export default function useRerenderState(): RerenderState {
	const rerender = useStore($rerender);

	return {
		rerender,
		setRerender(rerender: boolean) {
			$rerender.set(rerender);
		},
	};
}
