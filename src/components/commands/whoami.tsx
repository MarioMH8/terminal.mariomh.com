import type { FunctionalComponent } from 'preact';

import type { CommandComponentProps, ComponentCommand } from '../state/commands';
import useInfoState from '../state/info';

const Whoami: FunctionalComponent<CommandComponentProps> = () => {
	const { user } = useInfoState();

	return <div>{user}</div>;
};

const WhoamiCommand: ComponentCommand = {
	command: 'whoami',
	component: Whoami,
};

export default WhoamiCommand;
