import split from 'lodash/split';
import type { FunctionalComponent } from 'preact';

import checkLocaleSwitch from '../fn/check-locale-switch';
import isArgInvalid from '../fn/is-arg-invalid';
import type { CommandComponentProps, ComponentCommand } from '../state/commands';
import useHistoryState from '../state/history';
import useLocaleState from '../state/locale';
import useRerenderState from '../state/rerender';
import Usage from '../terminal-usage';

const Locale: FunctionalComponent<CommandComponentProps> = ({ args = [] }) => {
	const { rerender } = useRerenderState();
	const { history } = useHistoryState();
	const { locales, setLocale } = useLocaleState();

	/* ===== get current command ===== */
	const currentCommand = split(history[0], ' ');

	if (checkLocaleSwitch(rerender, currentCommand, locales)) {
		setLocale(currentCommand[2] as string);
	}

	/* ===== check arg is valid ===== */
	const checkArg = () => (isArgInvalid(args, 'set', locales) ? <Usage cmd='locale' /> : null);

	return args.length > 0 || args.length > 2 ? (
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

const LocaleCommand: ComponentCommand = {
	command: 'locale',
	component: Locale,
};

export default LocaleCommand;
