import React from 'react';
import styled from 'styled-components';
import { useApplicationContext } from '../state';

import TerminalInfo from './terminal-info';
import { MobileBr, MobileSpan } from './terminal-mobile';

const Form = styled.form`
	@media (min-width: 550px) {
		display: flex;
	}
`;

const Input = styled.input`
	flex-grow: 1;

	@media (max-width: 550px) {
		min-width: 85%;
	}
`;

export default function TerminalPrompt(): React.JSX.Element {
	const {
		terminal: {
			promptRef,
			promptValue: [promptValue],
			handlePromptChange,
			handlePromptKeyDown,
			handleSubmit,
		},
	} = useApplicationContext();

	return (
		<Form onSubmit={e => handleSubmit(e)}>
			<label htmlFor='terminal-input'>
				<TerminalInfo />
				<MobileBr />
				<MobileSpan />
			</label>
			<Input
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
		</Form>
	);
}
