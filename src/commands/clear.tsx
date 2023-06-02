import React, { useEffect } from 'react';

import { TerminalUsage } from '../components/terminal-usage';
import { useExecutedCommandContext } from '../state';

const Clear: React.FC = () => {
	const { arg, clearHistory } = useExecutedCommandContext();
	useEffect(() => {
		if (arg.length < 1) {
			clearHistory?.();
		}
	}, []);

	return arg.length > 0 ? <TerminalUsage>Usage: clear</TerminalUsage> : <></>;
};

export default Clear;
