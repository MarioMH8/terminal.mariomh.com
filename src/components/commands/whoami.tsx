import type { CommandComponentProps, ComponentCommand } from '@commands';
import useInfoState from '@info';
import type { FunctionalComponent } from 'preact';

const Whoami: FunctionalComponent<CommandComponentProps> = () => {
	const { user } = useInfoState();

	return <div>{user}</div>;
};

const WhoamiCommand: ComponentCommand = {
	command: 'whoami',
	component: Whoami,
};

export default WhoamiCommand;
