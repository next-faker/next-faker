const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: false,
  trailingSlash: true,
})
module.exports = withNextra()
