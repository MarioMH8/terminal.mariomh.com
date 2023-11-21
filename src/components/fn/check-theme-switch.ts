import includes from 'lodash/includes';

import ThemeCommand from '../commands/theme';

/**
 * Check current render makes redirect for theme
 * @param {boolean} rerender - is submitted or not
 * @param {string[]} currentCommand - current submitted command
 * @param {string[]} themes - the command of the function
 * @returns {boolean} redirect - true | false
 */
const checkThemeSwitch = (rerender: boolean, currentCommand: string[], themes: string[]): boolean =>
	// Is submitted
	rerender &&
	// Current command starts with 'themes'
	currentCommand[0] === ThemeCommand.command &&
	// First arg is 'set'
	currentCommand[1] === 'set' &&
	// Current command has arg
	currentCommand.length > 1 &&
	// If num of arg is valid (not `themes set light sth`)
	currentCommand.length < 4 &&
	// Arg last part is one of id
	includes(themes, currentCommand[2]);

export default checkThemeSwitch;
