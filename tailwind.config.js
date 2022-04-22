const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
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
      orbitron: ['Orbitron', 'sans-serif'],
      inter: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        'yellow': '#FBEC37',
        'blue': '#8CFFB3'
      },
      backgroundImage: {
        'home': 'url("/images/bg-home.jpg")',
        'mint-mobile': 'url("/images/bg-mint-mobile.png")',
        'mint': 'url("/images/bg-mint.png")',
        'faq': 'url("/images/bg-faq.jpg")',
        'about': 'url("/images/bg-about.jpg")',
        'roadmap': 'url("/images/bg-roadmap.jpg")',
        'team': 'url("/images/bg-team.jpg")',
        'community': 'url("/images/bg-community.jpg")',

        'pentagon-black': 'url("/images/pentagon-black.png")',
        'pentagon-black-long': 'url("/images/pentagon-black-long.png")',
        'pentagon-red': 'url("/images/pentagon-red.png")',
        'pentagon-yellow': 'url("/images/pentagon-yellow.png")',
        'pentagon-yellow-r': 'url("/images/pentagon-yellow-r.png")',
        'pentagon-white': 'url("/images/pentagon-white.png")',
        'pentagon-white-r': 'url("/images/pentagon-white-r.png")',
        
        'diamond': 'url("/images/diamond.svg")',
        
        'qabox': 'url("/images/faq-box.png")',
      },
      boxShadow: {
        'navbar': '0px 6px 10px rgba(0, 0, 0, 0.25)',
      },
      lineHeight: {
        hero: '4.5rem',
      },
      gridTemplateRows: {
      },
      gridRow: {
      }
    },
    screens: {
      mobile: '160px',
      tablet: '500px',
      miniipad: '768px',
      ipad: '925px',
      desktop: '1170px',
    },
  },
  variants: {
    extend: {
      fontFamily: ['hover', 'focus'],
    },
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
    plugin(({addUtilities}) => {
      const newUtilities = {
        ".empty-content": {
          content: "''",
        },
      }
      addUtilities(newUtilities, {
        variants: ["before", "after"],
      });
    })
  ],
  corePlugins: {
    fontFamily: true,
    translate: true,
    transform: true,
    stroke: true,
  },
};
