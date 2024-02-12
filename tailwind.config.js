/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    fontFamily: {
      jomhuria: ['Jomhuria', 'sans-serif', 'ui-sans-serif', 'system-ui'],
    },
    extend: {
      backgroundImage: {
        'conic-gradient-progress-bar':
          'conic-gradient(#F52B38 var(--progress-deg), #FFDAD5 0deg)',
      },
      colors: {
        rose: {
          150: '#FFDAD5',
        },
        stone: {
          650: '#775652',
          750: '#534341',
        },
        slate: {
          650: '#545F71',
        },
        red: {
          550: '#F52B38',
        },
      },
      height: {
        18: '4.5rem',
        166: '41.5rem',
      },
      width: {
        18: '4.5rem',
        172: '43rem',
        119: '29.5rem',
      },
    },
  },
  plugins: [],
};
