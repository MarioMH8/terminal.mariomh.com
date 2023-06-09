import './help.css';

import { useStore } from '@nanostores/react';
import type { FC } from 'react';

import { generateTabs } from '../../fn';
import { i18n } from '../../i18n';
import { useApplicationContext } from '../../state';

const messages = i18n('help', {
	tab_ctrl: 'Tab or Ctrl + i',
	tab_ctrl_desc: 'autocompletes the command',
	up_arrow: 'Up Arrow',
	up_arrow_desc: 'go back to previous command',
	ctrl_l: 'Ctrl + l',
	ctrl_l_desc: 'clear the terminal',
});

const Help: FC = () => {
	const t = useStore(messages);
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
				{t.tab_ctrl}
				{generateTabs(0)}=&gt;&nbsp;
				{t.tab_ctrl_desc}
			</div>
			<div className='autocomplete'>
				{t.up_arrow}
				{generateTabs(7)}=&gt;&nbsp;
				{t.up_arrow_desc}
			</div>
			<div className='autocomplete'>
				{t.ctrl_l}
				{generateTabs(7)}=&gt;&nbsp;
				{t.ctrl_l_desc}
			</div>
		</div>
	);
};

export default Help;
