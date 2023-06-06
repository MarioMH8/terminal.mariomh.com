import type { FC } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useExecutedCommandContext } from '../../state';
import { TerminalLine } from '../styled/terminal.styled';

const Clear: FC = () => {
	const { t } = useTranslation();
	const { arg, clearHistory } = useExecutedCommandContext();
	useEffect(() => {
		if (arg.length < 1) {
			clearHistory?.();
		}
	}, []);

	return arg.length > 0 ? <TerminalLine>{t('usage')}: clear</TerminalLine> : <></>;
};

export default Clear;
