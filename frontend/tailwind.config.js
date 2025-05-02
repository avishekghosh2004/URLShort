export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#000',
          foreground: '#fff',
          primary: '#111',
          secondary: '#333',
          accent: '#0070f3',
        }
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
