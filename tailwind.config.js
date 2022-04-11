module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontFamily: {
    },
    extend: {
      colors: {
      },
      backgroundImage: {
      },
      boxShadow: {
      },
      lineHeight: {
      },
      gridTemplateRows: {
      },
      gridRow: {
      }
    },
    screens: {
      mobile: '160px',
      tablet: '500px',
      ipad: '925px',
      desktop: '1170px',
    },
  },
  variants: {
    extend: {
      fontFamily: ['hover', 'focus'],
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
    translate: true,
    transform: true,
    stroke: true,
  },
};
