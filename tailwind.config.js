/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{tsx, ts, jsx, js}'];
export const theme = {
  extend: {
    colors: {
      //https://colorscheme.ru/#3c31Tw0w0w0w0
      primary: '#00A383',
      'primary-bold': '#1F7A68',
      secondary: '#5ED1BA',
      agree: '#006A55',
      warninng: '#FFA100',
      danger: '#F30021',
    },
  },
  screens: {
    sm: '640px',
    // => @media (min-width: 640px) { ... }

    md: '768px',
    // => @media (min-width: 768px) { ... }

    lg: '1024px',
    // => @media (min-width: 1024px) { ... }

    xl: '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
};
export const variants = {
  extend: {},
};
export const plugins = [];
