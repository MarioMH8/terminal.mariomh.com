import './help.css';

import { useStore } from '@nanostores/react';
import type { FC } from 'react';

import { generateTabs } from '../../fn';
import { i18n, useApplicationContext } from '../../state';

const messages = i18n('help', {
	tab_ctrl: 'Tab o Ctrl + i',
	tab_ctrl_desc: 'autocompleta el comando',
	up_arrow: 'Flecha arriba',
	up_arrow_desc: 'muestra el comando previo',
	ctrl_l: 'Ctrl + l',
	ctrl_l_desc: 'limpiar la consola',
});

const MAX_COLUMNS_COMMANDS = 14;
const MAX_COLUMNS_AUTOCOMPLETE = MAX_COLUMNS_COMMANDS + 2;

const Help: FC = () => {
	const t = useStore(messages);
	const {
		command: { available },
	} = useApplicationContext();

	return (
		<div className='terminal-line-history sm' data-testid='help'>
			{available.map(({ cmd, desc }) => (
				<div key={cmd}>
					<span className='command-name'>{cmd}</span>
					{generateTabs(MAX_COLUMNS_COMMANDS - cmd.length)}
					<span className='command-description'>- {desc}</span>
				</div>
			))}
			<div className='autocomplete font-sm first'>
				{t.tab_ctrl}
				{generateTabs(MAX_COLUMNS_AUTOCOMPLETE - t.tab_ctrl.length)}=&gt;&nbsp;
				{t.tab_ctrl_desc}
			</div>
			<div className='autocomplete font-sm'>
				{t.up_arrow}
				{generateTabs(MAX_COLUMNS_AUTOCOMPLETE - t.up_arrow.length)}=&gt;&nbsp;
				{t.up_arrow_desc}
			</div>
			<div className='autocomplete font-sm'>
				{t.ctrl_l}
				{generateTabs(MAX_COLUMNS_AUTOCOMPLETE - t.ctrl_l.length)}=&gt;&nbsp;
				{t.ctrl_l_desc}
			</div>
		</div>
	);
};

export default Help;
