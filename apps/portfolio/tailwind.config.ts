import tailwindColors from 'tailwindcss/colors.js';
import defaultTheme from 'tailwindcss/defaultTheme.js';

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
    fontFamily: {
      default: [
        '"Pretendard Variable"',
        'Pretendard',
        '-apple-system',
        'BlinkMacSystemFont',
        'system-ui',
        'Roboto',
        '"Helvetica Neue"',
        '"Segoe UI"',
        '"Apple SD Gothic Neo"',
        '"Noto Sans KR"',
        '"Malgun Gothic"',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        'sans-serif',
      ],
      mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
    },

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
