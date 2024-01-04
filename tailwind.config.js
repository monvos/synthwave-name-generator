/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '4xl': [
          '5px 5px 0 #fff',
          '-5px -5px 0 #fff'
        ],
        '80': [
          '-1px 1px 0 #fc2fbd',
          '-1px 1px 0 #fc2fbd',
          '-1px 1px 0 #fc2fbd',
          '-1px 1px 0 #fc2fbd',
          '-1px 1px 0 #2de2e6',
          '1px -1px 0 #2de2e6',
          '1px 1px 0 #2de2e6',
          '-1px -1px 0 #2de2e6',
          '0px 0px 20px rgba(0, 0, 0, 0.2)',
          '0px 0px 30px rgba(252, 47, 189, 0.5)',
        ],
        '81': [
          '-1px 1px 0 #fc2fbd',
          '-1px 1px 0 #fc2fbd',
          '-1px 1px 0 #fc2fbd',
          '-1px 1px 0 #fc2fbd',
          '-1px 1px 0 #fc2fbd',
          '-1px 1px 0 #fc2fbd',
          '-1px 1px 0 #2de2e6',
          '1px -1px 0 #2de2e6',
          '1px 1px 0 #2de2e6',
          '-1px -1px 0 #2de2e6',
          '0px 0px 20px rgba(0, 0, 0, 0.2)',
          '0px 0px 30px rgba(252, 47, 189, 0.5)',
        ],
        '82': [
          '-1px 1px 0 #fc2fbd',
          '-1px 1px 0 #fc2fbd',
          '-1px 1px 0 #fc2fbd',
          '-1px 1px 0 #fc2fbd',
          '-1px 1px 0 #fc2fbd',
          '-1px 1px 0 #fc2fbd',
          '-1px 1px 0 #2de2e6',
          '-1px 1px 0 #2de2e6',
          '1px -1px 0 #2de2e6',
          '1px -1px 0 #2de2e6',
          '1px 1px 0 #2de2e6',
          '1px 1px 0 #2de2e6',
          '-1px -1px 0 #2de2e6',
          '-1px -1px 0 #2de2e6',
          '0px 0px 20px rgba(0, 0, 0, 0.2)',
          '0px 0px 30px rgba(252, 47, 189, 0.5)',
        ],
        '83': [
          '0px 0px 20px rgba(0, 0, 0, 0.2)',
          '0px 0px 30px rgba(252, 47, 189, 0.5)',
        ],
        '84': [
          '0px 0px 30px rgba(252, 47, 189, 0.7)',
        ],
      }
    },
    fontFamily: {
      font1: ['Bangers']
    }
  },
  plugins: [],
}

