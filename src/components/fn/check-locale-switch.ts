import LocaleCommand from '@commands/locale';
import includes from 'lodash/includes';

/**
 * Check current render makes redirect for locale
 * @param {boolean} rerender - is submitted or not
 * @param {string[]} currentCommand - current submitted command
 * @param {string[]} locales - the command of the function
 * @returns {boolean} redirect - true | false
 */
const checkLocaleSwitch = (rerender: boolean, currentCommand: string[], locales: string[]): boolean =>
	// Is submitted
	rerender &&
	// Current command starts with 'locales'
	currentCommand[0] === LocaleCommand.command &&
	// First arg is 'set'
	currentCommand[1] === 'set' &&
	// Current command has arg
	currentCommand.length > 1 &&
	// If num of arg is valid (not `locales set es-ES sth`)
	currentCommand.length < 4 &&
	// Arg last part is one of id
	includes(locales, currentCommand[2]);

export default checkLocaleSwitch;
