import tailwindColors from 'tailwindcss/colors.js';

import type { Config } from 'tailwindcss';

const COLORS = {
  ...tailwindColors,
  brand: '#b4ec94',
} as const;

const config = {
  content: ['./src/**/*.astro'],
  corePlugins: {
    preflight: false,
  },

  theme: {
    backgroundColor: {
      primary: {
        DEFAULT: COLORS.zinc['900'],
      },
    },

    textColor: {
      brand: {
        DEFAULT: COLORS.brand,
      },
      primary: {
        DEFAULT: COLORS.zinc['100'],
        hover: COLORS.zinc['300'],
        pressed: COLORS.zinc['400'],
      },
      secondary: {
        DEFAULT: COLORS.zinc['200'],
      },
      tertiary: {
        DEFAULT: COLORS.zinc['300'],
      },
    },

    borderColor: {
      primary: {
        DEFAULT: COLORS.zinc['500'],
      },
    },

    fill: {
      icon: {
        primary: {
          DEFAULT: COLORS.zinc['200'],
        },
      },
    },
  },
} satisfies Config;

export default config;
