export interface InfoState {
	domain: string;
	separator: string;
	user: string;
}

const useInfoState = (): InfoState => {
	return {
		domain: window.location.hostname,
		separator: ':~$',
		user: 'visitor',
	};
};

export { useInfoState };
