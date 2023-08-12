import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          100: '#f7f1ff',
          200: '#e9d9ff',
          300: '#dabfff',
          title: "#524e77",
        },
        yellow: {
          100: '#fef6ef',
          200: '#ffe4cc',
          300: '#ffd6b3',
          title: "#826245",
        },
        blue: {
          100: '#e6f4ff',
          200: '#bfe3ff',
          300: '#99d1ff',
          900: '#2d3748',
          title: "#0f4670",
        },
        green: {
          100: '#def5f7',
          200: '#aaecf2',
          300: '#5fd6e9',
          title: "#2c5255",
        },
        pink: {
          100: '#fff2f6',
          200: '#ffd9e4',
          300: '#ffbfd2',
          title: '#824955',
        },
        gray: {
          100: '#f2f7fa',
          200: '#e2e8f0',
          250: '#edf2f7',
          300: '#cbd5e0',
          title: '#505b6d',
        },
        accent: "#2a66d2",
        borders: "#e3e9f1",
        strong: '#2d3748',
        background: '#fff',
      },
      borderRadius: {
        'custom11': '11px',
        'custom14': '14px',
        'custom18': '18px',
      },
      fontSize: {
        'custom-sm': ['0.625rem', '0.875rem'],
        'custom-3xl': ['1.625rem', '2.125rem'],
      }
    },
  },
  plugins: [],
}
export default config
