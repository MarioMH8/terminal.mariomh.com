import join from 'lodash/join';
import trim from 'lodash/trim';
import type { FunctionalComponent } from 'preact';

import type { CommandComponentProps, ComponentCommand } from '../state/commands';

const Echo: FunctionalComponent<CommandComponentProps> = ({ args = [] }) => {
	let outputStr = join(args, ' ');
	// Remove trailing single quotes ''
	outputStr = trim(outputStr, "'");
	// Remove trailing double quotes ""
	outputStr = trim(outputStr, '"');
	// Remove trailing backtick ``
	outputStr = trim(outputStr, '`');

	return <div className='terminal-line-history'>{outputStr}</div>;
};

const EchoCommand: ComponentCommand = {
	command: 'echo',
	component: Echo,
};

export default EchoCommand;
