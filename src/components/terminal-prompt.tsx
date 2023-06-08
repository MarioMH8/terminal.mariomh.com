import './terminal-prompt.css';

import type { FC } from 'react';

import { useApplicationContext } from '../state';
import TerminalInfo from './terminal-info';

interface TerminalPrompt {
	command?: string;
}

const TerminalPrompt: FC<TerminalPrompt> = ({ command }) => {
	const {
		terminal: {
			promptRef,
			promptValue: [promptValue],
			handlePromptChange,
			handlePromptKeyDown,
			handleSubmit,
		},
	} = useApplicationContext();

	return command || command === '' ? (
		<div>
			<TerminalInfo />
			<br className='mobile-br' />
			<span className='mobile-span'>&#62;</span>
			<span data-testid='input-command'>{command}</span>
		</div>
	) : (
		<form className='prompt-form' onSubmit={e => handleSubmit(e)}>
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
				spellCheck='false'
				autoFocus
				autoCapitalize='off'
				ref={promptRef}
				value={promptValue}
				onChange={handlePromptChange}
				onKeyDown={handlePromptKeyDown}
			/>
		</form>
	);
};

export default TerminalPrompt;
