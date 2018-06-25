import {darken} from 'polished';

export default {
  breakpoints: ['32rem', '48rem', '64rem', '80rem'],

  fonts: {
    // Make sure to remove unused fonts in <link /> once site is finished!
    sans: `"Lato", sans-serif`,
    serif: `"Lora", serif`,
    header: `"Roboto Condensed", sans-serif`,
    banner: `"Fredoka One", "Roboto Condensed", sans-serif`,
    title: `"Pacifico", sans-serif`
  },

  color: {
    beige: '#E0E4CC',
    black: '#363636',
    blue: 'lightskyblue',
    orange: 'orange',
    teal: darken(0.02, '#CEFCF0'),
    white: '#FFFFFF'
  },

  hover: {
    opacity: '0.75',
    transition: 'all 0.3s'
  },

  height: {
    header: 80,
    footer: 320,
    carousel: 550
  }
};
