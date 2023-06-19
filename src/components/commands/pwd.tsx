import type { FunctionalComponent } from 'preact';

import type { CommandComponentProps, WebCommand } from '../state/commands';
import useInfoState from '../state/info';

const Pwd: FunctionalComponent<CommandComponentProps> = () => {
	const { home } = useInfoState();

	return <div>{home}</div>;
};

const PwdCommand: WebCommand = {
	command: 'clear',
	description: 'muestra el directorio actual',
	alias: 'cls',
	component: Pwd,
};

export default PwdCommand;
