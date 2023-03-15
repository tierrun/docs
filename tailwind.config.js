const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        typography: require('./tier-style'),
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
    plugins: [
        require('@tailwindcss/typography'),
        function ({addVariant}) {
            addVariant('supports-backdrop-blur', '@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))');
            addVariant('supports-scrollbars', '@supports selector(::-webkit-scrollbar)');
            addVariant('children', '& > *');
            addVariant('scrollbar', '&::-webkit-scrollbar');
            addVariant('scrollbar-track', '&::-webkit-scrollbar-track');
            addVariant('scrollbar-thumb', '&::-webkit-scrollbar-thumb');
        }
    ]
};
