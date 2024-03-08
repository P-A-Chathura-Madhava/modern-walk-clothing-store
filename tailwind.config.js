/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    boxShadow: {
      '3xl': '6px 10px 21px -6px rgba(0,0,0,0.75)',
    },
  },
};
export const plugins = [
  require('@tailwindcss/line-clamp')
];

