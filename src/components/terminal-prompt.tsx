import './terminal-prompt.css';

import type { JSX } from 'preact';

import usePromptState from './state/prompt';
import TerminalInfo from './terminal-info';

interface TerminalPrompt {
	command?: string;
}

const TerminalPrompt = ({ command }: TerminalPrompt): JSX.Element => {
	const { value, ref, onSubmit, onPromptChange, onKeyDown } = usePromptState();

	return command === undefined ? (
		<form className='prompt-form' onSubmit={onSubmit}>
			<label htmlFor='terminal-input'>
				<TerminalInfo />
				<br className='mobile-br' />
				<span className='mobile-span'>&#62;</span>
			</label>
			<input
				className='prompt-input'
				title='terminal-input'
				type='text'
				id='terminal-input'
				autoComplete='off'
				spellCheck={false}
				autoFocus
				autoCapitalize='off'
				ref={ref}
				value={value}
				onInput={onPromptChange}
				onKeyDown={onKeyDown}
			/>
		</form>
	) : (
		<div>
			<TerminalInfo />
			<br className='mobile-br' />
			<span className='mobile-span'>&#62;</span>
			<span data-testid='input-command' className='input-command'>
				{command}
			</span>
		</div>
	);
};

export default TerminalPrompt;
