import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { generateTabs } from '../../fn';
import { useApplicationContext } from '../../state';

const HelpWrapper = styled.div`
	margin-top: 0.25rem;
	margin-bottom: 0.75rem;
`;

const CmdList = styled.div`
	margin-bottom: 0.25rem;
`;

const Cmd = styled.span`
	color: ${({ theme }) => theme.colors.primary};
`;

const CmdDesc = styled.span`
	color: ${({ theme }) => theme.colors.text[200]};
	margin-bottom: 0.75rem;

	@media (max-width: 550px) {
		display: block;
	}
`;

const KeyContainer = styled.div`
	font-size: 0.875rem;
	margin-top: 1rem;

	@media (max-width: 550px) {
		display: none;
	}

	div {
		margin-top: 0.25rem;
	}
`;

const Help: FC = () => {
	const { t } = useTranslation();
	const {
		command: { available },
	} = useApplicationContext();

	return (
		<HelpWrapper data-testid='help'>
			{available.map(({ cmd, desc, tab }) => (
				<CmdList key={cmd}>
					<Cmd>{cmd}</Cmd>
					{generateTabs(tab)}
					<CmdDesc>- {desc}</CmdDesc>
				</CmdList>
			))}
			<KeyContainer>
				<div>
					{t('help.tab_ctrl')}
					{generateTabs(0)}=&gt;&nbsp;
					{t('help.tab_ctrl_desc')}
				</div>
				<div>
					{t('help.up_arrow')}
					{generateTabs(7)}=&gt;&nbsp;
					{t('help.up_arrow_desc')}
				</div>
				<div>
					{t('help.ctrl_l')}
					{generateTabs(7)}=&gt;&nbsp;
					{t('help.ctrl_l_desc')}
				</div>
			</KeyContainer>
		</HelpWrapper>
	);
};

export default Help;
