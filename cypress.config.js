const { defineConfig } = require("cypress")

module.exports = defineConfig({
  projectId: 'o2fido',
  e2e: {
    "defaultCommandTimeout": 40000,
    "pageLoadTimeout": 40000,
    "baseUrl": "https://juice-shop.guardrails.ai/#/",
    "video": false
  },
})
