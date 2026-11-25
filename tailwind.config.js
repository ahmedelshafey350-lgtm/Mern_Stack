const v = (n) => `rgb(var(--${n}) / <alpha-value>)`
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { bg: v('bg'), surface: v('surface'), fg: v('fg'), muted: v('muted'),
        accent: v('accent'), olive: v('olive'), 'on-accent': v('on-accent') },
      fontFamily: { display: ['Fraunces', 'Georgia', 'serif'], sans: ['DM Sans', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
