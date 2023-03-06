const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        'src/**/*.{js,ts,jsx,tsx}'
        // include packages if not transpiling
        // "../../packages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brandblue: colors.blue[500],
                brandred: colors.red[500]
            }
        }
    },
    plugins: [require('@tailwindcss/typography')]
};
