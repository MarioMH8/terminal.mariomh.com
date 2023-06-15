import split from 'lodash/split';

/**
 * Transform current cmd & arg into array
 * then return back the array
 * @param {string[]} history - The history array
 * @returns {string[]} array of cmd string
 */
export const getCurrentCmdArray = (history: string[]): string[] => split(history[0]?.trim(), ' ');
