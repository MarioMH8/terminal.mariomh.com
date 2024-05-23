import includes from 'lodash/includes';

/**
 * Check arg is invalid
 * @param {string[]} argument - The arg array
 * @param {string} action - The action to compare | "go" | "set"
 * @param {string[]} options - Option array to compare | "dark" | "1"
 * @returns {boolean} boolean
 */
const isArgumentInvalid = (argument: string[], action: string, options: string[]): boolean =>
	argument[0] !== action || !includes(options, argument[1]) || argument.length > 2;

export default isArgumentInvalid;
