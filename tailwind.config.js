const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./{src,mdx}/**/*.{js,mjs,jsx,mdx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      '2xs': ['0.75rem', { lineHeight: '1.25rem' }],
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    typography: require('./typography'),
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        display: ['var(--font-dmSans)', ...fontFamily.sans],
      },
      boxShadow: {
        glow: '0 0 4px rgb(0 0 0 / 0.1)',
      },
      maxWidth: {
        lg: '33rem',
        '2xl': '40rem',
        '3xl': '50rem',
        '5xl': '66rem',
      },
      opacity: {
        1: '0.01',
        2.5: '0.025',
        7.5: '0.075',
        15: '0.15',
      },
      colors: {
        l: {
          slate: {
            1: 'hsl(206, 30.0%, 98.8%)',
            2: 'hsl(210, 16.7%, 97.6%)',
            3: 'hsl(209, 13.3%, 95.3%)',
            4: 'hsl(209, 12.2%, 93.2%)',
            5: 'hsl(208, 11.7%, 91.1%)',
            6: 'hsl(208, 11.3%, 88.9%)',
            7: 'hsl(207, 11.1%, 85.9%)',
            8: 'hsl(205, 10.7%, 78.0%)',
            9: 'hsl(206, 6.0%, 56.1%)',
            10: 'hsl(206, 5.8%, 52.3%)',
            11: 'hsl(206, 6.0%, 43.5%)',
            12: 'hsl(206, 24.0%, 9.0%)',
            alpha: {
              1: 'hsla(210, 92.6%, 26.5%, 0.016)',
              2: 'hsla(210, 87.7%, 16.0%, 0.028)',
              3: 'hsla(210, 98.8%, 14.4%, 0.055)',
              4: 'hsla(210, 94.1%, 11.1%, 0.075)',
              5: 'hsla(216, 91.1%, 10.9%, 0.099)',
              6: 'hsla(206, 96.4%, 11.3%, 0.126)',
              7: 'hsla(210, 99.1%, 10.1%, 0.157)',
              8: 'hsla(205, 96.5%, 10.0%, 0.244)',
              9: 'hsla(206, 98.8%, 5.9%, 0.467)',
              10: 'hsla(206, 99.6%, 5.4%, 0.506)',
              11: 'hsla(206, 97.0%, 4.8%, 0.593)',
              12: 'hsla(202, 97.0%, 2.4%, 0.934)',
            },
          },
          blue: {
            1: 'hsl(206, 100%, 99.2%)',
            2: 'hsl(210, 100%, 98.0%)',
            3: 'hsl(209, 100%, 96.5%)',
            4: 'hsl(210, 98.8%, 94.0%)',
            5: 'hsl(209, 95.0%, 90.1%)',
            6: 'hsl(209, 81.2%, 84.5%)',
            7: 'hsl(208, 77.5%, 76.9%)',
            8: 'hsl(206, 81.9%, 65.3%)',
            9: 'hsl(206, 100%, 50.0%)',
            10: 'hsl(208, 100%, 47.3%)',
            11: 'hsl(211, 100%, 43.2%)',
            12: 'hsl(211, 100%, 15.0%)',
            alpha: {
              1: 'hsla(210, 100%, 51.0%, 0.016)',
              2: 'hsla(210, 100%, 51.0%, 0.040)',
              3: 'hsla(210, 100%, 50.3%, 0.071)',
              4: 'hsla(210, 100%, 50.1%, 0.118)',
              5: 'hsla(208, 99.1%, 47.1%, 0.189)',
              6: 'hsla(209, 99.5%, 45.3%, 0.283)',
              7: 'hsla(208, 99.9%, 43.8%, 0.412)',
              8: 'hsla(206, 99.8%, 45.1%, 0.632)',
              9: 'hsla(206, 100%, 50.0%, 0.980)',
              10: 'hsla(208, 100%, 47.2%, 0.980)',
              11: 'hsla(212, 100%, 43.0%, 0.980)',
              12: 'hsla(213, 100%, 14.4%, 0.980)',
            },
          },
          crimson: {
            1: 'hsl(332, 100%, 99.4%)',
            2: 'hsl(330, 100%, 98.4%)',
            3: 'hsl(331, 85.6%, 96.6%)',
            4: 'hsl(331, 78.1%, 94.2%)',
            5: 'hsl(332, 72.1%, 91.1%)',
            6: 'hsl(333, 67.0%, 86.7%)',
            7: 'hsl(335, 63.5%, 80.4%)',
            8: 'hsl(336, 62.3%, 72.9%)',
            9: 'hsl(336, 80.0%, 57.8%)',
            10: 'hsl(336, 73.7%, 53.5%)',
            11: 'hsl(336, 75.0%, 47.2%)',
            12: 'hsl(340, 65.0%, 14.5%)',
            alpha: {
              1: 'hsla(340, 100%, 51.0%, 0.012)',
              2: 'hsla(330, 100%, 51.0%, 0.032)',
              3: 'hsla(332, 99.1%, 47.1%, 0.063)',
              4: 'hsla(331, 99.9%, 44.3%, 0.102)',
              5: 'hsla(333, 99.9%, 42.3%, 0.153)',
              6: 'hsla(333, 99.5%, 40.5%, 0.224)',
              7: 'hsla(335, 99.7%, 39.1%, 0.322)',
              8: 'hsla(336, 99.5%, 38.5%, 0.440)',
              9: 'hsla(336, 99.9%, 44.3%, 0.761)',
              10: 'hsla(336, 100%, 42.5%, 0.808)',
              11: 'hsla(336, 99.8%, 40.3%, 0.883)',
              12: 'hsla(340, 99.0%, 10.0%, 0.950)',
            },
          },
          grass: {
            1: 'hsl(116, 50.0%, 98.9%)',
            2: 'hsl(120, 60.0%, 97.1%)',
            3: 'hsl(120, 53.6%, 94.8%)',
            4: 'hsl(121, 47.5%, 91.4%)',
            5: 'hsl(122, 42.6%, 86.5%)',
            6: 'hsl(124, 39.0%, 79.7%)',
            7: 'hsl(126, 37.1%, 70.2%)',
            8: 'hsl(131, 38.1%, 56.3%)',
            9: 'hsl(131, 41.0%, 46.5%)',
            10: 'hsl(132, 43.1%, 42.2%)',
            11: 'hsl(133, 50.0%, 32.5%)',
            12: 'hsl(130, 30.0%, 14.9%)',
            alpha: {
              1: 'hsla(120, 94.9%, 38.7%, 0.016)',
              2: 'hsla(120, 94.9%, 38.7%, 0.048)',
              3: 'hsla(120, 98.0%, 35.5%, 0.079)',
              4: 'hsla(120, 98.7%, 31.5%, 0.126)',
              5: 'hsla(122, 98.5%, 29.9%, 0.193)',
              6: 'hsla(125, 99.2%, 27.9%, 0.283)',
              7: 'hsla(125, 99.9%, 27.0%, 0.408)',
              8: 'hsla(131, 100%, 27.6%, 0.604)',
              9: 'hsla(131, 99.7%, 26.3%, 0.726)',
              10: 'hsla(132, 99.9%, 24.0%, 0.761)',
              11: 'hsla(133, 99.5%, 19.5%, 0.840)',
              12: 'hsla(128, 98.0%, 4.9%, 0.895)',
            },
          },
          violet: {
            1: 'hsl(255, 65.0%, 99.4%)',
            2: 'hsl(252, 100%, 99.0%)',
            3: 'hsl(252, 96.9%, 97.4%)',
            4: 'hsl(252, 91.5%, 95.5%)',
            5: 'hsl(252, 85.1%, 93.0%)',
            6: 'hsl(252, 77.8%, 89.4%)',
            7: 'hsl(252, 71.0%, 83.7%)',
            8: 'hsl(252, 68.6%, 76.3%)',
            9: 'hsl(252, 56.0%, 57.5%)',
            10: 'hsl(251, 48.1%, 53.5%)',
            11: 'hsl(250, 43.0%, 48.0%)',
            12: 'hsl(254, 60.0%, 18.5%)',
            alpha: {
              1: 'hsla(270, 94.3%, 34.6%, 0.012)',
              2: 'hsla(252, 100%, 51.0%, 0.020)',
              3: 'hsla(254, 100%, 50.0%, 0.051)',
              4: 'hsla(251, 98.3%, 48.2%, 0.087)',
              5: 'hsla(252, 99.0%, 45.7%, 0.130)',
              6: 'hsla(251, 99.1%, 44.0%, 0.189)',
              7: 'hsla(252, 99.5%, 41.7%, 0.279)',
              8: 'hsla(252, 100%, 40.7%, 0.400)',
              9: 'hsla(252, 99.9%, 35.8%, 0.663)',
              10: 'hsla(251, 99.6%, 32.5%, 0.691)',
              11: 'hsla(250, 99.8%, 28.4%, 0.726)',
              12: 'hsla(254, 99.5%, 11.9%, 0.926)',
            },
          },
          amber: {
            1: 'hsl(39, 70.0%, 99.0%)',
            2: 'hsl(40, 100%, 96.5%)',
            3: 'hsl(44, 100%, 91.7%)',
            4: 'hsl(43, 100%, 86.8%)',
            5: 'hsl(42, 100%, 81.8%)',
            6: 'hsl(38, 99.7%, 76.3%)',
            7: 'hsl(36, 86.1%, 67.1%)',
            8: 'hsl(35, 85.2%, 55.1%)',
            9: 'hsl(39, 100%, 57.0%)',
            10: 'hsl(35, 100%, 55.5%)',
            11: 'hsl(30, 100%, 34.0%)',
            12: 'hsl(20, 80.0%, 17.0%)',
            alpha: {
              1: 'hsla(40, 94.9%, 38.7%, 0.016)',
              2: 'hsla(40, 100%, 50.3%, 0.071)',
              3: 'hsla(44, 100%, 50.1%, 0.165)',
              4: 'hsla(43, 100%, 50.0%, 0.263)',
              5: 'hsla(42, 100%, 50.0%, 0.365)',
              6: 'hsla(38, 100%, 50.1%, 0.475)',
              7: 'hsla(36, 99.9%, 46.2%, 0.612)',
              8: 'hsla(35, 99.8%, 46.0%, 0.832)',
              9: 'hsla(39, 100%, 50.0%, 0.859)',
              10: 'hsla(35, 100%, 50.0%, 0.891)',
              11: 'hsla(29, 100%, 33.6%, 0.980)',
              12: 'hsla(20, 99.8%, 14.1%, 0.965)',
            },
          },
        },
        d: {
          slate: {
            1: 'hsl(200, 7.0%, 8.8%)',
            2: 'hsl(195, 7.1%, 11.0%)',
            3: 'hsl(197, 6.8%, 13.6%)',
            4: 'hsl(198, 6.6%, 15.8%)',
            5: 'hsl(199, 6.4%, 17.9%)',
            6: 'hsl(201, 6.2%, 20.5%)',
            7: 'hsl(203, 6.0%, 24.3%)',
            8: 'hsl(207, 5.6%, 31.6%)',
            9: 'hsl(206, 6.0%, 43.9%)',
            10: 'hsl(206, 5.2%, 49.5%)',
            11: 'hsl(206, 6.0%, 63.0%)',
            12: 'hsl(210, 6.0%, 93.0%)',
            alpha: {
              1: 'hsla(0, 0%, 0%, 0)',
              2: 'hsla(181, 98.9%, 91.8%, 0.026)',
              3: 'hsla(182, 86.7%, 91.4%, 0.057)',
              4: 'hsla(209, 86.7%, 93.9%, 0.083)',
              5: 'hsla(200, 90.3%, 93.4%, 0.109)',
              6: 'hsla(209, 95.3%, 93.5%, 0.139)',
              7: 'hsla(204, 98.5%, 93.9%, 0.182)',
              8: 'hsla(209, 94.0%, 94.7%, 0.265)',
              9: 'hsla(207, 97.3%, 94.0%, 0.412)',
              10: 'hsla(209, 99.4%, 95.2%, 0.472)',
              11: 'hsla(208, 98.7%, 96.8%, 0.615)',
              12: 'hsla(211, 86.7%, 99.6%, 0.927)',
            },
          },
          blue: {
            1: 'hsl(212, 35.0%, 9.2%)',
            2: 'hsl(216, 50.0%, 11.8%)',
            3: 'hsl(214, 59.4%, 15.3%)',
            4: 'hsl(214, 65.8%, 17.9%)',
            5: 'hsl(213, 71.2%, 20.2%)',
            6: 'hsl(212, 77.4%, 23.1%)',
            7: 'hsl(211, 85.1%, 27.4%)',
            8: 'hsl(211, 89.7%, 34.1%)',
            9: 'hsl(206, 100%, 50.0%)',
            10: 'hsl(209, 100%, 60.6%)',
            11: 'hsl(210, 100%, 66.1%)',
            12: 'hsl(206, 98.0%, 95.8%)',
            alpha: {
              1: 'hsla(0, 0%, 0%, 0)',
              2: 'hsla(221, 97.8%, 52.4%, 0.059)',
              3: 'hsla(215, 99.3%, 54.2%, 0.135)',
              4: 'hsla(215, 99.3%, 53.8%, 0.198)',
              5: 'hsla(213, 99.4%, 52.8%, 0.252)',
              6: 'hsla(212, 99.9%, 51.7%, 0.323)',
              7: 'hsla(211, 100%, 50.7%, 0.435)',
              8: 'hsla(211, 99.8%, 50.9%, 0.597)',
              9: 'hsla(205, 100%, 50.0%, 0.980)',
              10: 'hsla(208, 100%, 60.7%, 0.980)',
              11: 'hsla(209, 100%, 66.3%, 0.980)',
              12: 'hsla(196, 100%, 96.8%, 0.980)',
            },
          },
          crimson: {
            1: 'hsl(335, 20.0%, 9.6%)',
            2: 'hsl(335, 32.2%, 11.6%)',
            3: 'hsl(335, 42.5%, 16.5%)',
            4: 'hsl(335, 47.2%, 19.3%)',
            5: 'hsl(335, 50.9%, 21.8%)',
            6: 'hsl(335, 55.7%, 25.3%)',
            7: 'hsl(336, 62.9%, 30.8%)',
            8: 'hsl(336, 74.9%, 39.0%)',
            9: 'hsl(336, 80.0%, 57.8%)',
            10: 'hsl(339, 84.1%, 62.6%)',
            11: 'hsl(341, 90.0%, 67.3%)',
            12: 'hsl(332, 87.0%, 96.0%)',
            alpha: {
              1: 'hsla(0, 0%, 0%, 0)',
              2: 'hsla(336, 96.8%, 53.2%, 0.045)',
              3: 'hsla(335, 98.7%, 59.3%, 0.138)',
              4: 'hsla(336, 99.1%, 59.9%, 0.191)',
              5: 'hsla(335, 99.4%, 59.4%, 0.244)',
              6: 'hsla(335, 99.4%, 59.4%, 0.315)',
              7: 'hsla(336, 99.5%, 57.8%, 0.439)',
              8: 'hsla(336, 99.9%, 55.4%, 0.642)',
              9: 'hsla(336, 99.9%, 62.8%, 0.903)',
              10: 'hsla(339, 99.9%, 66.3%, 0.934)',
              11: 'hsla(341, 99.9%, 69.5%, 0.965)',
              12: 'hsla(327, 100%, 97.1%, 0.980)',
            },
          },
          grass: {
            1: 'hsl(146, 30.0%, 7.4%)',
            2: 'hsl(136, 33.3%, 8.8%)',
            3: 'hsl(137, 36.0%, 11.4%)',
            4: 'hsl(137, 37.6%, 13.7%)',
            5: 'hsl(136, 38.7%, 16.0%)',
            6: 'hsl(135, 39.6%, 19.1%)',
            7: 'hsl(134, 40.3%, 23.8%)',
            8: 'hsl(131, 40.1%, 30.8%)',
            9: 'hsl(131, 41.0%, 46.5%)',
            10: 'hsl(131, 39.0%, 52.1%)',
            11: 'hsl(131, 43.0%, 57.2%)',
            12: 'hsl(137, 72.0%, 94.0%)',
            alpha: {
              1: 'hsla(0, 0%, 0%, 0)',
              2: 'hsla(107, 97.2%, 61.9%, 0.022)',
              3: 'hsla(128, 96.5%, 69.8%, 0.066)',
              4: 'hsla(130, 100%, 70.2%, 0.100)',
              5: 'hsla(130, 98.2%, 69.1%, 0.140)',
              6: 'hsla(132, 99.9%, 69.3%, 0.187)',
              7: 'hsla(132, 99.9%, 69.8%, 0.261)',
              8: 'hsla(130, 99.6%, 70.5%, 0.370)',
              9: 'hsla(130, 99.7%, 70.6%, 0.618)',
              10: 'hsla(131, 100%, 73.5%, 0.674)',
              11: 'hsla(130, 99.7%, 75.6%, 0.731)',
              12: 'hsla(137, 100%, 95.8%, 0.980)',
            },
          },
          violet: {
            1: 'hsl(250, 20.0%, 10.2%)',
            2: 'hsl(255, 30.3%, 12.9%)',
            3: 'hsl(253, 37.0%, 18.4%)',
            4: 'hsl(252, 40.1%, 22.5%)',
            5: 'hsl(252, 42.2%, 26.2%)',
            6: 'hsl(251, 44.3%, 31.1%)',
            7: 'hsl(250, 46.8%, 38.9%)',
            8: 'hsl(250, 51.8%, 51.2%)',
            9: 'hsl(252, 56.0%, 57.5%)',
            10: 'hsl(251, 63.2%, 63.2%)',
            11: 'hsl(250, 95.0%, 76.8%)',
            12: 'hsl(252, 87.0%, 96.4%)',
            alpha: {
              1: 'hsla(0, 0%, 0%, 0)',
              2: 'hsla(258, 98.2%, 61.0%, 0.054)',
              3: 'hsla(252, 98.8%, 65.8%, 0.148)',
              4: 'hsla(253, 99.7%, 65.7%, 0.219)',
              5: 'hsla(252, 99.7%, 66.4%, 0.286)',
              6: 'hsla(251, 99.7%, 66.2%, 0.371)',
              7: 'hsla(250, 99.7%, 66.3%, 0.514)',
              8: 'hsla(250, 99.7%, 66.1%, 0.733)',
              9: 'hsla(252, 99.9%, 70.3%, 0.786)',
              10: 'hsla(251, 99.9%, 72.9%, 0.844)',
              11: 'hsla(250, 100%, 77.9%, 0.980)',
              12: 'hsla(254, 100%, 97.5%, 0.980)',
            },
          },
          amber: {
            1: 'hsl(36, 100%, 6.1%)',
            2: 'hsl(35, 100%, 7.6%)',
            3: 'hsl(32, 100%, 10.2%)',
            4: 'hsl(32, 100%, 12.4%)',
            5: 'hsl(33, 100%, 14.6%)',
            6: 'hsl(35, 100%, 17.1%)',
            7: 'hsl(35, 91.0%, 21.6%)',
            8: 'hsl(36, 100%, 25.5%)',
            9: 'hsl(39, 100%, 57.0%)',
            10: 'hsl(43, 100%, 64.0%)',
            11: 'hsl(39, 90.0%, 49.8%)',
            12: 'hsl(39, 97.0%, 93.2%)',
            alpha: {
              1: 'hsla(0, 0%, 0%, 0)',
              2: 'hsla(31, 100%, 49.7%, 0.036)',
              3: 'hsla(27, 100%, 49.9%, 0.094)',
              4: 'hsla(29, 100%, 50.0%, 0.143)',
              5: 'hsla(31, 100%, 50.0%, 0.192)',
              6: 'hsla(35, 100%, 50.0%, 0.250)',
              7: 'hsla(34, 99.6%, 52.9%, 0.331)',
              8: 'hsla(36, 100%, 50.0%, 0.442)',
              9: 'hsla(40, 100%, 57.2%, 0.980)',
              10: 'hsla(44, 100%, 64.2%, 0.980)',
              11: 'hsla(39, 99.9%, 52.7%, 0.938)',
              12: 'hsla(45, 100%, 94.2%, 0.980)',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addVariant }) {
      addVariant('scrollbar', '&::-webkit-scrollbar')
      addVariant('scrollbar-track', '&::-webkit-scrollbar-track')
      addVariant('scrollbar-thumb', '&::-webkit-scrollbar-thumb')
    },
  ],
}
