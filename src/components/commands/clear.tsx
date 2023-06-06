import type { FC } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useApplicationContext, useExecutedCommandContext } from '../../state';
import { TerminalLine } from '../styled/terminal.styled';

const Clear: FC = () => {
	const { t } = useTranslation();
	const {
		command: {
			history: [, , clearHistory],
		},
	} = useApplicationContext();
	const { arg } = useExecutedCommandContext();
	useEffect(() => {
		if (arg.length < 1) {
			clearHistory();
		}
	}, []);

	return arg.length > 0 ? <TerminalLine>{t('usage')}: clear</TerminalLine> : <></>;
};

export default Clear;
