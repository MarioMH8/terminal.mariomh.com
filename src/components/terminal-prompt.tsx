import './terminal-prompt.css';

import type { JSX } from 'preact';

import usePromptState from './state/prompt';
import TerminalInfo from './terminal-info';

interface TerminalPrompt {
	command?: string;
}

const TerminalPrompt = ({ command }: TerminalPrompt): JSX.Element => {
	const { onKeyDown, onPromptChange, onSubmit, ref, value } = usePromptState();

	if (command === undefined) {
		return (
			<form
				className='prompt-form'
				onSubmit={onSubmit}>
				<label htmlFor='terminal-input'>
					<TerminalInfo />
					<br className='mobile-br' />
					<span className='mobile-span'>&#62;</span>
				</label>
				<input
					autoCapitalize='off'
					autoComplete='off'
					autoFocus
					className='prompt-input'
					id='terminal-input'
					onInput={onPromptChange}
					onKeyDown={onKeyDown}
					ref={ref}
					spellcheck={false}
					title='terminal-input'
					type='text'
					value={value}
				/>
			</form>
		);
	}

	return (
		<div>
			<TerminalInfo />
			<br className='mobile-br' />
			<span className='mobile-span'>&#62;</span>
			<span
				className='input-command'
				data-testid='input-command'>
				{command}
			</span>
		</div>
	);
};

export default TerminalPrompt;
