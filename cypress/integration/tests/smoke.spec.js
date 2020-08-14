/// <reference types="cypress" />

describe('Smoke tests for Dancing Goat site', () => {

  beforeEach(() => {
    cy.visit('/', {timeout: 10000})
    cy.fixture('data.json').as('data')
  })

  context('en', () => {
    it('validate navigation bar [Cypress.Promise example]', () => {
      cy.get('@data').then(data => cy.navigateAndValidate(data.en))
      cy.get('@data').then(data => cy.validatePanelByPromise(data.en_nav_panel))
    })

    it('validate navigation bar [Cypress.Each example]', () => {
      cy.get('@data').then(data => cy.navigateAndValidate(data.en))
      cy.get('@data').then(data => cy.validatePanelByEach(data.en_nav_panel))
    })
  })

  context('es', () => {
    it('validate navigation bar [Cypress.Promise example]', () => {
      cy.get('@data').then(data => cy.navigateAndValidate(data.es))
      cy.get('@data').then(data => cy.validatePanelByPromise(data.es_nav_panel))
    })

    it('validate navigation bar [Cypress.Each example]', () => {
      cy.get('@data').then(data => cy.navigateAndValidate(data.es))
      cy.get('@data').then(data => cy.validatePanelByEach(data.es_nav_panel))
    })
  })

})
