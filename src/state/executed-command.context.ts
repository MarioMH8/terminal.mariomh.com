import { createContext, useContext } from 'react';

export interface ExecutedCommandState {
	arg: string[];
	clearHistory?: () => void;
	history: string[];
	index: number;
	rerender: boolean;
}

export const ExecutedCommandContext = createContext<ExecutedCommandState>({
	arg: [],
	history: [],
	rerender: false,
	index: 0,
});

export const useExecutedCommandContext = (): ExecutedCommandState => useContext(ExecutedCommandContext);
