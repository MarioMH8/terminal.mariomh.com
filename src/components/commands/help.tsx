import './help.css';

import { useStore } from '@nanostores/preact';
import type { FunctionalComponent } from 'preact';

import { generateTabs } from '../fn/generate-tabs';
import useCommandsState, { ComponentCommand } from '../state/commands';
import { i18n } from '../state/locale';

const helpMessages = i18n('help', {
	tab_ctrl: 'Tab o Ctrl + i',
	tab_ctrl_desc: 'autocompleta el comando',
	up_arrow: 'Flecha arriba',
	up_arrow_desc: 'muestra el comando previo',
	ctrl_l: 'Ctrl + l',
	ctrl_l_desc: 'limpiar la consola',
});

const descriptionMessages = i18n('commands', {
	about: 'sobre MarioMH',
	clear: 'limpiar la consola',
	echo: 'imprime algo por consola',
	education: 'mi educación',
	email: 'enviame un email',
	gui: 'ir a mi portfolio en formato web',
	help: 'lista de los comandos disponibles',
	history: 'mostrar el historial de comandos',
	projects: 'muestra todos mis proyectos',
	pwd: 'muestra el directorio actual',
	socials: 'muestra mis redes sociales',
	themes: 'muestra los temas disponibles',
	locale: 'muestra los idiomas disponibles',
	welcome: 'muestra el mensaje de bienvenida',
	whoami: 'información del usuario',
});

const MAX_COLUMNS_COMMANDS = 14;
const MAX_COLUMNS_AUTOCOMPLETE = MAX_COLUMNS_COMMANDS + 5;

const Help: FunctionalComponent = () => {
	const h = useStore(helpMessages);
	const d = useStore(descriptionMessages);
	const { list } = useCommandsState();

	return (
		<div className='terminal-line-history sm' data-testid='help'>
			{list.map(({ command }) => (
				<div key={command}>
					<span className='command-name'>{command}</span>
					{generateTabs(MAX_COLUMNS_COMMANDS - command.length)}
					{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
					{/* @ts-ignore */}
					<span className='command-description'>- {d[command]}</span>
				</div>
			))}
			<div className='autocomplete font-sm first'>
				{h.tab_ctrl}
				{generateTabs(MAX_COLUMNS_AUTOCOMPLETE - h.tab_ctrl.length)}-&nbsp;
				{h.tab_ctrl_desc}
			</div>
			<div className='autocomplete font-sm'>
				{h.up_arrow}
				{generateTabs(MAX_COLUMNS_AUTOCOMPLETE - h.up_arrow.length)}-&nbsp;
				{h.up_arrow_desc}
			</div>
			<div className='autocomplete font-sm'>
				{h.ctrl_l}
				{generateTabs(MAX_COLUMNS_AUTOCOMPLETE - h.ctrl_l.length)}-&nbsp;
				{h.ctrl_l_desc}
			</div>
		</div>
	);
};

const HelpCommand: ComponentCommand = {
	command: 'help',
	component: Help,
};

export default HelpCommand;
