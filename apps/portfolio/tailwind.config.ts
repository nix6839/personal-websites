import tailwindColors from 'tailwindcss/colors.js';
import defaultTheme from 'tailwindcss/defaultTheme.js';
import plugin from 'tailwindcss/plugin.js';

import type { Config } from 'tailwindcss';

const COLORS = {
  transparent: tailwindColors.transparent,
  zinc: tailwindColors.zinc,
  brand: '#b4ec94',
} as const;

const config = {
  content: ['./src/**/*.astro'],
  corePlugins: {
    preflight: false,
    wordBreak: false,
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

    fontWeight: {
      regular: '400',
      bold: '700',
    },

    backgroundColor: {
      transparent: COLORS.transparent,
      primary: {
        DEFAULT: COLORS.zinc['900'],
      },
      backdrop: 'rgb(0 0 0 / 0.4)',
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

      icon: {
        primary: {
          DEFAULT: COLORS.zinc['200'],
        },
        brand: {
          DEFAULT: COLORS.brand,
        },
      },
    },

    borderColor: {
      primary: {
        DEFAULT: COLORS.zinc['500'],
      },
    },

    spacing() {
      const spacings: Record<number, string> = {
        0: '0',
      };
      for (let i = 1; i <= 150; i += 1) {
        spacings[i] = `${i / 4}rem`;
      }
      return spacings;
    },
  },

  plugins: [
    plugin(({ addBase, addUtilities, theme }) => {
      // From https://tailwindcss.com/docs/preflight#border-styles-are-reset-globally
      addBase({
        '*, ::before, ::after': {
          borderWidth: '0',
          borderStyle: 'solid',
          borderColor: theme('borderColor.primary.DEFAULT'),
        },
      });

      addUtilities({
        '.scheme-dark': {
          colorScheme: 'dark',
        },

        '.break-normal': {
          wordBreak: 'normal',
          overflowWrap: 'normal',
        },
        '.break-all': {
          wordBreak: 'break-all',
        },
        '.break-keep': {
          wordBreak: 'keep-all',
        },
        '.break-overflow-word': {
          overflowWrap: 'break-word',
        },
        '.break-overflow-anywhere': {
          overflowWrap: 'anywhere',
        },
      });
    }),
  ],
} satisfies Config;

export default config;
