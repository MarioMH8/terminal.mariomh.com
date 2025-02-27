import type { CommandComponentProps, ComponentCommand } from '@commands';
import join from 'lodash/join';
import trim from 'lodash/trim';
import type { FunctionalComponent } from 'preact';

const Echo: FunctionalComponent<CommandComponentProps> = ({ args: arguments_ = [] }) => {
	let outputString = join(arguments_, ' ');
	// Remove trailing single quotes ''
	outputString = trim(outputString, `'`);
	// Remove trailing double quotes ""
	outputString = trim(outputString, '"');
	// Remove trailing backtick ``
	outputString = trim(outputString, '`');

	return <div className='terminal-line-history'>{outputString}</div>;
};

const EchoCommand: ComponentCommand = {
	command: 'echo',
	component: Echo,
};

export default EchoCommand;
