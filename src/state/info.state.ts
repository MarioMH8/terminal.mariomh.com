import { useState } from 'react';

export interface InfoState {
	host: string;
	separator: string;
	user: string;
}

const useInfoState = (): InfoState => {
	const [host] = useState(window.location.hostname);
	const [separator] = useState(':~$');
	const [user] = useState('visitor');

	return {
		host,
		separator,
		user,
	};
};

export { useInfoState };
