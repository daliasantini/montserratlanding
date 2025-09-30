const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // E2E tests for routes/pages
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    baseUrl: "https://montserratlanding.vercel.app",
    setupNodeEvents(on, config) {
    
      return config;
    },
  },
  component: {
    // Component tests
    specPattern: "cypress/component/**/*.cy.{js,jsx,ts,tsx}",
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
