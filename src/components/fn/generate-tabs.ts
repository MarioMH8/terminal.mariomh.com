const generateTabs = (number = 0): string => {
	let tabs = '\u{A0}\u{A0}';
	for (let index = 0; index < number; index++) {
		tabs += '\u{A0}';
	}

	return tabs;
};

export default generateTabs;
