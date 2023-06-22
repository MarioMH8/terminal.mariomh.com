import type { FunctionalComponent } from 'preact';

import type { CommandComponentProps, ComponentCommand } from '../state/commands';
import useInfoState from '../state/info';

const Pwd: FunctionalComponent<CommandComponentProps> = () => {
	const { home } = useInfoState();

	return <div>{home}</div>;
};

const PwdCommand: ComponentCommand = {
	command: 'pwd',
	component: Pwd,
};

export default PwdCommand;
