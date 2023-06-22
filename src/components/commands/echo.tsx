import join from 'lodash/join';
import trim from 'lodash/trim';
import type { FunctionalComponent } from 'preact';

import type { CommandComponentProps, ComponentCommand } from '../state/commands';

const Echo: FunctionalComponent<CommandComponentProps> = ({ args = [] }) => {
	let outputStr = join(args, ' ');
	outputStr = trim(outputStr, "'"); // remove trailing single quotes ''
	outputStr = trim(outputStr, '"'); // remove trailing double quotes ""
	outputStr = trim(outputStr, '`'); // remove trailing backtick ``

	return <div className='terminal-line-history'>{outputStr}</div>;
};

const EchoCommand: ComponentCommand = {
	command: 'echo',
	component: Echo,
};

export default EchoCommand;
