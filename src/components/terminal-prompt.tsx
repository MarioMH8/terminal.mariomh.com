import type { FC } from 'react';

import { useApplicationContext } from '../state';
import { TerminalLine } from './styled/terminal.styled';
import { PromptForm, PromptInput } from './styled/terminal-prompt.styled';
import { MobileBr, MobileSpan } from './styled/terminal-prompt-mobile.styled';
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
		<TerminalLine>
			<TerminalInfo />
			<MobileBr />
			<MobileSpan />
			<span data-testid='input-command'>{command}</span>
		</TerminalLine>
	) : (
		<PromptForm onSubmit={e => handleSubmit(e)}>
			<label htmlFor='terminal-input'>
				<TerminalInfo />
				<MobileBr />
				<MobileSpan />
			</label>
			<PromptInput
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
		</PromptForm>
	);
};

export default TerminalPrompt;
