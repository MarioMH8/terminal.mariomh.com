import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
	margin-top: 0.25rem;
	margin-bottom: 0.75rem;
`;

type Props = {
	children: React.ReactNode;
};

const GeneralOutput: React.FC<Props> = ({ children }) => <Wrapper>{children}</Wrapper>;
export default GeneralOutput;
