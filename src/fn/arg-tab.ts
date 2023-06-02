import _ from 'lodash';
import React from 'react';

import theme from '../style/themes';

/**
 * Perform advanced tab actions
 * @param {string} inputVal - current input value
 * @param {(value: React.SetStateAction<string>) => void} setInputVal - setInputVal setState
 * @param {(value: React.SetStateAction<string[]>) => void} setHints - setHints setState
 * @param {hints} hints - hints command array
 * @returns {string[] | undefined} hints command or setState action(undefined)
 */
export const argTab = (
	inputVal: string,
	setInputVal: (value: React.SetStateAction<string>) => void,
	setHints: (value: React.SetStateAction<string[]>) => void,
	hints: string[]
): string[] | undefined => {
	let internalHints = hints;
	// 1) if input is 'themes '
	if (inputVal === 'themes ') {
		setInputVal(`themes set`);

		return [];
	}

	// 2) if input is 'themes s'
	if (
		_.startsWith('themes', _.split(inputVal, ' ')[0]) &&
		_.split(inputVal, ' ')[1] !== 'set' &&
		_.startsWith('set', _.split(inputVal, ' ')[1])
	) {
		setInputVal(`themes set`);

		return [];
	}

	// 3) if input is 'themes set '
	if (inputVal === 'themes set ') {
		setHints(_.keys(theme));

		return [];
	}

	// 4) if input starts with 'themes set ' + theme
	if (_.startsWith(inputVal, 'themes set ')) {
		_.keys(theme).forEach(t => {
			if (_.startsWith(t, _.split(inputVal, ' ')[2])) {
				internalHints = [...internalHints, t];
			}
		});

		return internalHints;
	}

	// 5) if input is 'projects' or 'socials'
	if (inputVal === 'projects ' || inputVal === 'socials ') {
		setInputVal(`${inputVal}go`);

		return [];
	}

	// 6) if input is 'projects g' or 'socials g'
	if (inputVal === 'projects g' || inputVal === 'socials g') {
		setInputVal(`${inputVal}o`);

		return [];
	}

	// 7) if input is 'socials go '
	if (_.startsWith(inputVal, 'socials go ')) {
		['1.Github', '2.Dev.to', '3.Facebook', '4.Instagram'].forEach(t => {
			internalHints = [...internalHints, t];
		});

		return internalHints;
	}

	// 8) if input is 'projects go '
	if (_.startsWith(inputVal, 'projects go ')) {
		["1.Sat Naing's Blog", '2.Haru Fashion', '3.Haru API', '4.AstroPaper Blog Theme'].forEach(
			t => {
				internalHints = [...internalHints, t];
			}
		);

		return internalHints;
	}

	return undefined;
};
