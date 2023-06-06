import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { generateTabs } from '../../fn';
import { useApplicationContext } from '../../state';
import { TerminalLineHistorySm } from '../styled/terminal.styled';

const CmdName = styled.span`
	color: ${({ theme }) => theme.colors.primary};
`;

const CmdDesc = styled.span`
	color: ${({ theme }) => theme.colors.text[200]};

	@media (max-width: 550px) {
		display: block;
	}
`;

const Autocomplete = styled.div`
	font-size: 0.875rem;

	@media (max-width: 550px) {
		display: none;
	}
`;

const AutocompleteFirst = styled.div`
	font-size: 0.875rem;
	margin-top: 0.5rem;

	@media (max-width: 550px) {
		display: none;
	}
`;

const Help: FC = () => {
	const { t } = useTranslation();
	const {
		command: { available },
	} = useApplicationContext();

	return (
		<TerminalLineHistorySm data-testid='help'>
			{available.map(({ cmd, desc, tab }) => (
				<div key={cmd}>
					<CmdName>{cmd}</CmdName>
					{generateTabs(tab)}
					<CmdDesc>- {desc}</CmdDesc>
				</div>
			))}
			<AutocompleteFirst>
				{t('help.tab_ctrl')}
				{generateTabs(0)}=&gt;&nbsp;
				{t('help.tab_ctrl_desc')}
			</AutocompleteFirst>
			<Autocomplete>
				{t('help.up_arrow')}
				{generateTabs(7)}=&gt;&nbsp;
				{t('help.up_arrow_desc')}
			</Autocomplete>
			<Autocomplete>
				{t('help.ctrl_l')}
				{generateTabs(7)}=&gt;&nbsp;
				{t('help.ctrl_l_desc')}
			</Autocomplete>
		</TerminalLineHistorySm>
	);
};

export default Help;
