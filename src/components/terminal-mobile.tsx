import type { FC } from 'react';
import styled from 'styled-components';

const InternalMobileSpan = styled.span`
	line-height: 1.5rem;
	margin-right: 0.75rem;

	@media (min-width: 550px) {
		display: none;
	}
`;

export const MobileBr = styled.br`
	@media (min-width: 550px) {
		display: none;
	}
`;

export const MobileSpan: FC = () => {
	return <InternalMobileSpan>&#62;</InternalMobileSpan>;
};
