/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#141414',
      'lilac': '#CFC6EB',
      'yellow': '#FFEBAD',
      'green': '#D0FA93',
      'gray': '#F5F5F5',
      'background': '#F8F8F8',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    container: {
      padding: {
        DEFAULT: '1.25rem',
        md: '2rem',
        lg: '2rem',
        xl: '3.375rem',
      },
    },
    extend: {
      animation: {
        'ticker': 'ticker 8s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
    },
  },
  plugins: [],
}

