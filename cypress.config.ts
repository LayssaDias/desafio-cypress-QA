import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || "http://lojaebac.ebaconline.art.br/",
    env: {
      apiUrl: process.env.API_URL || "https://serverest.dev/",
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    specPattern: "cypress/e2e/**/*.cy.ts",
    supportFile: "cypress/support/e2e.ts",
    video: true,
    screenshotOnRunFailure: true
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome-report",
    reportFileName: "full-regression-report",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    reportPageTitle: "Desafio QA - Relatório de Regressão",
    embeddedScreenshots: true,
    inlineAssets: true
  }
});