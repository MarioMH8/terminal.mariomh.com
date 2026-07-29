import ThemeCommand from '@commands/theme';
import includes from 'lodash/includes';

/**
 * Check current render makes redirect for theme
 * @param {boolean} isRerender - is submitted or not
 * @param {string[]} currentCommand - current submitted command
 * @param {string[]} themes - the command of the function
 * @returns {boolean} redirect - true | false
 */
const shouldThemeSwitch = (isRerender: boolean, currentCommand: string[], themes: string[]): boolean =>
	// Is submitted
	isRerender &&
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

export default shouldThemeSwitch;
