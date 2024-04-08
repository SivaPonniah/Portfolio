const plugin = require('tailwindcss/plugin')
const backfaceVisibility = plugin(function ({addUtilities}) {
    addUtilities({
      '.backface-visible': {
        'backface-visibility': 'visible'
      },
      '.backface-hidden': {
        'backface-visibility': 'hidden'
      }
    })
})

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        Linkedin:"#0A66C2"
      },
      components:{

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    backfaceVisibility
  ],
  content: [
    "./node_modules/flowbite/**/*.js"

  ]
}