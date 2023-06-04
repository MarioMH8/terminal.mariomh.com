import type { FC, ReactNode } from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
	margin-top: 0.25rem;
	margin-bottom: 0.75rem;
`;

type Props = {
	children: ReactNode;
};

const GeneralOutput: FC<Props> = ({ children }) => <div>{children}</div>;
export default GeneralOutput;
