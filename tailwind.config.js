/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: '#F5F1EB',
        'dark-brown': '#3D2817',
        'light-pink': '#F4D1C6',
        'light-cream': '#FAF8F5',
        /* Felycity-style: dark blue, vibrant green, coral */
        surface: '#FFFFFF',
        'surface-warm': '#F5F5F5',
        charcoal: '#1E3A5F',
        navy: '#1E3A5F',
        'navy-light': '#2A4A6F',
        'warm-gray': '#6B7280',
        accent: '#22C55E',
        'accent-green': '#22C55E',
        coral: '#F4A896',
        'coral-light': '#FAD4CC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
      },
      maxWidth: {
        section: '75rem',
        prose: '65ch',
      },
      spacing: {
        section: '5rem',
        'section-sm': '3rem',
      },
      borderRadius: {
        card: '1rem',
        'card-lg': '1.25rem',
      },
      boxShadow: {
        card: '0 4px 20px rgba(45, 40, 37, 0.06)',
        'card-hover': '0 12px 40px rgba(45, 40, 37, 0.1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

