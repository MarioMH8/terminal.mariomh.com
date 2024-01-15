import split from 'lodash/split';
import type { FunctionalComponent } from 'preact';

import checkThemeSwitch from '../fn/check-theme-switch';
import isArgInvalid from '../fn/is-arg-invalid';
import type { CommandComponentProps, ComponentCommand } from '../state/commands';
import useHistoryState from '../state/history';
import useRerenderState from '../state/rerender';
import type { RpaRequestStatuses } from '../state/theme';
import useThemeState from '../state/theme';
import Usage from '../terminal-usage';

const Theme: FunctionalComponent<CommandComponentProps> = ({ args = [] }) => {
	const { rerender } = useRerenderState();
	const { history } = useHistoryState();
	const { themes, setTheme } = useThemeState();

	/* ===== get current command ===== */
	const currentCommand = split(history[0], ' ');

	if (checkThemeSwitch(rerender, currentCommand, themes)) {
		const current = currentCommand[2];
		if (current !== undefined) {
			setTheme(current as RpaRequestStatuses);
		}
	}

	/* ===== check arg is valid ===== */
	const checkArg = () => (isArgInvalid(args, 'set', themes) ? <Usage cmd='themes' /> : null);

	return args.length > 0 || args.length > 2 ? (
		checkArg()
	) : (
		<div className='terminal-line-history' data-testid='themes'>
			<div>
				{themes.map(theme => (
					<span className='hints' key={theme}>
						{theme}
					</span>
				))}
			</div>
			<Usage cmd='themes' marginY />
		</div>
	);
};

const ThemeCommand: ComponentCommand = {
	command: 'themes',
	component: Theme,
};

export default ThemeCommand;
