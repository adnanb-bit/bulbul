import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E05A4F',
        secondary: '#7BAF7F',
        accent: '#F2C94C',
        background: '#FFFAF3',
        surface: '#FFFFFF',
        'text-primary': '#2B2B2B',
        'text-secondary': '#6B6B6B',
      },
      fontFamily: {
        logo: ['Pacifico', 'cursive'],
        heading: ['Nunito', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 25px rgba(0, 0, 0, 0.08)',
        'large': '0 10px 40px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
