module.exports = {
  darkMode: 'media', // uses system theme
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        draw: 'dash 5s linear infinite',
      },
      keyframes: {
        dash: {
          '0%': { strokeDasharray: '0, 1000' },
          '100%': { strokeDasharray: '1000, 0' },
        },
      },
      colors: {
        lightBG: '#f5f5f5',
        darkBG: '#0b0b0b',
      },
    },
  },
  plugins: [],
};
