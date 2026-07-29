import type { CommandComponentProps, ComponentCommand } from '@commands';
import Usage from '@components/terminal-usage';
import isArgumentInvalid from '@fn/is-argument-invalid';
import shouldLocaleSwitch from '@fn/should-locale-switch.ts';
import useHistoryState from '@history';
import useLocaleState from '@locale';
import useRerenderState from '@rerender';
import split from 'lodash/split';
import type { FunctionalComponent } from 'preact';

const Locale: FunctionalComponent<CommandComponentProps> = ({ args: commandArguments = [] }) => {
	const { rerender } = useRerenderState();
	const { history } = useHistoryState();
	const { locales, setLocale } = useLocaleState();

	/* ===== get current command ===== */
	const currentCommand = split(history[0], ' ');

	if (shouldLocaleSwitch(rerender, currentCommand, locales)) {
		const current = currentCommand[2];
		if (current !== undefined) {
			setLocale(current);
		}
	}

	/* ===== check arg is valid ===== */
	const checkArgument = () => (isArgumentInvalid(commandArguments, 'set', locales) ? <Usage cmd='locale' /> : <></>);

	if (commandArguments.length > 0 || commandArguments.length > 2) {
		return checkArgument();
	}

	return (
		<div
			className='terminal-line-history'
			data-testid='locales'>
			<div>
				{locales.map(locale => (
					<span
						className='hints'
						key={locale}>
						{locale}
					</span>
				))}
			</div>
			<Usage
				cmd='locale'
				marginY
			/>
		</div>
	);
};

const LocaleCommand: ComponentCommand = {
	command: 'locale',
	component: Locale,
};

export default LocaleCommand;
