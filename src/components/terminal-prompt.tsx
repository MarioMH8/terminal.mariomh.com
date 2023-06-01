import React from 'react';
import styled from 'styled-components';

import { useApplicationState } from '../state/application.state';
import TerminalInfo from './terminal-info';

const MobileSpan = styled.span`
	line-height: 1.5rem;
	margin-right: 0.75rem;

	@media (min-width: 550px) {
		display: none;
	}
`;

const MobileBr = styled.br`
	@media (min-width: 550px) {
		display: none;
	}
`;

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
		},
	} = useApplicationState();

	return (
		<Form>
			<label htmlFor='terminal-input'>
				<TerminalInfo />
				<MobileBr />
				<MobileSpan>&#62;</MobileSpan>
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
			/>
		</Form>
	);
}
