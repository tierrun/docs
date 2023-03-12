const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-dmSans)']
            },
            fontSize: {
                title: ['36px', '42px'],
                'title-md': ['20px', '24px'],
                'title-sm': ['16px', '24px'],
                body: ['16px', '24px'],
                caption: ['14px', '24px']
            }
        }
    },
    plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar')]
};
