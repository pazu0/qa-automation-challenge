/// <reference types="cypress" />

import selectors from '../support/selectors'
import data from '../fixtures/data'
import { orderPage } from './order.page'
 
context('Cypress - Order', () => {
  beforeEach(() => {
    cy.login(data.email, data.password)
  })

  it('should make an order of only one item', () => {
    orderPage(selectors, data, 1)

    cy.contains(selectors.thankYou)
      .should('exist')

    cy.logout()
  })

  it('should make an order of more than one item - precisely 2 items', () => {
    orderPage(selectors, data, 2)

    cy.contains(selectors.thankYou)
      .should('exist')

    cy.logout()
  })
})
