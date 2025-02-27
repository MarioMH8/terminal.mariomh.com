import type { CommandComponentProps, ComponentCommand } from '@commands';
import useInfoState from '@info';
import type { FunctionalComponent } from 'preact';

const Pwd: FunctionalComponent<CommandComponentProps> = () => {
	const { home } = useInfoState();

	return <div>{home}</div>;
};

const PwdCommand: ComponentCommand = {
	command: 'pwd',
	component: Pwd,
};

export default PwdCommand;
