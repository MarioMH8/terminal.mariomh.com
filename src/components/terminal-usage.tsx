import styled from 'styled-components';

export const TerminalUsage = styled.div<{ marginY?: boolean }>`
	margin-top: ${props => (props.marginY ? '0.75rem' : '0.25rem')};
	margin-bottom: 0.75rem;
	line-height: 1.5rem;
`;
