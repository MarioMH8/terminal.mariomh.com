import { useStore } from '@nanostores/preact';
import { atom } from 'nanostores';
import type { JSX, RefObject } from 'preact';
import { createRef } from 'preact';
import type { TargetedEvent } from 'preact/compat';
import { useEffect } from 'preact/hooks';

import getHints from '../fn/get-hints';
import useCommandsState from './commands';
import useHintsState from './hints';
import useHistoryState from './history';
import useRenderState from './rerender';

export interface PromptState {
	onKeyDown: JSX.KeyboardEventHandler<HTMLInputElement>;
	onPromptChange: JSX.GenericEventHandler<HTMLInputElement>;
	onSubmit: JSX.EventHandler<TargetedEvent<HTMLFormElement, Event>>;
	ref: RefObject<HTMLInputElement>;
	value: string;
}

const $prompt = atom<string>('');

export default function usePromptState(): PromptState {
	const value = useStore($prompt);
	const ref = createRef<HTMLInputElement>();
	const {
		addHistory,
		setPointer,
		clearHistory,
		pointer,
		history,
		incrementPointer,
		decrementPointer,
	} = useHistoryState();
	const { clearHints, setHints } = useHintsState();
	const { setRerender } = useRenderState();
	const { commands } = useCommandsState();

	const onSubmit: JSX.EventHandler<TargetedEvent<HTMLFormElement, Event>> = (
		e: TargetedEvent<HTMLFormElement, Event>
	) => {
		e.preventDefault();

		addHistory($prompt.get());
		$prompt.set('');
		setRerender(true);
		clearHints();
		setPointer(-1);
	};

	const onKeyDown: JSX.KeyboardEventHandler<HTMLInputElement> = (
		e: JSX.TargetedKeyboardEvent<HTMLInputElement>
	) => {
		setRerender(false);
		const ctrlI = e.ctrlKey && e.key.toLowerCase() === 'i';
		const ctrlL = e.ctrlKey && e.key.toLowerCase() === 'l';
		const tab = e.key === 'Tab';
		const arrowUp = e.key === 'ArrowUp';
		const arrowDown = e.key === 'ArrowDown';

		if (ctrlI || tab) {
			e.preventDefault();
			const actualValue = $prompt.get().trim().split(' ');
			const actualValueWithoutLast = actualValue.slice(0, actualValue.length - 2);
			const hints = getHints(actualValue, commands);
			if (hints.length === 1) {
				const hit = hints[0] ?? '';
				actualValueWithoutLast.push(hit);
				$prompt.set(`${actualValueWithoutLast.join(' ')}`);
			} else {
				setHints(hints);
			}
		} else if (ctrlL) {
			clearHistory();
		} else if (arrowUp) {
			e.preventDefault();
			if (pointer >= history.length) {
				return;
			}

			if (pointer + 1 === history.length) {
				return;
			}

			$prompt.set(history[pointer + 1] ?? '');
			incrementPointer();
			ref.current?.blur();
		} else if (arrowDown) {
			e.preventDefault();
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
			ref.current?.blur();
		}
	};

	const onPromptChange: JSX.GenericEventHandler<HTMLInputElement> = (
		e: JSX.TargetedEvent<HTMLInputElement>
	) => {
		setRerender(false);
		$prompt.set(e.currentTarget.value);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			ref.current?.focus();
		}, 1);

		return () => clearTimeout(timer);
	}, [ref]);
	const handleDivClick = () => {
		ref.current?.focus();
	};
	useEffect(() => {
		document.addEventListener('click', handleDivClick);

		return () => {
			document.removeEventListener('click', handleDivClick);
		};
	}, [ref]);

	return {
		onKeyDown,
		onPromptChange,
		onSubmit,
		value,
		ref,
	};
}
