const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      baseUrl: process.env.CYPRESS_BASE_URL ||
        'https://montserratlanding.vercel.app';
      // implement node event listeners here
    },
  },
});
