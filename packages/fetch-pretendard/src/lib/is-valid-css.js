import { validate } from 'csstree-validator';

/**
 * @param {string} str
 * @returns {boolean}
 */
export default function isValidCSS(str) {
	const errors = validate(str);
	return errors.length === 0;
}
