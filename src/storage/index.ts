export const setLocalStorage = (key: string, value: string): void => {
	// window.localStorage.setItem(key, JSON.stringify(value));
	window.localStorage.setItem(key, value);
};

export function getLocalStorage<T extends string = string>(key: string): T | undefined {
	const value = window.localStorage.getItem(key);

	if (value) {
		return value as T;
	}

	return undefined;
}
