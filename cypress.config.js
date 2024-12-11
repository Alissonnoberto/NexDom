const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1366,
    viewportHeight: 768,
    supportFile: 'CasosDeTestes/support/e2e.{js,jsx,ts,tsx}',
    specPattern: 'CasosDeTestes/Cts/**/*.cy.{js,jsx,ts,tsx}',
    testIsolation: false
  },
});