import './help.css';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { generateTabs } from '../../fn';
import { useApplicationContext } from '../../state';

const Help: FC = () => {
	const { t } = useTranslation();
	const {
		command: { available },
	} = useApplicationContext();

	return (
		<div className='terminal-line-history sm' data-testid='help'>
			{available.map(({ cmd, desc, tab }) => (
				<div key={cmd}>
					<span className='command-name'>{cmd}</span>
					{generateTabs(tab)}
					<span className='command-description'>- {desc}</span>
				</div>
			))}
			<div className='autocomplete first'>
				{t('help.tab_ctrl')}
				{generateTabs(0)}=&gt;&nbsp;
				{t('help.tab_ctrl_desc')}
			</div>
			<div className='autocomplete'>
				{t('help.up_arrow')}
				{generateTabs(7)}=&gt;&nbsp;
				{t('help.up_arrow_desc')}
			</div>
			<div className='autocomplete'>
				{t('help.ctrl_l')}
				{generateTabs(7)}=&gt;&nbsp;
				{t('help.ctrl_l_desc')}
			</div>
		</div>
	);
};

export default Help;
