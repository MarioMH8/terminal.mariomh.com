import type { FunctionalComponent } from 'preact';

import type { CommandComponentProps, WebCommand } from '../state/commands';

const Clear: FunctionalComponent<CommandComponentProps> = ({ args }) => {
	console.log(args);

	return <></>;
};

const ClearCommand: WebCommand = {
	command: 'clear',
	description: 'limpia la terminal',
	alias: 'cls',
	component: Clear,
};

export default ClearCommand;
