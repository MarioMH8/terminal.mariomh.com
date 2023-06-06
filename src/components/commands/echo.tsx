import join from 'lodash/join';
import trim from 'lodash/trim';
import type { FC } from 'react';

import { useExecutedCommandContext } from '../../state';

const Echo: FC = () => {
	const { arg } = useExecutedCommandContext();

	let outputStr = join(arg, ' ');
	outputStr = trim(outputStr, "'"); // remove trailing single quotes ''
	outputStr = trim(outputStr, '"'); // remove trailing double quotes ""
	outputStr = trim(outputStr, '`'); // remove trailing backtick ``

	return <div>{outputStr}</div>;
};

export default Echo;
