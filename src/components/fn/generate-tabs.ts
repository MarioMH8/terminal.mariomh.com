/**
 * Generates html tabs
 * @param {number} num - The number of tabs
 * @returns {string} tabs - Tab string
 */
const generateTabs = (number_ = 0): string => {
	let tabs = '\u00A0\u00A0';
	for (let index = 0; index < number_; index++) {
		tabs += '\u00A0';
	}

	return tabs;
};

export default generateTabs;
