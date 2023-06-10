import includes from 'lodash/includes';

/**
 * Check arg is valid
 * @param {string[]} arg - The arg array
 * @param {string} action - The action to compare | "go" | "set"
 * @param {string[]} options - Option array to compare | "dark" | "1"
 * @returns {boolean} boolean
 */
export const isArgInvalid = (arg: string[], action: string, options: string[]): boolean =>
	arg[0] !== action || !includes(options, arg[1]) || arg.length > 2;
