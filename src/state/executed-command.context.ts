import { createContext, useContext } from 'react';

export interface ExecutedCommandState {
	arg: string[];
	index: number;
}

export const ExecutedCommandContext = createContext<ExecutedCommandState>({
	arg: [],
	index: 0,
});

export const useExecutedCommandContext = (): ExecutedCommandState =>
	useContext(ExecutedCommandContext);
