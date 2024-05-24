const generateTabs = (number = 0): string => {
	let tabs = '\u00A0\u00A0';
	for (let index = 0; index < number; index++) {
		tabs += '\u00A0';
	}

	return tabs;
};

export default generateTabs;
