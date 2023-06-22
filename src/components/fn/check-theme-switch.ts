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
	rerender && // is submitted
	currentCommand[0] === ThemeCommand.command && // current command starts with 'themes'
	currentCommand[1] === 'set' && // first arg is 'set'
	currentCommand.length > 1 && // current command has arg
	currentCommand.length < 4 && // if num of arg is valid (not `themes set light sth`)
	includes(themes, currentCommand[2]); // arg last part is one of id

export default checkThemeSwitch;
