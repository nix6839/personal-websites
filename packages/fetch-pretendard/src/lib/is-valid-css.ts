import { validate } from 'csstree-validator';

export default function isValidCSS(str: string): boolean {
  const errors = validate(str);
  return errors.length === 0;
}
