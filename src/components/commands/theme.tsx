import split from 'lodash/split';
import type { FunctionalComponent } from 'preact';

import checkThemeSwitch from '../fn/check-theme-switch';
import isArgumentInvalid from '../fn/is-argument-invalid.ts';
import type { CommandComponentProps, ComponentCommand } from '../state/commands';
import useHistoryState from '../state/history';
import useRerenderState from '../state/rerender';
import useThemeState from '../state/theme';
import Usage from '../terminal-usage';

const Theme: FunctionalComponent<CommandComponentProps> = ({ args: commandArguments = [] }) => {
	const { rerender } = useRerenderState();
	const { history } = useHistoryState();
	const { setTheme, themes } = useThemeState();

	/* ===== get current command ===== */
	const currentCommand = split(history[0], ' ');

	if (checkThemeSwitch(rerender, currentCommand, themes)) {
		const current = currentCommand[2];
		if (current !== undefined) {
			setTheme(current);
		}
	}

	/* ===== check arg is valid ===== */
	const checkArgument = () => (isArgumentInvalid(commandArguments, 'set', themes) ? <Usage cmd='themes' /> : <></>);

	if (commandArguments.length > 0 || commandArguments.length > 2) {
		return checkArgument();
	}

	return (
		<div
			className='terminal-line-history'
			data-testid='themes'>
			<div>
				{themes.map(theme => (
					<span
						className='hints'
						key={theme}>
						{theme}
					</span>
				))}
			</div>
			<Usage
				cmd='themes'
				marginY
			/>
		</div>
	);
};

const ThemeCommand: ComponentCommand = {
	command: 'themes',
	component: Theme,
};

export default ThemeCommand;
