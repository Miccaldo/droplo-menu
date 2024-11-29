import type { Config } from "tailwindcss";

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
        slate: {
          'primary': 'var(--text-color-primary)',
          'seconday': 'var(--text-color-seconday)',
          'accent': 'var(--text-color-accent)'
        },
        violet: {
          'light': '#D6BBFB',
          'normal': '#7F56D9',
          'dark': '#6941C6'
        },
        gray: {
          'light': '#D0D5DD'
        }
      },
      spacing: {
        '2.5': '0.625rem',
        '3.5': '0.875rem'
      }
    },
  },
  plugins: [],
} satisfies Config;
