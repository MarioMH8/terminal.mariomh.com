import { useState } from 'react';

export interface InfoState {
	domain: string;
	separator: string;
	user: string;
}

const useInfoState = (): InfoState => {
	const [domain] = useState(window.location.hostname);
	const [separator] = useState(':~$');
	const [user] = useState('visitor');

	return {
		domain,
		separator,
		user,
	};
};

export { useInfoState };
