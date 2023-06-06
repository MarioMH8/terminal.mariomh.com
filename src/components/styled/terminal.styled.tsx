import styled from 'styled-components';

export const TerminalWrapper = styled.div`
	padding: 0.75rem 1.25rem 1.25rem;

	display: flex;
	flex-direction: column-reverse;
	max-height: calc(100vh - 2rem);
	overflow-y: auto;

	row-gap: 0.75rem;
`;

export const TerminalLine = styled.div``;

export const TerminalLineHistory = styled.div`
	display: flex;
	row-gap: 0.75rem;
	flex-direction: column;

	width: 100%;
`;

export const TerminalLineHistorySm = styled.div`
	display: flex;
	row-gap: 5px;
	flex-direction: column;

	width: 100%;
`;
