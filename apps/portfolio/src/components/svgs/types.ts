import type { HTMLAttributes } from 'astro/types';

export interface IconProps extends Omit<HTMLAttributes<'svg'>, 'viewBox'> {
  width: string | number;
  height: string | number;
}
