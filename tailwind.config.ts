import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        faded: '#F9FAFB',
        'footer-ui': '#f5f5f5',
        text: {
          'primary': 'var(--text-color-primary)',
          'seconday': 'var(--text-color-secondary)',
          'accent': 'var(--text-color-accent)'
        },
        violet: {
          'light': '#D6BBFB',
          'normal': '#7F56D9',
          'dark': '#6941C6'
        },
        gray: {
          'light': '#D0D5DD'
        },
        border: {
          primary: '#D0D5DD',
          secondary: '#EAECF0'
        }
      },
      spacing: {
        '2.5': '0.625rem',
        '3.5': '0.875rem'
      },
      boxShadow: {
        border: `0 0 0 1px ${colors.gray[300]}`,
        'border-error': `0 0 0 1px ${colors.red[300]}`
      },
      width: {
        'fit': 'fit-content'
      }
    },
  },
  plugins: [],
} satisfies Config;
