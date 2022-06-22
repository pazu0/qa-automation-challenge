import selectors from './selectors'

Cypress.Commands.add('navigateToHomeAndDismissPopUp', () => {
  cy.visit('/')
    .contains(selectors.dismiss)
    .click()
})

Cypress.Commands.add('login', (email, password) => {
  cy.navigateToHomeAndDismissPopUp()

  cy.get(selectors.account)
    .click()

  cy.get(selectors.login)
    .click()

  cy.get(selectors.email)
    .type(email)

  cy.get(selectors.password)
    .type(password)

  cy.get(selectors.submit)
    .click()
})

Cypress.Commands.add('logout', () => {
  cy.get(selectors.account)
    .click()

  cy.get(selectors.logout)
    .click()
})

Cypress.Commands.add('addToBasket', (numberOfItems) => {
  for (let i = 0; i < numberOfItems; i += 1) {
    cy.get(selectors.addToBasket)
      .eq(i)
      .click()
  }
  cy.contains(selectors.yourBasket)
    .click()
})

Cypress.Commands.add('checkout', () => {
  cy.reload()
  cy.wait(1000)
  cy.get(selectors.checkout)
    .click()
})

Cypress.Commands.add('addNewAddress', () => {
  cy.get(selectors.addNewAddress)
    .click()
})

Cypress.Commands.add('fillAddressForm', (address) => {
  cy.get(selectors.country)
    .type(address.country)

  cy.get(selectors.name)
    .type(address.name)

  cy.get(selectors.phone)
    .type(address.phone)

  cy.get(selectors.zip)
    .type(address.zip)

  cy.get(selectors.street)
    .type(address.street)

  cy.get(selectors.city)
    .type(address.city)

  cy.get(selectors.state)
    .type(address.state)

  cy.get(selectors.submit)
    .click({ force: true })
})

Cypress.Commands.add('selectAddress', () => {
  cy.get(selectors.radio)
    .eq(0)
    .click()

  cy.get(selectors.continue)
    .click({ force: true })
})

Cypress.Commands.add('chooseDeliverySpeed', () => {
  cy.get(selectors.radio)
    .eq(0)
    .click()

  cy.get(selectors.continue)
    .click({ force: true })
})

Cypress.Commands.add('addPaymentCard', (card) => {
  cy.contains(selectors.addCard)
    .click()

  cy.get(selectors.cardInput)
    .eq(0)
    .type(card.name)

  cy.get(selectors.cardInput)
    .eq(1)
    .type(card.number)

  cy.get(selectors.cardInput)
    .eq(2)
    .select('1')

  cy.get(selectors.cardInput)
    .eq(3)
    .select('2080')

  cy.get(selectors.submit)
    .eq(0)
    .click()

  cy.get(selectors.radio)
    .eq(0)
    .click()

  cy.get(selectors.continue)
    .click({ force: true })
})

Cypress.Commands.add('placeOrder', () => {
  cy.contains(selectors.placeOrder)
    .click()
})

Cypress.Commands.add('searchProducts', (product) => {
  cy.get(selectors.searchIcon)
    .click()

  cy.get(selectors.search)
    .type(product)

  cy.get(selectors.search)
    .type('{enter}')
})

Cypress.Commands.add('getProductCount', () => {
  cy.get(selectors.searchItemName)
})

Cypress.Commands.add('getProductNames', () => {
  cy.get(selectors.searchItemName)
    .its('length')
    .as('productCount')

  cy.get('@productCount').then(($productCount) => $productCount)
})
