/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'Monaco', 'Cascadia Code', 'monospace'],
      },
      colors: {
        // Core System Colors
        'background': 'var(--color-background)', // white
        'foreground': 'var(--color-foreground)', // gray-900
        'border': 'var(--color-border)', // gray-200
        'input': 'var(--color-input)', // white
        'ring': 'var(--color-ring)', // blue-600
        
        // Card & Surface Colors
        'card': {
          DEFAULT: 'var(--color-card)', // white
          foreground: 'var(--color-card-foreground)' // gray-900
        },
        'popover': {
          DEFAULT: 'var(--color-popover)', // white
          foreground: 'var(--color-popover-foreground)' // gray-900
        },
        'surface': 'var(--color-surface)', // gray-50
        
        // Muted Colors
        'muted': {
          DEFAULT: 'var(--color-muted)', // gray-50
          foreground: 'var(--color-muted-foreground)' // gray-500
        },
        
        // Brand Primary Colors
        'primary': {
          DEFAULT: 'var(--color-primary)', // gray-900
          foreground: 'var(--color-primary-foreground)' // white
        },
        
        // Brand Secondary Colors
        'secondary': {
          DEFAULT: 'var(--color-secondary)', // gray-700
          foreground: 'var(--color-secondary-foreground)' // white
        },
        
        // Interactive Accent Colors
        'accent': {
          DEFAULT: 'var(--color-accent)', // blue-600
          foreground: 'var(--color-accent-foreground)' // white
        },
        
        // Status Colors
        'success': {
          DEFAULT: 'var(--color-success)', // green-500
          foreground: 'var(--color-success-foreground)' // white
        },
        'warning': {
          DEFAULT: 'var(--color-warning)', // orange-400
          foreground: 'var(--color-warning-foreground)' // white
        },
        'error': {
          DEFAULT: 'var(--color-error)', // red-500
          foreground: 'var(--color-error-foreground)' // white
        },
        'destructive': {
          DEFAULT: 'var(--color-destructive)', // red-500
          foreground: 'var(--color-destructive-foreground)' // white
        },
        
        // Text Hierarchy
        'text-primary': 'var(--color-text-primary)', // gray-700
        'text-secondary': 'var(--color-text-secondary)', // gray-500
        
        // Interactive States
        'hover': 'var(--color-hover)', // gray-50
        'active': 'var(--color-active)', // gray-100
        
        // Code & Technical
        'code-bg': 'var(--color-code-bg)', // gray-900
        'code-text': 'var(--color-code-text)', // gray-200
        'code-accent': 'var(--color-code-accent)', // blue-600
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'typewriter': 'typewriter 3s steps(40) 1s both',
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
      boxShadow: {
        'brand': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'brand-lg': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'brand-xl': '0 16px 48px rgba(0, 0, 0, 0.15)',
        'inner-brand': 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(300px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
      aspectRatio: {
        'golden': '1.618 / 1',
        'video': '16 / 9',
        'card': '4 / 3',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}