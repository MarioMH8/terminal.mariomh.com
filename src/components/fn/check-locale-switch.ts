import includes from 'lodash/includes';

import LocaleCommand from '../commands/locale';

/**
 * Check current render makes redirect for locale
 * @param {boolean} rerender - is submitted or not
 * @param {string[]} currentCommand - current submitted command
 * @param {string[]} locales - the command of the function
 * @returns {boolean} redirect - true | false
 */
const checkLocaleSwitch = (
	rerender: boolean,
	currentCommand: string[],
	locales: string[]
): boolean =>
	rerender && // is submitted
	currentCommand[0] === LocaleCommand.command && // current command starts with 'locales'
	currentCommand[1] === 'set' && // first arg is 'set'
	currentCommand.length > 1 && // current command has arg
	currentCommand.length < 4 && // if num of arg is valid (not `locales set es-ES sth`)
	includes(locales, currentCommand[2]); // arg last part is one of id

export default checkLocaleSwitch;
