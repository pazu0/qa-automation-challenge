const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "viewportWidth": 1366,
    "viewportHeight": 768,
    "defaultCommandTimeout": 40000,
    "pageLoadTimeout": 40000,
    "baseUrl": "https://juice-shop.guardrails.ai/#/",
    "video": false
  },
});
