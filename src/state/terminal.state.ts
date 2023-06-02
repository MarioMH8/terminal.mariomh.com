import type { Dispatch, MutableRefObject, SetStateAction } from 'react';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import type { CommandState } from './command.state';

export interface TerminalState {
	handlePromptChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handlePromptKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	promptPointer: [number, Dispatch<SetStateAction<number>>];
	promptRef: MutableRefObject<HTMLInputElement | null>;
	promptValue: [string, Dispatch<SetStateAction<string>>];
	terminalRef: MutableRefObject<HTMLDivElement | null>;
}

const useTerminalState = ({
	hints: [, setHints],
	history: [history, setHistory, clearHistory],
}: CommandState): TerminalState => {
	const terminalRef = useRef<HTMLDivElement>(null);
	const promptRef = useRef<HTMLInputElement>(null);
	const [promptValue, setPromptValue] = useState('');
	const [pointer, setPointer] = useState(-1);
	const [, setRerender] = useState(false);

	const handlePromptChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setRerender(false);
			setPromptValue(e.target.value);
		},
		[promptValue]
	);

	const handleSubmit = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			setHistory([promptValue, ...history]);
			setPromptValue('');
			setRerender(true);
			setHints([]);
			setPointer(-1);
		},
		[history, promptValue]
	);

	const handlePromptKeyDown = useCallback(
		(e: React.KeyboardEvent<HTMLInputElement>) => {
			setRerender(false);
			// const ctrlI = e.ctrlKey && e.key.toLowerCase() === 'i';
			const ctrlL = e.ctrlKey && e.key.toLowerCase() === 'l';
			// const tab = e.key === 'Tab';
			const arrowUp = e.key === 'ArrowUp';
			const arrowDown = e.key === 'ArrowDown';

			// if Ctrl + L
			if (ctrlL) {
				clearHistory();
			} else if (arrowUp) {
				if (pointer >= history.length) {
					return;
				}

				if (pointer + 1 === history.length) {
					return;
				}

				setPromptValue(history[pointer + 1] ?? '');
				setPointer(prevState => prevState + 1);
				promptRef.current?.blur();
			} else if (arrowDown) {
				if (pointer < 0) {
					return;
				}

				if (pointer === 0) {
					setPromptValue('');
					setPointer(-1);

					return;
				}

				setPromptValue(history[pointer - 1] ?? '');
				setPointer(prevState => prevState - 1);
				promptRef.current?.blur();
			}
		},
		[promptValue, history, pointer]
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
		handlePromptKeyDown,
		handleSubmit,
		promptPointer: [pointer, setPointer],
		promptRef,
		promptValue: [promptValue, setPromptValue],
		terminalRef,
	};
};

export { useTerminalState };
