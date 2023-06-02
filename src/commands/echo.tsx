import _ from 'lodash';

import { useExecutedCommandContext } from '../state';
import { Wrapper } from './general-output';

const Echo: React.FC = () => {
	const { arg } = useExecutedCommandContext();

	let outputStr = _.join(arg, ' ');
	outputStr = _.trim(outputStr, "'"); // remove trailing single quotes ''
	outputStr = _.trim(outputStr, '"'); // remove trailing double quotes ""
	outputStr = _.trim(outputStr, '`'); // remove trailing backtick ``

	return <Wrapper>{outputStr}</Wrapper>;
};

export default Echo;
