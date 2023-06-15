import type { FC } from 'react';
import { useEffect } from 'react';

import { checkLocaleSwitch, getCurrentCmdArray, isArgInvalid } from '../../fn';
import { useApplicationContext, useExecutedCommandContext } from '../../state';
import Usage from '../terminal-usage';

const Locale: FC = () => {
	const { arg } = useExecutedCommandContext();
	const {
		command: {
			history: [history],
		},
		terminal: { rerender },
		locale: { setLocale, locales },
	} = useApplicationContext();

	/* ===== get current command ===== */
	const currentCommand = getCurrentCmdArray(history);

	/* ===== check current command makes redirect ===== */
	useEffect(() => {
		if (checkLocaleSwitch(rerender, currentCommand, locales)) {
			setLocale(currentCommand[2] as string);
		}
	}, [arg, rerender, currentCommand]);

	/* ===== check arg is valid ===== */
	const checkArg = () => (isArgInvalid(arg, 'set', locales) ? <Usage cmd='locale' /> : null);

	return arg.length > 0 || arg.length > 2 ? (
		checkArg()
	) : (
		<div className='terminal-line-history' data-testid='locales'>
			<div>
				{locales.map(locale => (
					<span className='hints' key={locale}>
						{locale}
					</span>
				))}
			</div>
			<Usage cmd='locale' marginY />
		</div>
	);
};

export default Locale;
