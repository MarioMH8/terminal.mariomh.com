import join from 'lodash/join';
import trim from 'lodash/trim';
import type { FC } from 'react';

import { useExecutedCommandContext } from '../../state';
import { Wrapper } from './general-output';

const Echo: FC = () => {
	const { arg } = useExecutedCommandContext();

	let outputStr = join(arg, ' ');
	outputStr = trim(outputStr, "'"); // remove trailing single quotes ''
	outputStr = trim(outputStr, '"'); // remove trailing double quotes ""
	outputStr = trim(outputStr, '`'); // remove trailing backtick ``

	return <Wrapper>{outputStr}</Wrapper>;
};

export default Echo;
