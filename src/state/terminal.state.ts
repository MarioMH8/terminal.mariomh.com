import type { Dispatch, MutableRefObject, SetStateAction } from 'react';
import React, { useCallback, useEffect, useRef, useState } from 'react';

export interface TerminalState {
	handlePromptChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	hints: [string[], Dispatch<SetStateAction<string[]>>];
	promptPointer: [number, Dispatch<SetStateAction<number>>];
	promptRef: MutableRefObject<HTMLInputElement | null>;
	promptValue: [string, Dispatch<SetStateAction<string>>];
	terminalRef: MutableRefObject<HTMLDivElement | null>;
}

const useTerminalState = (): TerminalState => {
	const promptRef = useRef<HTMLInputElement>(null);
	const terminalRef = useRef<HTMLDivElement>(null);
	const [promptValue, setPromptValue] = useState('');
	const [pointer, setPointer] = useState(-1);
	const [, setRerender] = useState(false);


	const [hints, setHints] = useState<string[]>([]);

	const handlePromptChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setRerender(false);
			setPromptValue(e.target.value);
		},
		[promptValue],
	);

	// For caret position at the end
	useEffect(() => {
		const timer = setTimeout(() => {
			promptRef.current?.focus();
		}, 1);

		return () => clearTimeout(timer);
	}, [promptRef, promptValue, pointer]);

	// focus on input when terminal is clicked
	const handleDivClick = () => {
		promptRef.current && promptRef.current.focus();
	};
	useEffect(() => {
		document.addEventListener('click', handleDivClick);

		return () => {
			document.removeEventListener('click', handleDivClick);
		};
	}, [terminalRef]);

	return {
		handlePromptChange,
		hints: [hints, setHints],
		promptPointer: [pointer, setPointer],
		promptRef,
		promptValue: [promptValue, setPromptValue],
		terminalRef,
	};
};

export { useTerminalState };
