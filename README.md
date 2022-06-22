# qa-automation-challenge

# Test Plan
- https://github.com/guardrailsio/qa-automation-challenge#integration-testing-exercise

# Test Objective
To automate the awesome OWASP Juice shop

# Language 
- Javascript

# Tools
- Cypress
- Jest
- Supertest
- Node JS 16.15.1

# Executing tests
- Clone repository and checkout to code directory
- Ensure Node JS 16.x.x is present on system
- Install node modules, run ```npm install``` on terminal
- Ensure chrome browser is present, then run ```npm run test:cypress``` on terminal for e2e test
- Run ```npm run test:integration``` on terminal for integration test
- Run ```npm test``` on terminal for both e2e and integration test
- Run ```npm run lint``` on terminal to lint files