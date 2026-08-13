/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        secondaryBg: '#050505',
        neonBlue: '#00E5FF',
        neonPurple: '#8A2BE2',
        electricPink: '#FF2E88',
        textPrimary: '#FFFFFF',
        textMuted: '#A0AEC0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 10px rgba(0, 229, 255, 0.5), 0 0 20px rgba(0, 229, 255, 0.3)',
        'neon-purple': '0 0 10px rgba(138, 43, 226, 0.5), 0 0 20px rgba(138, 43, 226, 0.3)',
        'neon-cyan-heavy': '0 0 15px rgba(0, 229, 255, 0.6), 0 0 30px rgba(0, 229, 255, 0.4), inset 0 0 15px rgba(0, 229, 255, 0.2)',
        'neon-pink-heavy': '0 0 15px rgba(255, 46, 136, 0.6), 0 0 30px rgba(255, 46, 136, 0.4), inset 0 0 15px rgba(255, 46, 136, 0.2)',
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glitch: {
          '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
          '62%': { transform: 'translate(0,0) skew(5deg)' },
        }
      }
    },
  },
  plugins: [],
}
