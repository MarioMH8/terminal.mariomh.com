import useCommandsState from '@commands';
import getHints from '@fn/get-hints';
import useHintsState from '@hints';
import useHistoryState from '@history';
import { useStore } from '@nanostores/preact';
import useRenderState from '@rerender';
import { atom } from 'nanostores';
import type { JSX, RefObject } from 'preact';
import { createRef } from 'preact';
import type { TargetedEvent } from 'preact/compat';
import { useEffect } from 'preact/hooks';

const $prompt = atom<string>('');

export interface PromptState {
	onKeyDown: JSX.KeyboardEventHandler<HTMLInputElement>;
	onPromptChange: JSX.GenericEventHandler<HTMLInputElement>;
	onSubmit: JSX.EventHandler<TargetedEvent<HTMLFormElement>>;
	ref: RefObject<HTMLInputElement>;
	value: string;
}

export default function usePromptState(): PromptState {
	const value = useStore($prompt);
	const reference = createRef<HTMLInputElement>();
	const { addHistory, clearHistory, decrementPointer, history, incrementPointer, pointer, setPointer } =
		useHistoryState();
	const { clearHints, setHints } = useHintsState();
	const { setRerender } = useRenderState();
	const { commands } = useCommandsState();

	const onSubmit: JSX.EventHandler<TargetedEvent<HTMLFormElement>> = (event: TargetedEvent<HTMLFormElement>) => {
		event.preventDefault();

		addHistory($prompt.get());
		$prompt.set('');
		setRerender(true);
		clearHints();
		setPointer(-1);
	};

	const onKeyDown: JSX.KeyboardEventHandler<HTMLInputElement> = (
		event: JSX.TargetedKeyboardEvent<HTMLInputElement>
	) => {
		setRerender(false);
		const ctrlI = event.ctrlKey && event.key.toLowerCase() === 'i';
		const ctrlL = event.ctrlKey && event.key.toLowerCase() === 'l';
		const tab = event.key === 'Tab';
		const arrowUp = event.key === 'ArrowUp';
		const arrowDown = event.key === 'ArrowDown';

		if (ctrlI || tab) {
			event.preventDefault();
			const actualValue = $prompt.get().trim().split(' ');
			const actualValueWithoutLast = actualValue.slice(0, -2);
			const hints = getHints(actualValue, commands);
			if (hints.length === 1) {
				const hit = hints[0] ?? '';
				actualValueWithoutLast.push(hit);
				$prompt.set(actualValueWithoutLast.join(' '));
			} else {
				setHints(hints);
			}
		} else if (ctrlL) {
			clearHistory();
		} else if (arrowUp) {
			event.preventDefault();
			if (pointer >= history.length) {
				return;
			}

			if (pointer + 1 === history.length) {
				return;
			}

			$prompt.set(history[pointer + 1] ?? '');
			incrementPointer();
			reference.current?.blur();
		} else if (arrowDown) {
			event.preventDefault();
			if (pointer < 0) {
				return;
			}

			if (pointer === 0) {
				$prompt.set('');
				setPointer(-1);

				return;
			}

			$prompt.set(history[pointer - 1] ?? '');
			decrementPointer();
			reference.current?.blur();
		}
	};

	const onPromptChange: JSX.GenericEventHandler<HTMLInputElement> = (event: JSX.TargetedEvent<HTMLInputElement>) => {
		setRerender(false);
		$prompt.set(event.currentTarget.value);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			reference.current?.focus();
		}, 1);

		return () => clearTimeout(timer);
	}, [reference]);
	const handleDivClick = () => {
		reference.current?.focus();
	};
	useEffect(() => {
		document.addEventListener('click', handleDivClick);

		return () => {
			document.removeEventListener('click', handleDivClick);
		};
	}, [reference]);

	return {
		onKeyDown,
		onPromptChange,
		onSubmit,
		ref: reference,
		value,
	};
}
