/// <reference types="cypress" />

describe('Smoke tests for Dancing Goat site', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.fixture('data.json').as('data')
  })

  context('en', () => {
    it.only('validate products in store', () => {
      cy.get('@data').then(data => cy.navigateAndValidate(data.en))
      cy.contains('Product catalog').click()

      cy.get('#product-list > div').as('products')
      cy.get('@products').then(data => {
        // validate count
        expect(data.length).eq(2)
        // validate product title
        expect(data.find('h1')[0].textContent).eq('Brazil Natural Barra Grande')
        expect(data.find('.product-tile-price')[0].textContent.trim()).eq('$8.50')
        // validate product price
        expect(data.find('h1')[1].textContent).eq('Kenya Gakuyuni AA')
        expect(data.find('.product-tile-price')[1].textContent.trim()).eq('$10.50')
      })
    })

    xit('validate navigation bar [Cypress.Each example]', () => {
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
