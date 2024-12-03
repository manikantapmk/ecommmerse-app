/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors
        primary: {
          light: "#232f3e",
          dark: '#0f1111',
        },  // Custom color named "primary"
        secondary: '#febd69',  // Custom color named "secondary"
        secondary_dark: '#e78405',  // Custom color named "secondary"
        link: '#246FB6',  // Custom color named "danger"
        hover: '#f3a847',  // Custom color named "danger"
      },
    },
    container: {
      center: true, // This will center the container horizontally
      // padding: '2rem', 
      screens: {
        sm: '100%', // Full width on small screens
        md: '768px', // Medium size container width at 768px breakpoint
        lg: '1024px', // Large container width at 1024px breakpoint
        xl: '1460px', // Extra-large container width at 1280px breakpoint
      },
    },
  },
  plugins: [],
}