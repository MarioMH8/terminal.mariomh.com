import styled from 'styled-components';

export const PromptForm = styled.form`
	@media (min-width: 550px) {
		display: flex;
	}
`;

export const PromptInput = styled.input`
	flex-grow: 1;

	@media (max-width: 550px) {
		min-width: 85%;
	}
`;

export const PromptUser = styled.span`
	color: ${({ theme }) => theme.colors.secondary};
`;

export const PromptInfo = styled.span`
	display: inline-block;
	margin-right: 0.75rem;
`;

export const TerminalHost = styled.span`
	color: ${({ theme }) => theme.colors.primary};
`;
