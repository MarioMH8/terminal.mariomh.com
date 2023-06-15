import type { FC } from 'react';
import { useEffect } from 'react';

import { checkThemeSwitch, getCurrentCmdArray, isArgInvalid } from '../../fn';
import { useApplicationContext, useExecutedCommandContext } from '../../state';
import Usage from '../terminal-usage';

const Themes: FC = () => {
	const { arg } = useExecutedCommandContext();
	const {
		command: {
			history: [history],
		},
		terminal: { rerender },
		theme: { setTheme, themes },
	} = useApplicationContext();

	/* ===== get current command ===== */
	const currentCommand = getCurrentCmdArray(history);

	/* ===== check current command makes redirect ===== */
	useEffect(() => {
		if (checkThemeSwitch(rerender, currentCommand, themes)) {
			setTheme(currentCommand[2] as string);
		}
	}, [arg, rerender, currentCommand]);

	/* ===== check arg is valid ===== */
	const checkArg = () => (isArgInvalid(arg, 'set', themes) ? <Usage cmd='themes' /> : null);

	return arg.length > 0 || arg.length > 2 ? (
		checkArg()
	) : (
		<div className='terminal-line-history' data-testid='themes'>
			<div>
				{themes.map(t => (
					<span className='hints' key={t}>
						{t}
					</span>
				))}
			</div>
			<Usage cmd='themes' marginY />
		</div>
	);
};

export default Themes;
