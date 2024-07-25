/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'regular': ['Poppins-Regular', 'sans-serif'],
      'medium': ['Poppins-Medium', 'sans-serif'],
      'bold': ['Poppins-Bold', 'sans-serif'],
      'black': ['Poppins-Black', 'sans-serif'],
      'light': ['Poppins-Light', 'sans-serif'],
      'extraBold': ['Poppins-ExtraBold', 'sans-serif'],
      'thin': ['Poppins-Thin', 'sans-serif'],
    }
  },
  
  plugins: [],
}