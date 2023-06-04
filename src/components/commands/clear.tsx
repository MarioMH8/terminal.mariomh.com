import type { FC } from 'react';
import { useEffect } from 'react';

import { TerminalLine } from '../styled/terminal.styled';
import { useExecutedCommandContext } from '../../state';

const Clear: FC = () => {
	const { arg, clearHistory } = useExecutedCommandContext();
	useEffect(() => {
		if (arg.length < 1) {
			clearHistory?.();
		}
	}, []);

	return arg.length > 0 ? <TerminalLine>Usage: clear</TerminalLine> : <></>;
};

export default Clear;
