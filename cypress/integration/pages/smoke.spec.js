/// <reference types="cypress" />

describe('Smoke tests for Dancing Goat site', () => {

  beforeEach(() => cy.visit('/'))

  context('en', () => {

    it('navigate and validate url', () => cy.navigateAndValidate('en'))

    it('validate navigation bar [Cypress.Promise example]', () => {
      cy.navigateAndValidate('en')

      const myArray = ['Home', 'Product catalog', 'Articles', 'About us', 'Cafes', 'Contact']
      cy.validatePanelByPromise(myArray)
    })

    it('validate navigation bar [Cypress.Each example]', () => {
      cy.navigateAndValidate('en')

      const myArray = ['Home', 'Product catalog', 'Articles', 'About us', 'Cafes', 'Contact', 'English', 'Español']
      cy.validatePanelByEach(myArray)
    })
  })

  context('es', () => {
    it('navigate and validate url', () => cy.navigateAndValidate('es'))

    it('validate navigation bar [Cypress.Promise example]', () => {
      cy.navigateAndValidate('es')

      const myArray = ['Inicio', 'Tienda', 'Artículos', 'Quiénes somos', 'Cafés', 'Contacto']
      cy.validatePanelByPromise(myArray)
    })

    it('validate navigation bar [Cypress.Each example]', () => {
      cy.navigateAndValidate('es')

      const myArray = ['Inicio', 'Tienda', 'Artículos', 'Quiénes somos', 'Cafés', 'Contacto', 'English', 'Español']
      cy.validatePanelByEach(myArray)
    })
  })

})
