import '@commands/help.css';

import type { ComponentCommand } from '@commands';
import useCommandsState from '@commands';
import generateTabs from '@fn/generate-tabs';
import { i18n } from '@locale';
import { useStore } from '@nanostores/preact';
import type { FunctionalComponent } from 'preact';

const helpMessages = i18n('help', {
	alias: 'alias',
	ctrl_l: 'Ctrl + l',
	ctrl_l_desc: 'limpiar la consola',
	tab_ctrl: 'Tab o Ctrl + i',
	tab_ctrl_desc: 'autocompleta el comando',
	up_arrow: 'Flecha arriba',
	up_arrow_desc: 'muestra el comando previo',
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
	locale: 'muestra los idiomas disponibles',
	projects: 'muestra todos mis proyectos',
	pwd: 'muestra el directorio actual',
	resume: 'ir mi curriculum vitae en formato web',
	socials: 'muestra mis redes sociales',
	themes: 'muestra los temas disponibles',
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
		<div
			className='terminal-line-history sm'
			data-testid='help'>
			{list.map(({ alias, command }) => (
				<>
					<div key={command}>
						<span className='command-name'>{command}</span>
						{generateTabs(MAX_COLUMNS_COMMANDS - command.length)}
						{/* @ts-expect-error TS7053: Element implicitly has an any type because expression of type string can't be used to index type */}
						<span className='command-description'>- {d[command]}</span>
					</div>
					{alias ? (
						<div key={`${command}-alias`}>
							{generateTabs(MAX_COLUMNS_COMMANDS + 2)}
							<span>{h.alias}: </span>
							{alias.map((a, index, array) => (
								<>
									<span class='command-name'>{a}</span>
									{index === array.length - 1 ? undefined : ', '}
								</>
							))}
						</div>
					) : undefined}
				</>
			))}
			<div className='autocomplete font-sm text-200 first'>
				{h.tab_ctrl}
				{generateTabs(MAX_COLUMNS_AUTOCOMPLETE - h.tab_ctrl.length)}-&nbsp;
				{h.tab_ctrl_desc}
			</div>
			<div className='autocomplete font-sm text-200'>
				{h.up_arrow}
				{generateTabs(MAX_COLUMNS_AUTOCOMPLETE - h.up_arrow.length)}-&nbsp;
				{h.up_arrow_desc}
			</div>
			<div className='autocomplete font-sm text-200'>
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
