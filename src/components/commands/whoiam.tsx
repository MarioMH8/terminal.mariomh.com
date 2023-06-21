import type { FunctionalComponent } from 'preact';

import type { CommandComponentProps, ComponentCommand } from '../state/commands';
import useInfoState from '../state/info';

const Whoiam: FunctionalComponent<CommandComponentProps> = () => {
	const { user } = useInfoState();

	return <div>{user}</div>;
};

const WhoiamCommand: ComponentCommand = {
	command: 'whoiam',
	component: Whoiam,
};

export default WhoiamCommand;
