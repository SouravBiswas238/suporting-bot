module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    // screens: {
    //   xsm: '300px',
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    // borderColor: {
    //   'border-light': '[#ddd]',


    // },
    // colors: {
    //   'primary-light': '[#F3F3F3]',
    //   'primary-dark': '[#0C1322]',

    //   'primary-black': '[#0D1425]',
    //   'primary-white': '[#fff]',
    //   'primary-blue': '[#3878DF]',
    //   'secondary-blue': '[#38BDF8]',


    // },

  },
  daisyui: {

  },
  plugins: [require("daisyui"),
  function ({ addVariant }) {
    addVariant('child', '& > *');
    addVariant('child-hover', '& > *:hover');
    addVariant('xs', '@media (max-width: 639px){}');

  }
  ],
}

// dark mode 