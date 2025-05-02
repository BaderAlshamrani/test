import { defineConfig } from 'vite';
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brandWhite: '#FFFFFF',
        brandGreen: '#116E37',
        brandBrown: '#8B5A2B',
        brandGray: '#F7F7F7'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans‑serif']
      },
      borderRadius: {
        card: '12px'
      },
      boxShadow: {
        card: '0 4px 12px rgba(0,0,0,0.06)'
      }
    },
  },
  plugins: [],
};
