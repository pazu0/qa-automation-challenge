const orderPage = (selectors, data, numberOfItems) => {
  cy.get(selectors.addToBasket)
    .should('exist')

  cy.addToBasket(numberOfItems)

  cy.checkout()

  cy.addNewAddress()

  cy.fillAddressForm(data.address)

  cy.selectAddress()

  cy.chooseDeliverySpeed()

  cy.addPaymentCard(data.card)

  cy.placeOrder()
}

module.exports = { orderPage }