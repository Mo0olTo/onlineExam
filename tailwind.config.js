/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{html,ts}",
     "./node_modules/flowbite/**/*js"
  ],
  theme: {
    extend: {},
       container:{
        center:true
          },

          keyframes:{
            fadeInRight:{
              '0%': { opacity: '0', transform: 'translatex(-70%)' },
              '100%': { opacity: '1', transform: 'translatex(0)' },
            }
          },
          animation:{
            fadeInRight: 'fadeInRight 1.5s ease-in forwards',
          }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

