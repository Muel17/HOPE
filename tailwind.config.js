/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        background: {
          DEFAULT: '#0a0a0a',
          secondary: '#1a1a2e',
        },
        foreground: {
          DEFAULT: '#ffffff',
          muted: '#a1a1aa',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'parallax': 'parallax 20s linear infinite',
        'star-twinkle': 'star-twinkle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 5px #0ea5e9, 0 0 10px #0ea5e9, 0 0 15px #0ea5e9' },
          '100%': { textShadow: '0 0 10px #0ea5e9, 0 0 20px #0ea5e9, 0 0 30px #0ea5e9' },
        },
        parallax: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'star-twinkle': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'night-sky': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      }
    },
  },
  plugins: [],
}