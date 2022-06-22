/// <reference types="cypress" />

import selectors from "../support/selectors"

context('Cypress - Search', () => {
  before(() => cy.navigateToHomeAndDismissPopUp())

  it('should search for product - apple', () => {
    cy.searchProducts('Apple')

    cy.get(selectors.searchValue)
      .should('exist')

    cy.getProductCount()
      .should('have.length', 2)

    cy.getProductNames()
      .then(($productCount) => {
        for (let i = 0; i < $productCount; i += 1) {
          cy.get(selectors.searchItemName)
            .eq(i)
            .invoke('text')
            .should('contain', 'Apple')
            .and('not.contain', 'Banana')
        }
      })
  })
})
