const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/routes.cy.js',
    baseUrl:
      process.env.CYPRESS_BASE_URL || 'https://montserratlanding.vercel.app',
    setupNodeEvents(on, config) {
      return config;
    },
  },
  component: {
    specPattern: 'cypress/components.cy.js',
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
});
