import { useStore } from '@nanostores/preact';
import { atom } from 'nanostores';

const $rerender = atom<boolean>(false);

export interface RerenderState {
	rerender: boolean;
	setRerender: (isRerender: boolean) => void;
}

export default function useRerenderState(): RerenderState {
	const isRerender = useStore($rerender);

	return {
		rerender: isRerender,
		setRerender(isRerender: boolean) {
			$rerender.set(isRerender);
		},
	};
}
