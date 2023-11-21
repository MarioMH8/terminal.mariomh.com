import { useStore } from '@nanostores/preact';
import { atom } from 'nanostores';

const $host = atom(window.location.hostname);
const $separator = atom(':~$');
const $user = atom('visitor');

export interface InfoState {
	home: string;
	host: string;
	separator: string;
	user: string;
}

export default function useInfoState(): InfoState {
	const host = useStore($host);
	const separator = useStore($separator);
	const user = useStore($user);

	return {
		home: `/home/${user}`,
		host,
		separator,
		user,
	};
}
