/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E5E8ED',
          100: '#C2CAD3',
          200: '#9EAABA',
          300: '#7A8AA0',
          400: '#566A86',
          500: '#324A6C',
          600: '#002147', // Deep Blue
          700: '#001A39',
          800: '#00142B',
          900: '#000D1D',
        },
        gold: {
          50: '#FBF7E8',
          100: '#F5EBC6',
          200: '#EEDFA4',
          300: '#E7D382',
          400: '#E0C760',
          500: '#D4AF37', // Gold
          600: '#B28F2D',
          700: '#8F7324',
          800: '#6C571B',
          900: '#493B12',
        },
        charcoal: {
          50: '#E9E9EA',
          100: '#C8C9CB',
          200: '#A7A8AB',
          300: '#86878B',
          400: '#65666B',
          500: '#44454B',
          600: '#33343A', // Charcoal Gray
          700: '#292A2F',
          800: '#1F2024',
          900: '#15161A',
        }
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      height: {
        'screen-90': '90vh',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 10px 30px rgba(0, 0, 0, 0.12)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
};