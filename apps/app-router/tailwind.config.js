const _ = require('lodash')
const baseConfig = require('../../packages/tailwind-config/tailwind.config')

module.exports = _.merge(baseConfig, {
  theme: {
    extend: {
      // Add your additional configuration here
      colors: {
        'custom-color-2': '#FF0000'
      }
      // Add other custom configurations as needed
    }
  },
  plugins: [
    // Add your additional plugins here
  ]
})
